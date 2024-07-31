
import {createGlobalStyle} from "styled-components"
import ColorMenu from "./components/Tibo/ColoMenu.jsx";

const GeneralStyling = createGlobalStyle`
    body{
        margin: 0;
        box-sizing: border-box;
    }
`;

function App() {

  return (
    <>
        <ColorMenu/>
        <GeneralStyling/>
    </>
  )
}

export default App
