import React from 'react'
import Settings from './Settings.jsx'
import LanguageSelector from './LanguageSelector.jsx'

const Popup = () => {
  return (
    <div className="w-80 p-4 bg-white shadow-lg">
      <h1 className="text-xl font-bold mb-4">HoverLingo</h1>
      <LanguageSelector />
      <Settings />
    </div>
  )
}

export default Popup