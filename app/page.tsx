'use client'
import Link from "next/link";
import { useState } from "react";
import styled from 'styled-components';

interface StyledLinkProps {
    $active: boolean;
}

const StyledMain = styled.main`
    height: 100vh;
    background-color: antiquewhite;
    padding-top: 5vh;
`
const StyledDiv = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: fit-content;
    margin: 0 auto;
    background-color: lightyellow;
    padding: 2vh;
    
   
`
const StyledP = styled.p`
    font-size: calc(10px + 4vh);
`
const StyledDiv2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    
    padding: 2vh;
`
const StyledDiv3 = styled.div`
    padding: 1vw;
    font-size: calc(10px + 1vh);
    margin: 0 auto;
`
const StyledInput = styled.input`
    font-size: calc(10px + 1vh);
    border: 1px solid black;
    margin: 0 auto;
    padding: 1vw;
    @media (max-width: 768px) {
        width: 20vw;
    }
`
const StyledLink = styled(Link)<StyledLinkProps>`
    border: 4px solid black;
    padding: 1vw;
    background-color: lightblue;
    visibility: ${props => props.$active ? 'visible' : 'hidden'};
`


export default function Home() {
    const [movie, setMovie] = useState(""); // hold the value of the input of movie and year
    const [year, setYear] = useState("");
    const isMovieValid = () => movie.trim().length > 0;
    return (

     <StyledMain>
        <StyledDiv>
            <StyledP> Enter a Movie and Year</StyledP>
            <StyledDiv2>
                <StyledDiv3>
                    <label htmlFor="Movie"> Movie </label>
                    <StyledInput type="text" //input by user for movie
                           id="Movie"
                             placeholder="eg. Superman"
                           onChange={(e) => setMovie(e.target.value)}

                    />
                </StyledDiv3>
                <StyledDiv3>
                    <label htmlFor="Year"> Year </label> {/*input for year*/}
                    <StyledInput type="text"
                           id = "Year"
                            placeholder="eg. 2025"
                           onChange={(e) => setYear(e.target.value)}
                           />
                </StyledDiv3>
            </StyledDiv2>
            {/* create a dynamic link based on the user's input */}
            <StyledLink $active = {isMovieValid()}
                href = {`/${movie}/${year}`}> Search for Movie
            </StyledLink>
            <p> ** Movie field is required, Year is optional</p> {/* user instruction */}
        </StyledDiv>
     </StyledMain>
  );
}
