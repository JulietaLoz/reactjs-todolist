import React from 'react';

const TodoCard = ({ todo, onDelete, onEdit, onToggleComplete }) => {
    return (
        <div className={`todoItem ${todo.completed ? 'completed' : ''}`}>
            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </p>
            <div className="actionsContainer">
                <button onClick={onToggleComplete} dangerouslySetInnerHTML={{ __html: '<i class="fa-solid fa-check"></i>' }}></button>
                <button onClick={onEdit} dangerouslySetInnerHTML={{ __html: '<i class="fa-solid fa-pen"></i>' }}></button>
                <button onClick={onDelete} dangerouslySetInnerHTML={{ __html: '<i class="fa-solid fa-trash"></i>' }}></button>
            </div>
        </div>
    );
};

export default TodoCard;
