function Select ({items, value, onChange}) {
    return (
        <select className="flex flex-col rounded-[5px] hover:bg-g w-auto p-2 m-2" name="asd" id="1"
                onChange={(e) => onChange(Number(e.target.value))}
                value={value || ""}>
            <option value="" hidden></option>
            {items.map((item) => (
                <option key={item.id} value={item.id}>
                    {item.text}
                </option>
            ))}
        </select>
    );
}

export default Select;