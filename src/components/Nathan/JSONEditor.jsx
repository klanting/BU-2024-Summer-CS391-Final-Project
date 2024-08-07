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
    display: flex;
    flex-direction: column;
`

const options = [
    { value: '--w-rjv-color', label: 'Keys' },
    { value: '--w-rjv-background-color', label: 'Background' },
    { value: '--w-rjv-line-color', label: 'Indent Line' },
    { value: '--w-rjv-arrow-color', label: 'Collapse Arrow' },
    { value: '--w-rjv-edit-color', label: 'Edit Button' },
    { value: '--w-rjv-add-color', label: 'Add Button' },
    { value: '--w-rjv-delete-color', label: 'Delete Button' },
    { value: '--w-rjv-info-color', label: 'Object Information' },
    { value: '--w-rjv-update-color', label: 'Update Button' },
    { value: '--w-rjv-copied-color', label: 'Copy Button' },
    { value: '--w-rjv-copied-success-color', label: 'Successfully Copied Button' },
    { value: '--w-rjv-curlybraces-color', label: 'Curly Braces' },
    { value: '--w-rjv-colon-color', label: 'Colons' },
    { value: '--w-rjv-brackets-color', label: 'Brackets' },
    { value: '--w-rjv-type-string-color', label: 'String Values' },
    { value: '--w-rjv-type-int-color', label: 'Int Values' },
    { value: '--w-rjv-type-float-color', label: 'Float Values' },
    { value: '--w-rjv-type-bigint-color', label: 'Bigint Values' },
    { value: '--w-rjv-type-boolean-color', label: 'Boolean Values' },
    { value: '--w-rjv-type-date-color', label: 'Date Values' },
    { value: '--w-rjv-type-url-color', label: 'URL Values' },
    { value: '--w-rjv-type-nan-color', label: 'NaN Values' },
    { value: '--w-rjv-type-undefined-color', label: 'Undefined Values' },
    { value: '--w-rjv-type-null-color', label: 'Null Values' },
    { value: '--w-rjv-type-set-color', label: 'Set Values' },
    { value: '--w-rjv-type-map-color', label: 'Map Values' }
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
