import React from 'react';
import TaskTrackerWork from "./components/tack-tracker";
import Layout from "./components/Layout.jsx";


let initialWorked = [
    {
        id: 1,
        text: 'Login page – performance issues',
        type: 'Backlog',
    },
    {
        id: 2,
        text: 'Sprint bugfix',
        type: 'Backlog',
    },
    {
        id: 3,
        text: 'Shop page – performance issues',
        type: 'Ready',
    },
    {
        id: 4,
        text: 'Checkout bugfix',
        type: 'Ready',
    },
    {
        id: 5,
        text: 'Shop bug1',
        type: 'Ready',
    },
    {
        id: 6,
        text: 'Shop bug2',
        type: 'Ready',
    },
    {
        id: 7,
        text: 'Shop page – performance issues',
        type: 'Ready',
    },
    {
        id: 8,
        text: 'User page – performance issues',
        type: 'In Progress',
    },
    {
        id: 9,
        text: 'Auth bugfix',
        type: 'In Progress',
    },
    {
        id: 10,
        text: 'Main page – performance issues',
        type: 'Finished',
    },
    {
        id: 11,
        text: 'Main page bugfix',
        type: 'Finished',
    },
]




function App() {

    const [worked, setWorked] = React.useState(initialWorked)
    const finishCount = worked.filter(item => item.type === 'Finished').length;
    const inProgressCount = worked.filter(item => item.type === 'In Progress').length;

    return (
        <Layout
            finishCount={finishCount}
            inProgressCount={inProgressCount}
        >
            <TaskTrackerWork
                worked={worked}
                setWorked={setWorked}
            />
        </Layout>
    );
}

export default App;