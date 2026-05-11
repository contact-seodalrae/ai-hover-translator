// OCR functionality for images
import { extractTextFromImage } from '../services/tesseract.js'

export const processImage = async (imageSrc) => {
  try {
    const text = await extractTextFromImage(imageSrc)
    return text
  } catch (error) {
    console.error('OCR error:', error)
    return ''
  }
}