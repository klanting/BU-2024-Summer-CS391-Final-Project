import styled from "styled-components";
import {useContext, useState} from "react";
import {SelectionContext} from "../../Context/Nathan/SelectionContext.jsx";

const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: gray;
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: auto;
`
const StyledP = styled.p`
    text-align: center;
    margin-right: 2vw;
`

const StyledDiv = styled.div`
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-justify: center;
`

const StyledForm = styled.form`
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
`

const ContButton = styled.button`
    box-sizing: border-box;
    padding: 12px;
    margin: 0 auto;
`

export default function LoginPage() {
    const [loginText, setLoginText] = useState("Please enter an API URL here, or continue without one")
    const [apiURL, setApiURL] = useState("")
    const [isActive, setIsActive] = useState(true)
    const { setJSONObject, JSONObject } = useContext(SelectionContext);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("api submitted, ", {apiURL})
        async function fetchData() {
            const data = await fetch(apiURL,
                {
                    method: 'GET',
                    mode: 'cors'
                });

            const result = await data.json();
            console.log("received data: \n", result)

            try{
                setJSONObject(result)
                setIsActive(false);
                console.log("JSONObject is currently, ", JSONObject.json())
            } catch(err) {
                console.log(err)
                setLoginText("API did not return a valid JSON. Please ensure the link returns a valid JSON object")
            }
        }
        fetchData();
    }

    const continueHandler = () => {
        setIsActive(false);
    }

    return(
        <>
            <LoginWrapper id={"loginDiv"} style={{display: isActive ? "block" : "none"}}>
                <StyledP id={"loginText"}>{loginText}</StyledP>
                <StyledForm onSubmit={submitHandler}>
                    <StyledDiv>
                        <StyledP>Enter API URL here</StyledP>
                        <input id={"jsonURL"}
                               value={apiURL}
                               onChange={(e) => setApiURL(e.target.value)}/>
                    </StyledDiv>
                    <ButtonDiv>
                        <ContButton type={"submit"}>Submit</ContButton>
                        <ContButton onClick={continueHandler}>Continue</ContButton>
                    </ButtonDiv>
                </StyledForm>
            </LoginWrapper>
        </>
    )
}
