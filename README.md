# Ding Icons

A lightweight, tree-shakeable React icon library with theme support.

## Features

- 🎨 Theme customization through context provider
- 🌳 Tree-shaking support
- 🛠 TypeScript ready
- ⚡️ Optimized for production
- 💻 SSR compatible

## Installation

```bash
pnpm add ding-icons
```

```bash
yarn add ding-icons
```

```bash
npm install ding-icons
```



## Usage
```tsx
import { DingIconProvider, Icon, Icons } from 'ding-icons'

function App() {
  return (
    <DingIconProvider color="#334155" size="1.5em">
      <div className="app-header">
        <Icon name="zoom" className="icon" />
        <Icon 
          name="zoom-in"
          size="2em"
          className="featured-icon"
          style={{ marginLeft: 12 }}
        />
        <Icon 
          name="zoom-out"
          color="#ef4444"
        />
      </div>
    </DingIconProvider>
  )
}
```