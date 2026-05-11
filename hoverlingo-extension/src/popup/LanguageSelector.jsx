import React, { useState } from 'react'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'vi', name: 'Vietnamese' },
]

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState('en')

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Target Language</label>
      <select
        value={selectedLang}
        onChange={(e) => setSelectedLang(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>{lang.name}</option>
        ))}
      </select>
    </div>
  )
}

export default LanguageSelector