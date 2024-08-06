import styled from "styled-components";
import {useState} from "react";
import useSWR from 'swr';
import PropTypes from "prop-types";

const LoginWrapper = styled.div`
    width: 70vw;
    height: 50vh;
    background-color: gray;
    z-index: 2;
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

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function LoginPage(props) {
    const [loginText, setLoginText] = useState("Please enter an API URL here, or continue without one")
    const [apiURL, setApiURL] = useState("")
    const [isActive, setIsActive] = useState(true)
    const [shouldFetch,setShouldFetch] = useState(false)
    const { data, error, isLoading } = useSWR(shouldFetch ? apiURL : null, fetcher)

    const submitHandler = (e) => {
        e.preventDefault();
        setShouldFetch(true)
        console.log("api submitted, ", {apiURL})
        if(error) {
            setLoginText("Please Enter a valid API URL")
        }
        if(isLoading) {
            setLoginText("Loading, please wait...")
        }
        try{
            const jsonData = JSON.parse(data.text());
            props.updateJSONObject(jsonData)
            setIsActive(false);
        } catch(err) {
            setLoginText("API did not return a valid JSON. Please ensure the link returns a valid JSON object")
        }

    }

    const continueHandler = () => {
        setIsActive(false);
    }

    return(
        <>
            <LoginWrapper id={"loginDiv"} style={{display: isActive ? "block" : "none"}}>
                <p id={"loginText"}>{loginText}</p>
                <form onSubmit={submitHandler}>
                    <input id={"jsonURL"}
                                 value={apiURL}
                                 onChange={(e)=> setApiURL(e.target.value)}/>
                        Enter API URL here
                    <ButtonDiv>
                        <ContButton type={"submit"}>Submit</ContButton>
                        <ContButton onClick={continueHandler}>Continue</ContButton>
                    </ButtonDiv>
                </form>
            </LoginWrapper>
        </>
    )
}

LoginPage.propTypes = {
    updateJSONObject: PropTypes.func,
}