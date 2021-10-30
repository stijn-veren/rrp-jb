import TodoListItem from '../TodoListItem'
import './TodoList.css'

const TodoList = ({ items, onDeleted, toggleImportant, toggleDone }) => {
  const elements = items.map((item) => {
    const { id, ...itemProps } = item

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          toggleImportant={() => toggleImportant(id)}
          toggleDone={() => toggleDone(id)}
        />
      </li>
    )
  })

  return <ul className="list-group todo-list">{elements}</ul>
}

export default TodoList
