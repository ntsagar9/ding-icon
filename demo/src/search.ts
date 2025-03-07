export const searchIcons = (icons: Array<{ name: string }>, query: string) => {
  return icons.filter(icon => 
    icon.name.toLowerCase().includes(query.toLowerCase())
  )
}