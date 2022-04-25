import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {initiateStore} from "./store/store";
import {taskCompleted, titleChanged} from "./store/actions";


let store = initiateStore()

const App = (params) => {
    const [state, setState] = useState(store.getState())
    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState())
        })
    }, [])

    const completeTask = (taskId) => {
        store.dispatch(taskCompleted(taskId))
    }
    const changeTitle = (taskId) => {
        store.dispatch(titleChanged(taskId))
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

