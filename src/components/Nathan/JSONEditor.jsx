import ReactJson from 'react-json-view';
import Select from 'react-select';
import styled from "styled-components";
import {SelectionContext} from "../../Context/Nathan/SelectionContext.jsx";
import {useContext} from "react";

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

export default function JSONEditor( json = JSON.parse("{}") ) {
    const { updateBase } = useContext(SelectionContext);
    const { color } = useContext(SelectionContext);
    let theme = {};

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