import React, { useState } from 'react';

function TaskForm({ onAdd }) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();  // предотвращаем перезагрузку страницы
        if (!inputValue.trim()) return;

        onAdd(inputValue);    // вызываем функцию из App
        setInputValue('');    // очищаем поле
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Что нужно сделать?"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                    Добавить
                </button>
            </div>
        </form>
    );
}

export default TaskForm;