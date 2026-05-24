import Backlog from "./Backlog";
import InProgress from "./InProgress";
import React from "react";
import Ready from "./Ready";
import Finished from "./Finished";

function TaskTrackerWork({ worked, setWorked }) {

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

            // ШАГ 1: Находим индекс карточки, которую хотим переместить и сразу проверяем, что она имеет тип 'Backlog'
            const index = prevWorked.findIndex(
                item => item.id === itemId && item.type === 'Backlog'
            );

            // ШАГ 2: Если карточка не найдена (index = -1), возвращаем исходный массив без изменений
            if (index === -1) return prevWorked;

            // ШАГ 3: Создаем НОВУЮ карточку (копию, но с типом 'Ready')
            // Важно: не мутируем исходную карточку!
            const movedCard = { ...prevWorked[index], type: 'Ready' };

            // ШАГ 4: Создаем новый массив:
                // - берем все элементы перемещаемой карточки ДО/ПОСЛЕ и добавляем перемещаемую карточку в КОНЕЦ
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

        setWorked(prevWorked =>  {
            const index = prevWorked.findIndex(
                item => item.id === itemId && item.type === 'Ready'
            );

            if (index === -1) return prevWorked;

            const movedCard = { ...prevWorked[index], type: 'In Progress' };

            const newWorked = [
                ...prevWorked.slice(0,index),
                ...prevWorked.slice(index + 1),
                movedCard
                ];

            return newWorked;
        });
    }

    const moveToFinished = (itemId) => {
        setWorked(prevWorked => {
            const index = prevWorked.findIndex(
                item => item.id === itemId && item.type === 'In Progress');

            if (index === -1) return prevWorked;

            const movedCard = { ...prevWorked[index], type: 'Finished' };

            const newWorked = [
                ...prevWorked.slice(0, index),
                ...prevWorked.slice(index + 1),
                movedCard
            ]

            return newWorked;
        });
    }


    return <div className="grid grid-cols-1 gap-10 items-start justify-items-center lg:grid-cols-4 p-5">

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
                  onMoveToFinished={moveToFinished}
        />
    </div>
}
export default TaskTrackerWork;