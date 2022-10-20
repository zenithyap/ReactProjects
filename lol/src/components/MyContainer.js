import React from 'react';
import { useState } from 'react';
import ToDoList from './ToDoList'

export default function MyContainer({children}) {

  const todos = [
    "Setup development environment",
    "Develop website and add content",
    "Deploy to live server"
  ]

  return ToDoList(todos)
}