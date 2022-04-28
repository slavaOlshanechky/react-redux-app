import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import configureStore from "./store/store";
import {completeTask, taskDeleted, titleChanged} from "./store/task";


let store = configureStore()

const App = (params) => {
    const [state, setState] = useState(store.getState())
    useEffect(() => {
        store.subscribe(() => {
            setState(store.getState())
        })
    }, [])

    // const completeTask = (taskId) => {
    //     store.dispatch((dispatch, getState)=>{
    //         store.dispatch(taskCompleted(taskId))
    //     })
    // }
    const changeTitle = (taskId) => {
        store.dispatch(titleChanged(taskId))
    }
    const deleteTask = (taskId) => {
        store.dispatch(taskDeleted(taskId))
    }

    return <><h1>App</h1>
        <ul>
            {state.map((el) => (
                <li key={el.id}>
                    <p>{el.title}</p>
                    <p>{`Completed: ${el.completed}`}</p>
                    <button onClick={() => store.dispatch(completeTask(el.id))}>Completed</button>
                    <button onClick={() => changeTitle(el.id)}>Update</button>
                    <button onClick={() => deleteTask(el.id)}>Delete</button>
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

