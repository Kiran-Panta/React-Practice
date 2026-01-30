import { useState } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

function TodoApp() {
  // Set document title
  useDocumentTitle('Todo App - Kiran Panta | React Intern');

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [priority, setPriority] = useState('medium');

  // Add todo
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: inputValue,
        completed: false,
        priority: priority
      }]);
      setInputValue('');
    }
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(prev => prev.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ));
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  // Clear completed
  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Priority color
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  // Counts
  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

      {/* Add todo */}
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l"
          placeholder="Add new task"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && addTodo()}
        />
        <select
          className="p-2 border-t border-b"
          value={priority}
          onChange={e => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="flex justify-center mb-4 space-x-2">
        <button
          className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('all')}
        >
          All ({todos.length})
        </button>
        <button
          className={`px-3 py-1 rounded ${filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('active')}
        >
          Active ({activeCount})
        </button>
        <button
          className={`px-3 py-1 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedCount})
        </button>
      </div>

      {/* Todo list */}
      <div className="space-y-2">
        {filteredTodos.length === 0 ? (
          <p className="text-center text-gray-500 py-8">
            {filter === 'all' ? 'No tasks yet' : `No ${filter} tasks`}
          </p>
        ) : (
          filteredTodos.map(todo => (
            <div key={todo.id} className="flex items-center p-3 border rounded-lg hover:shadow-md transition-all duration-200 group">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="mr-3 w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 transition-all duration-200"
              />
              <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''} transition-all duration-200`}>
                {todo.text}
              </span>
              <span className={`px-2 py-1 text-xs text-white rounded-full ml-2 font-medium ${getPriorityColor(todo.priority)}`}>
                {todo.priority}
              </span>
              <button
                className="ml-2 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={() => deleteTodo(todo.id)}
              >
                ✕
              </button>
              <div className="ml-2 text-gray-400 cursor-move opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                ⋮⋮
              </div>
            </div>
          ))
        )}
      </div>

      {/* Clear completed */}
      {completedCount > 0 && (
        <button
          className="w-full mt-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={clearCompleted}
        >
          Clear Completed ({completedCount})
        </button>
      )}
    </div>
  );
}

export default TodoApp;