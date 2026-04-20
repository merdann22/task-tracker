import React from 'react';

function TaskStats({ tasks }) {
    if (tasks.length === 0) {
        return null;  // если задач нет - ничего не показываем
    }

    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const active = tasks.filter(t => !t.completed).length;

    return (
        <div className="mt-4 text-center text-white">
            Всего: {total} |
            Выполнено: {completed} |
            Активных: {active}
        </div>
    );
}

export default TaskStats;