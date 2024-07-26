import ColorField from "./ColorField.jsx";
import {useEffect, useState} from "react";



export default function ColorPicker(){

    const [color, setColor] = useState([0, 255, 0]);

    return (
        <>
            <ColorField setColor={setColor}/>
            <span style={{color: `rgb(${color[0]}, ${color[1]}, ${color[2]})`}}>
                Cool color
            </span>
        </>



    );

}