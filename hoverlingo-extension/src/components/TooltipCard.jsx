import React from 'react'

const TooltipCard = ({ text, translation }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-xs">
      <p className="text-sm text-gray-600 mb-2">{text}</p>
      <p className="text-sm font-medium">{translation}</p>
    </div>
  )
}

export default TooltipCard