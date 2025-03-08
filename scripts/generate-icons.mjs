import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const iconListPath = './icon-list.json';

// Load icons data
const { icons } = JSON.parse(fs.readFileSync(path.join(__dirname, iconListPath), 'utf-8'))

const ICON_DIR = path.join(__dirname, '../src/generated/icons')
const INDEX_FILE = path.join(__dirname, '../src/generated/index.ts')

// Clean and create directories
fs.rmSync(ICON_DIR, { recursive: true, force: true })
fs.mkdirSync(ICON_DIR, { recursive: true })

let exports = []
let iconName= {};

const sanitizeName = (name) => {
  return name
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      word.toUpperCase()
    )
    .replace(/\s+/g, '')
    .replace(/[^a-zA-Z0-9]/g, '')
}


icons.forEach((iconData) => {
  const name = sanitizeName(iconData.properties.name)
  const componentName = `${name}Icon`
  const fileName = `${name}.tsx`
  const filePath = path.join(ICON_DIR, fileName)

  if(iconName[name]) {
    return;
  }

  iconName[name] = true;
  
  const svgContent = `
import React from 'react';
import { useDingIcon } from '../../context';

export const ${componentName} = ({
  color,
  fill,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  const context = useDingIcon();
  return (
    <svg
      viewBox="0 0 1024 1024"
      stroke={color ?? context.color}
      fill={fill ?? context.fill}
      {...props}
    >
      ${iconData.icon.paths.map((path, i) => `
        <path
          key="${i}"
          d="${path}"
          ${Object.entries(iconData.attrs[i] || {})
            .filter(([k]) => !['fill', 'stroke'].includes(k))
            .map(([k, v]) => `${k}="${v}"`).join(' ')}
        />`
      ).join('\n')}
    </svg>
  );
};
`
  
  fs.writeFileSync(filePath, svgContent)
  exports.push(`export { ${componentName} } from './icons/${name}'`)
})

// Generate index file
fs.writeFileSync(INDEX_FILE, exports.join('\n'))