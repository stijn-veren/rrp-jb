import TodoListItem from './TodoListItem'

const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem label="Learn React" />
      </li>
      <li>
        <TodoListItem label="Build Awesome App" important />
      </li>
    </ul>
  )
}

export default TodoList
