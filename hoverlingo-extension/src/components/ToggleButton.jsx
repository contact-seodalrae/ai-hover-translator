import React from 'react'

const ToggleButton = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded-full p-1 transition-colors ${isOn ? 'bg-blue-500' : 'bg-gray-300'}`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition-transform ${isOn ? 'translate-x-6' : 'translate-x-0'}`}
      />
    </button>
  )
}

export default ToggleButton