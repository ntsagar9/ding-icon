import React, { useEffect } from 'react'
import { useDingIcon } from './context';

type IconName = string;

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName
  size?: number | string
  color?: string
}

const styleCache = new Set();

export const Icon = ({
  name,
  size,
  color,
  className = '',
  ...props
}: IconProps) => {
  const context = useDingIcon()

  useEffect(() => {
    if (typeof window !== 'undefined' && !styleCache.has(name)) {
      import(`../styles/icons/${name}.css`)
        .then(() => styleCache.add(name))
        .catch(console.error);
    }
  }, [name]);

  
  return (
    <span
      className={`icon-${name} ${className}`}
      style={{
        fontSize: size || context.size,
        color: color || context.color,
        fontFamily: 'icomoon',
        lineHeight: 1,
        display: 'inline-block',
        ...props.style
      }}
      {...props}
    />
  )
}