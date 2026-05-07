import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import TaskStats from './TaskStats';

function TaskTrackerNotes() {
    // Состояния
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    // Загрузка из localStorage при старте
    useEffect(() => {
        const saved = localStorage.getItem('tasks');
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }, []);

    // Сохранение в localStorage при изменении
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Добавление задачи
    const addTask = (title) => {
        const newTask = {
            id: Date.now().toString(),
            title: title,
            completed: false,
            createdAt: new Date(),
            priority: 'medium'
        };
        setTasks([...tasks, newTask]);
    };

    // Переключение статуса задачи
    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    // Удаление задачи
    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Фильтрация задач
    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-8">
            <div className="max-w-2xl mx-auto px-4">
                {/* Заголовок */}
                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    📝 Task Tracker
                </h1>

                {/* Форма добавления */}
                <TaskForm onAdd={addTask} />

                {/* Фильтры */}
                <TaskFilter
                    currentFilter={filter}
                    onFilterChange={setFilter}
                />

                {/* Список задач */}
                <TaskList
                    tasks={filteredTasks}
                    onToggle={toggleTask}
                    onDelete={deleteTask}
                />

                {/* Статистика */}
                <TaskStats tasks={tasks} />
            </div>
        </div>
    );
}

export default TaskTrackerNotes;