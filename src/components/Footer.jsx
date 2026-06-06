export default function Footer ({inProgressCount, finishCount}) {



    return (
            <div className="bg-[#0067A3] m-auto w-full hidden lg:block">
                <div className="flex items-center px-5 py-2 justify-between  w-full max-w-[1235px] mx-auto text-white text-2xl">
            <div className="flex">
                <h1 className="px-3">Active tasks: {inProgressCount}</h1>
                <h1 className="px-3">Finished tasks: {finishCount} </h1>
            </div>
            <h1 className="px-3">Kanban board by (NAME), (YEAR)</h1>
                </div>
            </div>
    );
}