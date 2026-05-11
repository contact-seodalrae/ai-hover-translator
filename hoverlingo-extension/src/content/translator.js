// Translation logic
import { translateWithGoogle } from '../services/googleTranslate.js'
import { translateWithOpenAI } from '../services/openai.js'
import { translateWithLibreTranslate } from '../services/libreTranslate.js'

const getTranslationService = async () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(['translationService'], (result) => {
      resolve(result.translationService || 'google')
    })
  })
}

export const translateText = async (text, targetLang) => {
  try {
    const service = await getTranslationService()
    let translated
    switch (service) {
      case 'openai':
        translated = await translateWithOpenAI(text, targetLang)
        break
      case 'libre':
        translated = await translateWithLibreTranslate(text, targetLang)
        break
      case 'google':
      default:
        translated = await translateWithGoogle(text, targetLang)
        break
    }
    return translated
  } catch (error) {
    console.error('Translation error:', error)
    return text
  }
}