import ColorPicker from "./components/Tibo/ColorPicker.jsx";
import {createGlobalStyle} from "styled-components"

const GeneralStyling = createGlobalStyle`
    body{
        margin: 0;
        box-sizing: border-box;
    }
`;

function App() {

  return (
    <>
        <ColorPicker/>
        <GeneralStyling/>
    </>
  )
}

export default App
