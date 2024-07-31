
import {createGlobalStyle} from "styled-components"
import ColorMenu from "./components/Tibo/ColorMenu.jsx";
import ColorContextProvider from "./Context/Tibo/ColorContextProvider.jsx";
import SelectionContextProvider from "./Context/Nathan/SelectionContext.jsx";

const GeneralStyling = createGlobalStyle`
    body{
        margin: 0;
        box-sizing: border-box;
    }
`;

function App() {

  return (
    <>
        <SelectionContextProvider>
            <ColorContextProvider>
                <ColorMenu/>
                <GeneralStyling/>
            </ColorContextProvider>
        </SelectionContextProvider>
    </>
  )
}

export default App
