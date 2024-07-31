import {Children, createContext, useState} from "react";
import PropTypes from "prop-types"

export const SelectionContext = createContext();

let colors = {
    base00: "",
    base01: "",
    base02: "",
    base03: "",
    base04: "",
    base05: "",
    base06: "",
    base07: "",
    base08: "",
    base09: "",
    base0A: "",
    base0B: "",
    base0C: "",
    base0D: "",
    base0E: "",
    base0F: ""
}

export default function SelectionContextProvider({children}) {
    const [color, setColor] = useState(colors)
    const [base, setBase] = useState("base00")

    function updateColor(rgb) {
        if(Object.prototype.hasOwnProperty.call(color, base)) {
            let newColors = color;
            newColors[base] = rgb;
            setColor(newColors)
        }
    }

    return(
        <SelectionContext.Provider value={{color, updateColor}}>
            {children}
        </SelectionContext.Provider>
    )

}

SelectionContextProvider.propTypes={
    rgb: PropTypes.string,
}
