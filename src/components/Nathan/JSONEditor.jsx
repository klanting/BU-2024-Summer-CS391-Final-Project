import ReactJson from 'react-json-view';
import Select from 'react-select';
import styled from "styled-components";
import {SelectionContext} from "../../Context/Nathan/SelectionContext.jsx";
import {useContext} from "react";

const EditorWrapper= styled.div`
    width: 60vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`
const EditorDiv = styled.div`
    width: 80%;
    height: auto;
`
const SelectDiv = styled.div`
    width:20%;
    height: auto;
    display: flex;
    flex-direction: column;
`

const options = [
    { value: 'base00', label: 'Background' },
    { value: 'base01', label: 'Edit Value Background' },
    { value: 'base02', label: 'Indentation Lines, Special Items Background' },
    { value: 'base03', label: 'Comments and Line Highlighting' },
    { value: 'base04', label: 'Item Counts' },
    { value: 'base05', label: 'Undefined' },
    { value: 'base06', label: 'Carets, Delimiters, Operators' },
    { value: 'base07', label: 'Keys' },
    { value: 'base08', label: 'NaNs' },
    { value: 'base09', label: 'Strings' },
    { value: 'base0A', label: 'NULLs' },
    { value: 'base0B', label: 'Floats' },
    { value: 'base0C', label: 'List Indexes' },
    { value: 'base0D', label: 'Drop-down arrows' },
    { value: 'base0E', label: 'Add Key/Value Icon, Edit Value Icon' },
    { value: 'base0F', label: 'Integers and Copy to Clipboard Icon' }
]

export default function JSONEditor() {
    const { Theme, JSONObject, setBase } = useContext(SelectionContext);

    const handleChange = (e) => {
        console.log("selected ", e)
        setBase(e.value)
    }

    const handleEdit = () => {
        return true
    }

    return(
        <EditorWrapper>
            <EditorDiv>
                <ReactJson
                    src={JSONObject}
                    theme={Theme}
                    onEdit={handleEdit}
                    onAdd={handleEdit}
                    onDelete={handleEdit}
                />
            </EditorDiv>
            <SelectDiv>
                <Select
                    options={options}
                    onChange={(e) => handleChange(e)}
                />
            </SelectDiv>
        </EditorWrapper>
    )
}
