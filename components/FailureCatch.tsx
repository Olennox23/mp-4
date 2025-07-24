"use client"
import Link from "next/link";
import styled from 'styled-components';


const StyledMain = styled.main`
    background-color: indianred;
    height: 100vh;
`
const StyledLink = styled(Link)`
    border: 4px solid black;
    padding: 1vw;
    background-color: lightblue;
`

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: fit-content;
    margin: 0 auto;
    background-color: indianred;
    font-size: calc(10px + 4vh);
`
export default function FailureCatch() {
    return (
        <StyledMain> {/* display an error message*/}
            <StyledDiv>
                <h2>🚫 Movie Not Found</h2>
                <p>Try another title or check your spelling!</p>
                <StyledLink href="/">Go Back</StyledLink>
                <img src = {"/download.png"} alt = "sucks" />
            </StyledDiv>
        </StyledMain>
    )
}