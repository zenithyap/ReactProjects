import "./Screen.css"
import React from 'react';
import { Textfit } from "react-textfit";

export default function Screen({value = 0}) {
    return <Textfit className="screen">{value}</Textfit>
}