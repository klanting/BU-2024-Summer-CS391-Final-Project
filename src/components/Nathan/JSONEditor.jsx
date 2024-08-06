import ReactJson from 'react-json-view';
import Select from 'react-select';
import styled from "styled-components";
import {SelectionContext} from "../../Context/Nathan/SelectionContext.jsx";
import {createContext, useContext} from "react";

const EditorWrapper= styled.div`
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`
const EditorDiv = styled.div`
    width: 70%;
    height: auto;
`
const SelectDiv = styled.div`
    width:30%;
    height: auto;
`

const options = [
    {value: 'base00', label: ""},
    {value: 'base01', label: ""},
    {value: 'base02', label: ""},
    {value: 'base03', label: ""},
    {value: 'base04', label: ""},
    {value: 'base05', label: ""},
    {value: 'base06', label: ""},
    {value: 'base07', label: ""},
    {value: 'base08', label: ""},
    {value: 'base09', label: ""},
    {value: 'base0A', label: ""},
    {value: 'base0B', label: ""},
    {value: 'base0C', label: ""},
    {value: 'base0D', label: ""},
    {value: 'base0E', label: ""},
    {value: 'base0F', label: ""},
]

const defaultTheme = {
    '--w-rjv-color': '',
    '--w-rjv-key-number': '',
    '--w-rjv-key-string': '',
    '--w-rjv-background-color': '',
    '--w-rjv-line-color': '',
    '--w-rjv-arrow-color': '',
    '--w-rjv-edit-color': '',
    '--w-rjv-info-color': '',
    '--w-rjv-update-color': '',
    '--w-rjv-copied-color': '',
    '--w-rjv-copied-success-color': '',
    '--w-rjv-curlybraces-color': '',
    '--w-rjv-colon-color': '',
    '--w-rjv-brackets-color': '',
    '--w-rjv-ellipsis-color': '',
    '--w-rjv-quotes-color': '',
    '--w-rjv-quotes-string-color': '',
    '--w-rjv-type-string-color': '',
    '--w-rjv-type-int-color': '',
    '--w-rjv-type-float-color': '',
    '--w-rjv-type-bigint-color': '',
    '--w-rjv-type-boolean-color': '',
    '--w-rjv-type-date-color': '',
    '--w-rjv-type-url-color': '',
    '--w-rjv-type-null-color': '',
    '--w-rjv-type-nan-color': '',
    '--w-rjv-type-undefined-color': '',
}

export default function JSONEditor( json = JSON.parse("{}") ) {
    const { updateBase } = useContext(SelectionContext);
    const { color } = useContext(SelectionContext);
    const [Theme ,setTheme] = createContext(defaultTheme);

    const handleChange = (e) => {
        updateBase(e.target.value);
    }

    for (const [key, val] in Object.entries(color)) {
        if(val !== "") {
            theme[key] = val;
        }
    }

    return(
        <EditorWrapper>
            <EditorDiv>
                <ReactJson src={json} theme={theme} />
            </EditorDiv>
            <SelectDiv>
                <Select
                    options={options}
                    onChange={handleChange}
                />
            </SelectDiv>
        </EditorWrapper>
    )
}