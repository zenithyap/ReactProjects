import ToDoItem from './ToDoItem'

export default function ToDoList(props, check) {
  return (
    <ul>
      {props.map((todo, i) => (
        ToDoItem(todo, i, check)
      ))}
    </ul>
  )
}