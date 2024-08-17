import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [currentTodo, setCurrentTodo] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddTodo = () => {
        if (isEditing) {
            const newTodos = [...todos];
            newTodos[editingIndex].text = currentTodo;
            setTodos(newTodos);
            setIsEditing(false);
            setEditingIndex(null);
        } else {
            setTodos([...todos, { text: currentTodo, completed: false }]);
        }
        setCurrentTodo('');
    };

    const handleToggleComplete = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(reorderTodos(newTodos));
    };

    const reorderTodos = (todos) => {
        const completedTodos = todos.filter(todo => todo.completed);
        const incompletedTodos = todos.filter(todo => !todo.completed);
        return [...incompletedTodos, ...completedTodos];
    };

    const handleEdit = (index) => {
        setCurrentTodo(todos[index].text);
        setIsEditing(true);
        setEditingIndex(index);
    };

    return (
        <div>
            <TodoInput
                currentTodo={currentTodo}
                setCurrentTodo={setCurrentTodo}
                handleAddTodo={handleAddTodo}
                isEditing={isEditing}
            />
            <TodoList todos={todos} setTodos={setTodos} onEdit={handleEdit} onToggleComplete={handleToggleComplete} />
        </div>
    );
};

export default App;
