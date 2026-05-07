import Card from "./Card";
import React, {useState} from "react";

export default function Finished ({props}) {

    const finishedItems = props.filter(item => item.type === 'Finished');
    const inProgressItems = props.filter(item => item.type === 'In Progress');

    const [selectedItem, setSelectedItem] = useState(null);

    const handleChange = (e) => {
        setSelectedItem(e.target.value);
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

                <select  className="flex flex-col overflow-auto rounded-[5px] m-2 p-2 w-auto" name="" id=""
                onChange={handleChange}>
                    <option value="" disabled hidden></option>

                    {inProgressItems.map(item => (
                        <option value="" className="flex flex-col overflow-auto rounded-[5px] m-2 p-2 w-auto">
                            {item.text}
                        </option>
                    ))}

                </select>

                <button className="bg-blue-600 h-auto p-2 m-2 w-auto rounded-[5px] text-white hover:bg-blue-500"

                >
                    Add card
                </button>


            </div>

        </div>
    )
}