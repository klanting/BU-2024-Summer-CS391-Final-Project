import {createContext, useState} from "react";
import PropTypes from "prop-types";

export const ColorContext = createContext()

export default function ColorContextProvider(props){
    /*
    * Context, to keep track of the current color being selected in the color picker
    * (before being applied)
    *
    * Component Created by Tibo Verreycken
    * */

    const [color, setColor] = useState([255, 0, 0]);

    return (
        <ColorContext.Provider value={{color, setColor}}>
            {props.children}
        </ColorContext.Provider>
    );
}

ColorContextProvider.propTypes = {
    children: PropTypes.node
}