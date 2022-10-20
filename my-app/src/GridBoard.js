import React from 'react'
import Square from './Square.js'

// Represents a 10 x 18 grid of grid squares
export default function GridBoard(props) {
   const grid = []

  // generates an array of 18 rows, each containing 10 GridSquares.
  for (let row = 0; row < 5; row ++) {
    grid.push([])
    for (let col = 0; col < 5; col ++) {
      const square = new Square(row, col, null)
      
      grid[row].push(square)
    }
  }
  // The components generated in makeGrid are rendered in div.grid-board
  
  return (
    <div className='grid-board'>
      {grid}
    </div>
  )
}

