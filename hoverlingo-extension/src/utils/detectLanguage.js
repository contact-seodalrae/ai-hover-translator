export const detectLanguage = (text) => {
  // Simple language detection based on common words
  if (text.includes('the') || text.includes('and')) return 'en'
  if (text.includes('el') || text.includes('y')) return 'es'
  if (text.includes('le') || text.includes('et')) return 'fr'
  if (text.includes('der') || text.includes('und')) return 'de'
  if (text.includes('và') || text.includes('là')) return 'vi'
  return 'en' // default
}