import React from 'react';
import TaskTrackerWork from "./components/taskTracker_listWork/index.jsx";

function App() {
    // Состояния
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-8">
            <TaskTrackerWork/>
            {/*<TaskTrackerNotes/>*/}
        </div>
    );}
export default App;