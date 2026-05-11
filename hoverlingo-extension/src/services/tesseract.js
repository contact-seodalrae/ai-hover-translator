import { createWorker } from 'tesseract.js'

export const extractTextFromImage = async (imageUrl) => {
  const worker = await createWorker('eng')
  const { data: { text } } = await worker.recognize(imageUrl)
  await worker.terminate()
  return text
}