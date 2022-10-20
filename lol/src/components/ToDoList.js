import ToDoItem from './ToDoItem'

export default function ToDoList(props) {
  return (
    <ul>
      {props.map((todo, i) => (
        ToDoItem(todo, i)
      ))}
    </ul>
  )
}