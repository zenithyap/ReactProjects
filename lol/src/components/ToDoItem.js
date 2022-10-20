export default function ToDoItem(props, i, check) {
  return <li key={i}>
      <input type='checkbox' checked={check[i]} /> {props}
    </li>
}