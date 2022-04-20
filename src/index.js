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
    // let y = 6
    let y = 6 //it will be param for pur
    const double = (number) => number * 2
    const square = (number) => number * number
    const half = (number) => number / y

    //not a pure function
    console.log(half(12))//2
    y = 2
    console.log(half(12))//6

    // const divide = (num1, num2) => num1 / num2

    //carrying
    const divide = (num2) => {
        return function (num1) {
            return num1 / num2
        }
    }
    // const mathCalculate = compose(half, square, double)
    const mathCalculate = pipe(double, square, half, divide(3))
    // return <h1>{half(square(double(x)))}</h1>
    return <h1>{mathCalculate(x)}</h1>


}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

