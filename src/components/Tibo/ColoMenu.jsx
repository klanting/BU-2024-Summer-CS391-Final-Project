import ColorPicker from "./ColorPicker.jsx";
import {useState} from "react";

export default function ColorMenu(){

    const [colorMap, setColorMap] = useState({});

    return (
        <>
            <ColorPicker setColorMap={setColorMap} type={"list"}/>
        </>
    );
}