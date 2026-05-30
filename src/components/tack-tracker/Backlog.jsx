import Card from "./Card";
import React from "react";

export default function Backlog ({props,  onAddCard}) {

    const backlogItems = props.filter(item => item.type === 'Backlog');

    // inputValue - хранит текст, который пользователь вводит в поле ввода
    // Начальное значение: пустая строка ("")
    // Когда пользователь печатает в input, сюда сохраняется его текст
    // setInputValue - функция для изменения этого состояния
    const [inputValue, setInputValue] = React.useState("");

    // showInput - управляет видимостью поля ввода для новой карточки
    // false (значение по умолчанию) - поле ввода скрыто, показываем кнопку "Добавить задачу"
    // true - поле ввода видно, показываем input и кнопку "Подтвердить"
    // setShowInput - функция для изменения этого состояния
    const [showInput, setShowInput] = React.useState(false);

    // hiddenButton - управляет видимостью какой-то кнопки (вероятно, для перемещения карточек)
    // true (значение по умолчанию) - кнопка скрыта
    // false - кнопка видна
    // setHiddenButton - функция для изменения этого состояния
    const [hiddenButton, setHiddenButton] = React.useState(true);


    // ОБРАБОТЧИК ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
    // Вызывается при нажатии на кнопку "Подтвердить" после ввода текста
    const handleAddCard = () => {

        // ПРОВЕРКА: ввел ли пользователь что-то осмысленное?
        // inputValue.trim() - удаляет пробелы в начале и конце строки
        // Если после удаления пробелов строка НЕ пустая ( !== "" ), то:
        // - Пользователь ввел какой-то текст (не просто пробелы)
        // - Можно добавлять карточку
        if (inputValue.trim() !== "") {

            // ДЕЙСТВИЕ 1: Вызываем функцию из родительского компонента
            // Передаём введённый текст (inputValue) в родителя
            // Родитель сам создаст новую карточку и добавит её в общий массив
            onAddCard(inputValue);

            // ДЕЙСТВИЕ 2: Очищаем поле ввода
            // Устанавливаем пустую строку, чтобы при следующем открытии поле было чистым
            // Если этого не сделать, в поле останется старый текст
            setInputValue('');

            // ДЕЙСТВИЕ 3: Скрываем поле ввода
            // Возвращаем интерфейс в исходное состояние
            // Показываем кнопку "Добавить задачу" вместо поля ввода и кнопки "Подтвердить"
            setShowInput(false);
        }
    }

    return (

        <div className="bg-gray-200 p-1 w-[260px] max-h-[500px] rounded-[10px] flex flex-col">

            <h1 className="text-center p-1 m-1 w-auto text-[18px]">Backlog</h1>
            <div className="flex flex-col overflow-auto rounded-2xl w-full">
                {backlogItems.map(item => (
                    <Card
                        key={item.id}
                        id={item.id}
                        text={item.text}
                    />
                ))}
                {showInput && (
                    <div className="flex flex-col justify-center items-center w-full px-2">
                        <input
                            className="bg-white p-2 m-2 w-full box-border rounded-[5px] text-gray-700  hover:text-black"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAddCard()}
                            type="text"
                        />
                        <div className="flex justify-between w-full">
                            <button
                                className="bg-blue-600 h-auto p-2 mt-2 mb-2 w-full rounded-[5px] text-white hover:bg-blue-500"
                                type="submit"
                                onClick={()=>{
                                    handleAddCard();
                                    setShowInput(false);
                                    setHiddenButton(true)}}
                            >
                                Подтвердить
                            </button>
                        </div>

                    </div>
                )}

                { hiddenButton && (
                    <button className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                            onClick={() => setShowInput(true) & setHiddenButton(false)}
                    >
                        Добавить задачу
                    </button>
                )}
            </div>


        </div>
    )
}