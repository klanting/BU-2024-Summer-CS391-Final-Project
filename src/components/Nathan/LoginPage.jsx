import styled from "styled-components";

const LoginWrapper = styled.div`
    width: 70vw;
    height: 50vh;
    background-color: gray;
`

const StyledInput = styled.input`
    box-sizing: border-box;
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

export default function LoginPage(submitHandler, continueHandler) {

    return(
        <>
            <LoginWrapper>
                <p>Please enter an API URL here, or continue without one</p>
                <StyledInput id={"jsonURL"}>Enter API URL here</StyledInput>
                <ButtonDiv>
                    <ContButton onClick={submitHandler}>Submit</ContButton>
                    <ContButton onClick={continueHandler}>Continue</ContButton>
                </ButtonDiv>
            </LoginWrapper>
        </>
    )
}