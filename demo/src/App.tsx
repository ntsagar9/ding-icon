import { useState } from 'react'
import { DingIconProvider, Icon } from 'ding-icons'
import icons from './icons.json'
import useSearch from './hooks/useSearch'
import IconGrid from './components/IconGrid'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const filteredIcons = useSearch(searchQuery, icons)

  return (
    <DingIconProvider color="#334155" size="24px">
      <div className="container">
        <h1 className="title">Ding Icons ({icons.length})</h1>
        
        <input
          type="text"
          placeholder="Search icons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        <IconGrid icons={filteredIcons} />
      </div>
    </DingIconProvider>
  )
}