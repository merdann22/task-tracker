import Backlog from "./Backlog";
import InProgress from "./InProgress";
import React from "react";
import Ready from "./Ready";
import Finished from "./Finished";


let initialWorked = [
    {
        id: 1,
        text: 'Login page – performance issues',
        type: 'Backlog',
    },
    {
        id: 2,
        text: 'Sprint bugfix',
        type: 'Backlog',
    },
    {
        id: 3,
        text: 'Shop page – performance issues',
        type: 'Ready',
    },
    {
        id: 4,
        text: 'Checkout bugfix',
        type: 'Ready',
    },
    {
        id: 5,
        text: 'Shop bug1',
        type: 'Ready',
    },
    {
        id: 6,
        text: 'Shop bug2',
        type: 'Ready',
    },
    {
        id: 7,
        text: 'Shop page – performance issues',
        type: 'Ready',
    },
    {
        id: 8,
        text: 'User page – performance issues',
        type: 'In Progress',
    },
    {
        id: 9,
        text: 'Auth bugfix',
        type: 'In Progress',
    },
    {
        id: 10,
        text: 'Main page – performance issues',
        type: 'Finished',
    },
    {
        id: 11,
        text: 'Main page bugfix',
        type: 'Finished',
    },
]

function TaskTrackerWork() {

    // СОСТОЯНИЕ: массив всех карточек
    // worked - хранит все карточки с их свойствами (id, text, type)
    // setWorked - функция для обновления этого массива
    // initialWorked - начальные данные (массив карточек)
    const [worked, setWorked] = React.useState(initialWorked);

    // ВЫЧИСЛЯЕМОЕ ЗНАЧЕНИЕ: следующий ID для новой карточки
    // worked.length - текущее количество карточек в массиве
    // + 1 - добавляем единицу для получения следующего ID
    const indexAdd = worked.length + 1;


    // ФУНКЦИЯ 1: ДОБАВЛЕНИЕ НОВОЙ КАРТОЧКИ В BACKLOG
    const addBacklogCard = (newText) => {

        // Создаем объект новой карточки
        const newCard = {
            id: indexAdd,        // ID новой карточки
            text: newText,       // Текст задачи от пользователя
            type: 'Backlog',     // Новая карточка всегда в Backlog
        };

        // ПЕРВЫЙ ВЫЗОВ: добавляем карточку
        const updatedArray = [...worked, newCard];
        setWorked(updatedArray);

        console.log('Новая карточка:', newCard);
        console.log('Новый массив:', updatedArray);
        console.log('Старый массив:', worked);
    }


    // ФУНКЦИЯ 2: ПЕРЕМЕЩЕНИЕ ИЗ BACKLOG В READY
    const moveToReady = (itemId) => {
        setWorked(prevWorked => {

            // ШАГ 1: Находим индекс карточки, которую хотим переместить
            // И сразу проверяем, что она имеет тип 'Backlog'
            const index = prevWorked.findIndex(
                item => item.id === itemId && item.type === 'Backlog'
            );

            // ШАГ 2: Если карточка не найдена (index = -1),
            // возвращаем исходный массив без изменений
            if (index === -1) return prevWorked;

            // ШАГ 3: Создаем НОВУЮ карточку (копию, но с типом 'Ready')
            // Важно: не мутируем исходную карточку!
            const movedCard = { ...prevWorked[index], type: 'Ready' };

            // ШАГ 4: Создаем новый массив:
            // - берем все элементы ДО перемещаемой карточки (slice(0, index))
            // - берем все элементы ПОСЛЕ перемещаемой карточки (slice(index + 1))
            // - добавляем перемещенную карточку в КОНЕЦ
            const newWorked = [
                ...prevWorked.slice(0, index),      // элементы до
                ...prevWorked.slice(index + 1),     // элементы после
                movedCard                           // перемещенная карточка в конце
            ];

            return newWorked;
        });
    }


    // ФУНКЦИЯ 3: ПЕРЕМЕЩЕНИЕ ИЗ READY В IN PROGRESS
    const moveToProgress = (itemId) => {

        setWorked(prevWorked =>
        prevWorked.map(item => item.id === itemId && item.type === 'Ready'
        ? { ...item, type: 'In Progress' }
        : item));
    }

    return <div className="flex items-start justify-around mb-20">

        <Backlog className="text-[16px]"
                 props={worked}
                 onAddCard={addBacklogCard}
        />
        <Ready className="text-[16px]"
               props={worked}
               onMoveToReady={moveToReady}
        />
        <InProgress className="text-[16px]"
                    props={worked}
                    onMoveToProgress={moveToProgress}
        />
        <Finished className="text-[16px]"
                  props={worked}
        />

    </div>
}
export default TaskTrackerWork;