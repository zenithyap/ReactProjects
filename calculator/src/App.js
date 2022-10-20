import Frame from "./components/Frame.js"
import Screen from "./components/Screen.js"
import Button from "./components/Button.js"
import ButtonBox from "./components/ButtonBox.js"
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [val, setVal] = useState({
    num:0,
    store:0,
    sign:''
  })

  const values = [
    ['C', '+-', '%', '/'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ]

  const numberEvent = (e) => {
    const value = e.target.innerHTML;
    setVal({
      ...val,
      num : Number(val.num + value),
    })
  }; 

  const clearEvent = (e) => {
    setVal({
      num : 0,
      store : 0,
      sign : ''
    })
  }

  const signEvent = () => {
    setVal({
      num : val.num * -1,
    })
  }

  const modEvent = () => {
    setVal({
      num : 0,
      store : val.num,
      sign : '%'
    })
  }

  const divideEvent = () => {
    setVal({
      num : 0,
      store : val.num,
      sign : '/'
    })
  }

  const multiplyEvent = () => {
    setVal({
      num : 0,
      store : val.num,
      sign : 'X'
    })
  }

  const subEvent = () => {
    setVal({
      num : 0,
      store : val.num,
      sign : '-'
    })
  }

  const addEvent = () => {
    setVal({
      num : 0,
      store : val.num,
      sign : '+'
    })
  }

  const equalEvent = () => {
    setVal({
      num : val.sign === '+' 
              ? val.num + val.store
              : val.sign === '-'
              ? val.store - val.num
              : val.sign === 'X'
              ? val.store * val.num
              : val.sign === '/'
              ? val.store / val.num
              : val.sign === '%'
              ? val.store % val.num
              : 0 ,
      res : 0,
      sign : ''
    })
  }

  const decimalEvent = () => {
    setVal({
      num : !val.num.toString().includes(".") ? val.num + '.' : val.num
    })
  }

  return (
    <Frame>
      <Screen value={val.num ? val.num : val.res}/>
      <ButtonBox>
      {
        values.flat().map((btn, i) => {
          return (
            <Button
            key = {i}
            className = {btn === '=' ? "equals" : "pushable"}
            spanName = {btn === '=' ? "equals-front" : "front"}
            value = {btn}
            onclick = { 
              btn === 'C'
                ? clearEvent
                : btn === '+-'
                ? signEvent
                : btn === '%'
                ? modEvent
                : btn === '/'
                ? divideEvent
                : btn === 'X'
                ? multiplyEvent
                : btn === '-'
                ? subEvent
                : btn === '+'
                ? addEvent
                : btn === '.'
                ? decimalEvent
                : btn === '='
                ? equalEvent
                : numberEvent
            }
            />
        )})
      }
    </ButtonBox>
    </Frame>
  )
}

