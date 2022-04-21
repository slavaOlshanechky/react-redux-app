import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {compose, pipe} from "lodash/fp"

const App = (params) => {
    const [state, setState] = useState({})
    // setState((prevState)=>({...prevState,id:"12131"}))
    const obj1 = {id: 2, name: "some name", author: {name: "some name"}}
    const obj2 = {...obj1, author: {...obj1.author}}//it will be new obj
    console.log(obj1.author === obj2.author)
    return <h1>App</h1>


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

