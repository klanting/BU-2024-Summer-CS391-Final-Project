
import styled, {createGlobalStyle} from "styled-components"
import ColorMenu from "./components/Tibo/ColorMenu.jsx";
import ColorContextProvider from "./Context/Tibo/ColorContextProvider.jsx";
import SelectionContextProvider from "./Context/Nathan/SelectionContext.jsx";
import JSONEditor from "./components/Nathan/JSONEditor.jsx";

const GeneralStyling = createGlobalStyle`
    body {
        margin: 0;
        box-sizing: border-box;
        background-color: #1a181c;
    }
`;

const StyledComponentWrapper = styled.div`
    /*
    * Using display flex, these components are placed next to each other
    */
    display: flex;
    flex-direction: row;
    
    /*
    * space-evenly, so no component is to close to each other or the borders of the screen
    */
    justify-content: space-evenly;
    
    /*
    * Margin a the top to make it look better
    */
    margin-top: 2vh;
`;

function App() {

  return (
    <>
        <SelectionContextProvider>
            <ColorContextProvider>
                {/*Combining both components by placing those next to each other*/}
                <StyledComponentWrapper>
                    <JSONEditor/>
                    <ColorMenu/>
                </StyledComponentWrapper>

            </ColorContextProvider>
        </SelectionContextProvider>
        <GeneralStyling/>
    </>
  )
}

export default App
