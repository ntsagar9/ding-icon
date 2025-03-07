import { useState, useEffect } from 'react'

export default function useSearch(query: string, icons: string[]) {
  const [results, setResults] = useState(icons)

  useEffect(() => {
    if (!query) {
      setResults(icons)
      return
    }

    const searchResults = icons.filter(icon =>
      icon.toLowerCase().includes(query.toLowerCase())
    )
    
    setResults(searchResults)
  }, [query, icons])

  return results
}