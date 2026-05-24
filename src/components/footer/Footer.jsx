export default function Footer ({inProgressCount, finishCount}) {



    return (
        <div className="bg-[#0067A3] flex items-center justify-between p-5 text-white text-2xl">
            <div className="flex">
                <h1 className="px-3">Active tasks: {inProgressCount}</h1>
                <h1 className="px-3">Finished tasks: {finishCount} </h1>
            </div>
            <h1 className="px-3">Kanban board by (NAME), (YEAR)</h1>
        </div>
    );
}