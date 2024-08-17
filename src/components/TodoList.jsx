import React from 'react';
import TodoCard from './TodoCard';

const TodoList = ({ todos, setTodos, onEdit, onToggleComplete }) => {
    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="main">
            {todos.map((todo, index) => (
                <TodoCard
                    key={index}
                    todo={todo}
                    onDelete={() => handleDelete(index)}
                    onEdit={() => onEdit(index)}
                    onToggleComplete={() => onToggleComplete(index)}
                />
            ))}
        </div>
    );
};

export default TodoList;
