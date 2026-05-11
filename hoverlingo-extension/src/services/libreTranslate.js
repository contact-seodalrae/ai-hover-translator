export const translateWithLibreTranslate = async (text, targetLang) => {
  const response = await fetch('https://libretranslate.com/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: text,
      source: 'auto',
      target: targetLang
    })
  })

  const data = await response.json()
  return data.translatedText
}