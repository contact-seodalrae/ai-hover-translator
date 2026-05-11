const GOOGLE_API_KEY = 'your-google-api-key'

export const translateWithGoogle = async (text, targetLang) => {
  const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: text,
      target: targetLang,
      format: 'text'
    })
  })

  const data = await response.json()
  if (data.data && data.data.translations) {
    return data.data.translations[0].translatedText
  }
  throw new Error('Translation failed')
}