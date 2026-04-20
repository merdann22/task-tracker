import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="w-5 h-5 cursor-pointer"
            />
            <span className={`flex-1 ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
        {task.title}
      </span>
            <button
                onClick={() => onDelete(task.id)}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
                Удалить
            </button>
        </div>
    );
}

export default TaskItem;