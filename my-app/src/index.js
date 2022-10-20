import React from 'react';
import Queue from './Queue'
import ReactDOM from 'react-dom/client';
import './index.css';
import GridBoard from './GridBoard.js'  
import grid from './GridBoard.js'
import Square from './Square.js'
import {useEffect, useState} from 'react'


function Board() {
  
  function valid(x, y) {
    if (x >= 0 && x <= 10 && y >= 0 && y <= 10) {
      return true;
    }
    return false;
  }

  function get_neighbour(square) {
    const x = square.row
    const y = square.col
    const neighbours = []
    const up = grid[x][y + 1]
    const down = grid[x][y - 1]
    const left = grid[x - 1][y]
    const right = grid[x + 1][y]

    if (!up.wall && valid(x, y + 1)) {
      neighbours.push(up);
    }
    if (!down.wall && valid(x, y - 1)) {
      neighbours.push(down);
    }
    if (!left.wall && valid(x - 1, y)) {
      neighbours.push(left);
    }
    if (!right.wall && valid(x + 1, y)) {
      neighbours.push(right);
    }

    return neighbours;
  }

  function search_maze() {
    const visited = []
    const frontier = new Queue()
    const start = grid[0][0]
    frontier.enqueue(start)
    while (!frontier.isEmpty) {
      const current_square = frontier.dequeue()
      current_square.set_wall(false)
      if (current_square.r == 5 && current_square.c == 5) {
        return current_square
        break
      } 

      const neighbours = get_neighbour(current_square)
      for (const neighbour of neighbours) {
        if (!visited.includes(neighbour)) {
          neighbour.set_parent(current_square)
          frontier.enqueue(neighbour)
          visited.push(neighbour)
        }
      }
    }
  }

  return (
    <div>
      <button >
        run
      </button>
      <div className='grid-board'>
        {GridBoard}
      </div>
    </div>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);
