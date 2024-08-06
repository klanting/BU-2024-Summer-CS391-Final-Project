import {createContext, useState} from "react";
import PropTypes from "prop-types"

export const SelectionContext = createContext();
    /// Context to keep track of style components for ReactJSON components

const defaultTheme = {
    "--w-rjv-color": "",
    "--w-rjv-background-color": "",
    "--w-rjv-line-color": "",
    "--w-rjv-arrow-color": "",
    "--w-rjv-edit-color": "",
    "--w-rjv-add-color": "",
    "--w-rjv-delete-color": "",
    "--w-rjv-info-color": "",
    "--w-rjv-update-color": "",
    "--w-rjv-copied-color": "",
    "--w-rjv-copied-success-color": "",
    "--w-rjv-curlybraces-color": "",
    "--w-rjv-colon-color": "",
    "--w-rjv-brackets-color": "",
    "--w-rjv-type-string-color": "",
    "--w-rjv-type-int-color": "",
    "--w-rjv-type-float-color": "",
    "--w-rjv-type-bigint-color": "",
    "--w-rjv-type-boolean-color": "",
    "--w-rjv-type-date-color": "",
    "--w-rjv-type-url-color": "",
    "--w-rjv-type-nan-color": "",
    "--w-rjv-type-undefined-color": "",
    "--w-rjv-type-null-color": "",
    "--w-rjv-type-set-color": "",
    "--w-rjv-type-map-color": ""
}


export default function SelectionContextProvider({children}) {
    const [Theme ,setTheme] = useState(defaultTheme);
    const [base, setBase] = useState("base00");
    const [JSONObject, setJSONObject] = useState(JSON.parse("{}"));

    function updateTheme(rgb) {
        let newTheme = Theme;
        newTheme[base] = rgb;
        setTheme(newTheme);
    }

    function updateBase(base) {
        setBase(base)
    }

    function updateJSONObject(json) {
        setJSONObject(json);
    }


    return(
        <SelectionContext.Provider value={{updateTheme, base, JSONObject, updateBase, updateJSONObject}}>
            {children}
        </SelectionContext.Provider>
    )

}

SelectionContextProvider.propTypes={
    rgb: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.object,
    JSONObject: PropTypes.object,
}
