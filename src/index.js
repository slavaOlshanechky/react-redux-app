import React from 'react';
import ReactDOM from 'react-dom/client';
import {compose, pipe} from "lodash/fp"

const App = (params) => {
    //functions as params for other functions
    // function fn() {
    //     return "app"
    // }
    // function someFn(func){
    //     return func()
    // }
    // return <h1>{someFn(fn)}</h1>

    //functions as variables
    // function someFn() {
    //     return function () {
    //         return "app"
    //     }
    // }
    // const fn = someFn()
    // return <h1>{fn()}</h1>

    //
    // function someFn() {
    //     return function () {
    //         return "app"
    //     }
    // }
    // function fn(func) {
    //     return func()
    // }
    // return <h1>{fn(someFn())}</h1>
//////
//     const arr = [" some", " new", "  data"]
//     function formatArray(el) {
//         return el + " some"
//     }
//     return <h1>{arr.map(formatArray)}</h1>
/////
    //function composition or piping
    const x = 2
    const double = (number) => number * 2
    const square = (number) => number * number
    const half = (number) => number / 2
    // const mathCalculate = compose(half, square, double)
    const mathCalculate = pipe( double,square,half)
    // return <h1>{half(square(double(x)))}</h1>
    return <h1>{mathCalculate(x)}</h1>


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

