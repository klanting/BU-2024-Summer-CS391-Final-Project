import {createContext, useState} from "react";

export const ColorContext = createContext()

export default function ColorContextProvider(props){
    /*
    * Context, to keep track of the current color being selected in the color picker
    * (before being applied)
    * */

    const [color, setColor] = useState([255, 0, 0]);

    return (
        <ColorContext.Provider value={{color, setColor}}>
            {props.children}
        </ColorContext.Provider>
    );
}