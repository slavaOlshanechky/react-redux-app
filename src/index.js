import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "./store/createStore";
import {taskReducer} from "./store/taskReducer";
import * as actions from "./store/actionTypes"

const initialState=[
    {id: 1, title: "Task 1", completed: false},
    {id: 2, title: "Task 2", completed: false}
]
let store = createStore(taskReducer,initialState )

const App = (params) => {
    const [state, setState] = useState(store.getState())
    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState())
        })
    }, [])
    const completeTask = (taskId) => {
        store.dispatch({
            type: actions.taskUpdated,
            payload: {id: taskId, completed: true}
        })
    }
    const changeTitle = (taskId) => {
        store.dispatch({
            type: actions.taskUpdated,
            payload: {id: taskId, title: `New title for ${taskId}`}
        })
    }
    return <><h1>App</h1>

        <ul>
            {state.map((el) => (
                <li key={el.id}>
                    <p>{el.title}</p>
                    <p>{`Completed: ${el.completed}`}</p>
                    <button onClick={() => completeTask(el.id)}>Completed</button>
                    <button onClick={() => changeTitle(el.id)}>Update</button>
                    <hr/>
                </li>
            ))}
        </ul>
    </>


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);

