import React from "react";
import Card from "./Card";
import Select from "./Select";

export default function Ready ({props, onMoveToReady}) {

    const backlogItems = props.filter(item => item.type === 'Backlog');
    const readyItems = props.filter(item => item.type === "Ready");

    // showSelect - управляет видимостью выпадающего списка
    // setShowSelect - функция для изменения этого состояния
    const [showSelect, setShowSelect] = React.useState(false);

    // selectedItemId - хранит ID карточки, выбранной пользователем в выпадающем списке
    // null (значение по умолчанию) - ничего не выбрано
    // setSelectedItemId - функция для изменения этого состояния
    const [selectedItemId, setSelectedItemId] = React.useState(null);


    // ОБРАБОТЧИК ДОБАВЛЕНИЯ НОВОЙ КАРТОЧКИ
    const handleReadyAdd = () => {

        // ПРОВЕРКА 1: Есть ли выбранная карточка?
        if (selectedItemId) {

            // ПОИСК КАРТОЧКИ: находим объект карточки по её ID
            // .find() - ищет первый элемент, у которого id совпадает с selectedItemId
            // Если карточка найдена - записываем её в переменную selectedItem
            // Если не найдена - selectedItem будет undefined
            const selectedItem = backlogItems.find(item => item.id === selectedItemId);

            // ПРОВЕРКА 2: Существует ли карточка и точно ли она типа Backlog?
            // Если карточка существует И её тип равен 'Backlog' - можно перемещать
            if (selectedItem.type === 'Backlog') {

                // ДЕЙСТВИЕ: Вызываем функцию, переданную из родительского компонента
                // Передаём ID выбранной карточки (selectedItem.id)
                onMoveToReady(selectedItem.id);

                console.log('Переместили в Ready:', selectedItem.text);

                // СБРОС ВЫБОРА: очищаем выбранный ID
                // Устанавливаем null, чтобы в следующий раз выпадающий список был пустым
                // Если этого не сделать, в select останется выбранной старая карточка
                setSelectedItemId(null);

                // СКРЫТИЕ СПИСКА: прячем выпадающий список после успешного перемещения
                // Возвращаем интерфейс в исходное состояние (показываем кнопку "Добавить из Backlog")
                setShowSelect(false);
            }
        }
    }

    const showSelectHandler = () => {

        // Просто меняем состояние showSelect с false на true
        // В результате: кнопка "Добавить из Backlog" скрывается,
        // а вместо неё появляются select и кнопка "Подтвердить"
        setShowSelect(true);
    }

        return (
        <div className="bg-gray-200 p-1 w-[260px] max-h-[500px] rounded-[10px] flex flex-col">
            <h1 className="text-center p-1 m-1 w-auto text-[18px]">Ready</h1>
            <div className="flex flex-col overflow-auto rounded-2xl w-full">
                {readyItems.map (item => (
                    <Card
                        key={item.id}
                        id={item.id}
                        text={item.text}
                    />
                ))}
                { showSelect && (
                    <Select
                        value={selectedItemId}
                        items={backlogItems}
                        onChange={setSelectedItemId}
                    />
                )}
                {!showSelect && backlogItems.length > 0 && (
                    <button
                        className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                        onClick={showSelectHandler}
                    >
                        Добавить из Backlog
                    </button>
                )}
                {showSelect && (
                    <button
                        className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                        onClick={()=> {
                            handleReadyAdd();
                            setShowSelect(false);
                        }}
                    >
                        Подтвердить
                    </button>
                )}


            </div>





        </div>
    )
}