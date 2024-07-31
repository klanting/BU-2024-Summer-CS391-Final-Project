import {createContext, useState} from "react";

export const colorContext = createContext()

export default function ColorContextProvider(props){

    const [color, setColor] = useState([255, 0, 0]);

    return (
        <colorContext.Provider value={{color, setColor}}>
            {props.children}
        </colorContext.Provider>
    );
}