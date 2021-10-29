import './TodoListItem.css'

const TodoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  done,
  important,
}) => {
  let classNames = 'todo-list-item'

  if (done) {
    classNames += ' done'
  }

  if (important) {
    classNames += ' important'
  }

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
  }

  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        style={style}
        onClick={onToggleDone}
      >
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onToggleImportant}
      >
        <i className="fas fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeleted}
      >
        <i className="far fa-trash-alt" />
      </button>
    </span>
  )
}

export default TodoListItem
