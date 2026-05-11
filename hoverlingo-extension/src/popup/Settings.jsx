import React, { useState, useEffect } from 'react'
import { getStorage, setStorage } from '../utils/storage.js'

const Settings = () => {
  const [translationService, setTranslationService] = useState('google')
  const [enableHover, setEnableHover] = useState(true)
  const [enableOCR, setEnableOCR] = useState(true)

  useEffect(() => {
    const loadSettings = async () => {
      const service = await getStorage('translationService') || 'google'
      const hover = await getStorage('enableHover') !== false
      const ocr = await getStorage('enableOCR') !== false
      setTranslationService(service)
      setEnableHover(hover)
      setEnableOCR(ocr)
    }
    loadSettings()
  }, [])

  const handleServiceChange = async (service) => {
    setTranslationService(service)
    await setStorage('translationService', service)
  }

  const handleHoverChange = async (enabled) => {
    setEnableHover(enabled)
    await setStorage('enableHover', enabled)
  }

  const handleOCRChange = async (enabled) => {
    setEnableOCR(enabled)
    await setStorage('enableOCR', enabled)
  }

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Translation Service</label>
          <select
            value={translationService}
            onChange={(e) => handleServiceChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="google">Google Translate</option>
            <option value="openai">OpenAI</option>
            <option value="libre">LibreTranslate</option>
          </select>
        </div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={enableHover}
            onChange={(e) => handleHoverChange(e.target.checked)}
            className="mr-2"
          />
          Enable hover translation
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={enableOCR}
            onChange={(e) => handleOCRChange(e.target.checked)}
            className="mr-2"
          />
          Enable OCR for images
        </label>
      </div>
    </div>
  )
}

export default Settings