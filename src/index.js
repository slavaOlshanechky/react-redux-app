import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import createStore from "./store/store";
import {
    completeTask,
    loadTasks,
    getTasks,
    taskDeleted,
    titleChanged,
    getTaskLoadingStatus,
    createTask
} from "./store/task";
import {Provider, useDispatch, useSelector} from "react-redux";
import {getError} from "./store/errors";


let store = createStore()

const App = () => {
    const state = useSelector(getTasks())
    const isLoading = useSelector(getTaskLoadingStatus())
    const error = useSelector(getError())
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTasks())

        // console.log("hello")
        // return () => {
        //     console.log("hello from function")
        // };

    }, [])

    const changeTitle = (taskId) => {
        dispatch(titleChanged(taskId))
    }
    const deleteTask = (taskId) => {
        dispatch(taskDeleted(taskId))
    }
    const addNewTask = () => {
        dispatch(createTask({
            userId: 1,
            title: 'Some new task',
            completed: false
        }))
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <p>{error}</p>
    }
    return (<><h1>App</h1>
            <button onClick={addNewTask}>Add task</button>
            <ul>
                {state.map((el) => (
                    <li key={el.id}>
                        <p>{el.title}</p>
                        <p>{`Completed: ${el.completed}`}</p>
                        <button onClick={() => dispatch(completeTask(el.id))}>Completed</button>
                        <button onClick={() => changeTitle(el.id)}>Update</button>
                        <button onClick={() => deleteTask(el.id)}>Delete</button>
                        <hr/>
                    </li>
                ))}
            </ul>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
</React.StrictMode>);

