import React from 'react'

const GlassPanel = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-4">
      {children}
    </div>
  )
}

export default GlassPanel