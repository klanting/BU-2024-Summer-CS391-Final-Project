import ReactJson from 'react-json-view';
import Select from 'react-select';
import styled from "styled-components";

const EditorWrapper= styled.div`
    display: flex;
    flex-direction: row;
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

export default function JSONEditor( json ) {

    return(
        <EditorWrapper>
            <ReactJson src={json}/>
            <Select options={options}/>
        </EditorWrapper>

    )
}