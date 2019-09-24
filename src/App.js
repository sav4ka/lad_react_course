import React from 'react';
import Field from './field';
import Column from "./column";

function App() {
const field = [
    [1,0,0,0,0,0],
    [2,0,0,0,0,0],
    [1,0,0,1,0,0],
    [1,0,0,0,0,0],
    [0,0,0,1,0,0],
    [0,0,0,0,0,1]
];
return(  <>
    <Column field={field[0]}/>
    <Column field={field[1]}/>
    <Column field={field[2]}/>
    <Column field={field[3]}/>
    <Column field={field[4]}/>
    <Column field={field[5]}/>

</>
);

}
export default App;
