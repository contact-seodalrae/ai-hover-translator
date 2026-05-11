import { useState } from 'react'
import { translateText } from '../content/translator.js'

const useTranslation = () => {
  const [translation, setTranslation] = useState('')
  const [loading, setLoading] = useState(false)

  const translate = async (text, targetLang) => {
    setLoading(true)
    try {
      const result = await translateText(text, targetLang)
      setTranslation(result)
    } catch (error) {
      console.error('Translation error:', error)
      setTranslation('Translation failed')
    } finally {
      setLoading(false)
    }
  }

  return { translation, loading, translate }
}

export default useTranslation