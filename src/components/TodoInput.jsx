import React from 'react';

const TodoInput = ({ currentTodo, setCurrentTodo, handleAddTodo, isEditing }) => {
    return (
        <header>
            <input
                type="text"
                value={currentTodo}
                onChange={(e) => setCurrentTodo(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTodo}>
                {isEditing ? 'Update Task' : 'Add Task'}
            </button>
        </header>
    );
};

export default TodoInput;
