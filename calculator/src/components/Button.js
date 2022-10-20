import "./Button.css"
import React from "react"

export default function Button({className, spanName, value, onclick}) {
    return <button className={className} onClick={onclick}>
        <span className={spanName}>
            {value}
        </span>
    </button>
}