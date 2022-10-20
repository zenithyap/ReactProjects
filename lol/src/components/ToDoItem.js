export default function ToDoItem(props, i) {
  return <li key={i}>
      <input type='checkbox'/> {props}
    </li>
}