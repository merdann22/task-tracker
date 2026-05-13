import React from "react";
import Card from "./Card";

export default function InProgress ({props, onMoveToProgress}) {

    const readyItems = props.filter(item => item.type === 'Ready');
    const inProgressItems = props.filter(item => item.type === 'In Progress');

    const [showSelect, setShowSelect] = React.useState(false);
    const [selectedItemId, setSelectedItemId] = React.useState(null);

    const handleInProgressAdd = () => {

        if (selectedItemId) {

            const selectedItem = readyItems.find(item => item.id === selectedItemId);

            if (selectedItem.type === 'Ready') {

                onMoveToProgress(selectedItem.id);

                console.log('Переместили в In Progress', selectedItem.text);

                setSelectedItemId(null);
                setShowSelect(false);

            }
        }
    }

    const showSelectHandler = () => {
        setShowSelect(true);
    }

    return (
        <div className="bg-gray-200 p-1 mb-5 w-[260px] max-h-[500px] rounded-[10px] flex flex-col">
            <h1 className="text-center p-1 m-1 w-auto text-xl">In Progress</h1>
            <div className="flex flex-col overflow-auto rounded-2xl w-full">
                {inProgressItems.map(item => (
                    <Card
                        key={item.id}
                        Item={item.text}
                    />
                ))}

                {showSelect && (
                    <select className="flex flex-col overflow-auto rounded-[5px] m-2 p-2 w-auto" name="asd" id="1"
                            onChange={(e) => setSelectedItemId(Number(e.target.value))}
                            value={selectedItemId || ""}>
                        <option value="" hidden></option>
                        {readyItems.map(readyItem =>(
                            <option key={readyItem.id} value={readyItem.id} className="flex flex-col overflow-auto rounded-[5px] m-2 p-2 w-auto"
                            >{readyItem.text}</option>
                        ))}
                    </select>
                )}
                {!showSelect && inProgressItems.length > 0 && (
                    <button className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                            onClick={showSelectHandler}
                    >
                        Добавить из Ready
                    </button>
                )}
                {showSelect && (
                    <button className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                            onClick={handleInProgressAdd}
                            disabled={!showSelect}
                    >
                        Подтвердить
                    </button>
                )}
            </div>



        </div>
    )
}