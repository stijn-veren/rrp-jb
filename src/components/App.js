import AppHeader from './AppHeader'
import SearchPanel from './SearchPanel'
import TodoList from './TodoList'

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false },
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  )
}

export default App
