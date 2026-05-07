import React from "react";
import Card from "./Card";

export default function InProgress ({props, onMoveToProgress}) {

    const inProgressItems = props.filter(item => item.type === 'In Progress');
    const readyItems = props.filter(item => item.type === 'Ready');

    const [showSelect, setShowSelect] = React.useState(false);

    const handleSelect = (itemId) => {
        if (!showSelect) {
            setShowSelect(true);
        } else {
            setShowSelect(false);
        }
    }

    const showSelectHandler = () => {
        setShowSelect(true);
    }

    return (
        <div className="bg-gray-200 p-1 mb-5 w-[260px] max-h-[500px] rounded-[10px] flex flex-col">
            <h1 className="text-center p-1 m-1 w-auto text-xl">In Progress</h1>
            {inProgressItems.map(item => (
                <Card
                key={item.id}
                Item={item.text}
                />
            ))}

            {showSelect && (
                    <select className="flex flex-col overflow-auto rounded-[5px] m-2 p-2 w-auto" name="asd" id="1">
                        <option value="" hidden></option>
                        {readyItems.map(readyItem =>(
                            <option key={readyItem.id} value={readyItem.id} className="flex flex-col overflow-auto rounded-[5px] m-2 p-2 w-auto"
                            >{readyItem.text}</option>
                        ))}
                    </select>
            )}
            {!showSelect && inProgressItems.length > 0 && (
                <button className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                        onClick={handleSelect}
                >
                    Добавить из Ready
                </button>
            )}
            {showSelect && (
                <button className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                        onClick={showSelectHandler}
                >
                    Подтвердить
                </button>
            )}


        </div>
    )
}