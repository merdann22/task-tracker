import React, { useState, useEffect } from 'react';
import TaskTrackerTitle from "./components/tackTracker_title";

function App() {
    // Состояния
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 py-8">
            <TaskTrackerTitle/>
        </div>
    );
}

export default App;