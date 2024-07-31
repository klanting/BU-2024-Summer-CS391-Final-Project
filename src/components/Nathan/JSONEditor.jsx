import ReactJson from 'react-json-view'

export default function JSONEditor( json ) {

    return(

        <ReactJson src={json}/>
    )
}