import Card from "./Card";
import React, {useState} from "react";

export default function Finished ({props, onMoveToFinished}) {

    const finishedItems = props.filter(item => item.type === 'Finished');
    const inProgressItems = props.filter(item => item.type === 'In Progress');

    const [showSelect, setShowSelect] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleFinishedAdd = () => {
        if (selectedItemId) {

            const selectedItem = inProgressItems.find(item => item.id === selectedItemId);

            if (selectedItem.type === 'In Progress') {

                onMoveToFinished(selectedItem.id);

                console.log('Переместили в Finished', selectedItem.text);

                setSelectedItemId(null);
                setShowSelect(false);
            }
        }
    }

    const showSelectHandler = () => {
        setShowSelect(true);
    }


    return (
        <div className="bg-gray-200 p-1 w-[260px] max-h-[500px] rounded-[10px] flex flex-col">
            <h1 className="text-center p-1 m-1 w-auto text-xl">Finished</h1>
            <div className="flex flex-col overflow-auto rounded-2xl w-full">
                {finishedItems.map(item => (
                    <Card
                        key={item.id}
                        Item={item.text}
                    />
                ))}

                {showSelect && (
                    <select  className="flex flex-col overflow-auto rounded-[5px] m-2 p-2 w-auto" name="" id=""
                             onChange={(e) => setSelectedItemId(Number(e.target.value))}
                             value={selectedItemId || ""}>
                        <option value="" hidden></option>

                        {inProgressItems.map(inProgressItem => (
                            <option key={inProgressItem.id}  value={inProgressItem.id} className="flex flex-col overflow-auto rounded-[5px] m-2 p-2 w-auto">
                                {inProgressItem.text}
                            </option>
                        ))}
                    </select>
                )}
                {!showSelect && finishedItems.length > 0 && (
                    <button className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                            onClick={showSelectHandler}
                    >
                        Добавить из Progress
                    </button>
                )}
                {showSelect && (
                    <button className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"
                            onClick={() => {
                            handleFinishedAdd();
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