"use client"
import React from "react";
import type { MovieProps } from "@/types";
import styled from 'styled-components';


const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
   
    margin: 0 auto;
`
const StyledImg = styled.img`
    height: 400px; /* set to whatever height you want */
    object-fit: cover; /* or "contain", see below */
    border-radius: 12px;
    @media (max-width: 768px) {
        height: 300px;
    }
`
const StyledH1 = styled.h1`
    font-size: calc(10px + 4vh);
    margin-bottom: 1vh;
`
const StyledP = styled.p`
    font-size: calc(10px + 1vh);
    margin-bottom: 1vh;
`
const StyledPlot = styled.p`
    font-size: calc(10px + 1vh);
    margin: 2vh 0 ;
    text-align: center;
`

//input the data and display them
export default function Movie({ title, year, plot, poster, imdbrating }: MovieProps) {
    return (
        <StyledCard>
            <StyledH1>{title} ({year})</StyledH1>
            <StyledP><strong>IMDB Rating:</strong> {imdbrating}</StyledP>
            <StyledImg src={poster} alt={`${title} poster`}/>
            <StyledPlot>{plot}</StyledPlot>


        </StyledCard>
    );
}