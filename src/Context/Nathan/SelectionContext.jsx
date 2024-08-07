import {createContext, useState} from "react";
import PropTypes from "prop-types"

export const SelectionContext = createContext();
    /// Context to keep track of style components for ReactJSON components

const defaultTheme = {
    'base00': "",
    'base01': "",
    'base02': "",
    'base03': "",
    'base04': "",
    'base05': "",
    'base06': "",
    'base07': "",
    'base08': "",
    'base09': "",
    'base0A': "",
    'base0B': "",
    'base0C': "",
    'base0D': "",
    'base0E': "",
    'base0F': ""
}

export default function SelectionContextProvider({children}) {
    const [Theme ,setTheme] = useState(defaultTheme);
    const [base, setBase] = useState("base00");
    const [JSONObject, setJSONObject] = useState({});

    function updateTheme(color){
        setTheme({...Theme, [base]: color});
    }

    return(
        <SelectionContext.Provider value={{Theme, updateTheme, base, JSONObject, setBase, setJSONObject}}>
            {children}
        </SelectionContext.Provider>
    )

}

SelectionContextProvider.propTypes={
    rgb: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.object,
    JSONObject: PropTypes.string,
}
