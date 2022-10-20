import "./Frame.css"
import React from 'react';
export default function Frame({children}) {
  return <div className="frame">
    {children}
  </div>
}