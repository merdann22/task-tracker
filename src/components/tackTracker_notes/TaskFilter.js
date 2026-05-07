import React from 'react';

function TaskFilter({ currentFilter, onFilterChange }) {
    const filters = [
        { value: 'all', label: 'Все' },
        { value: 'active', label: 'Активные' },
        { value: 'completed', label: 'Выполненные' }
    ];

    return (
        <div className="flex gap-2 mb-6">
            {filters.map(filter => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                        currentFilter === filter.value
                            ? 'bg-white text-blue-600'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}

export default TaskFilter;