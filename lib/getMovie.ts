"use server"
import {MovieProps} from "@/types";
const MOVIE_API_KEY = process.env.MOVIE_API_KEY;


export default async function getMovie(title: string, year: string): Promise<MovieProps | undefined> {
    console.log({ title, year})
    try {
        if (!title) return undefined; //check if the title is input
        if (year === '') { // if year isnt there, search for movie only with name
            const res = await fetch(`https://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&t=${title}&plot=full`);
            const jsonRes = await res.json();
            return {
                title: jsonRes.Title, //return the data inside res
                year: jsonRes.Year,
                plot: jsonRes.Plot,
                poster: jsonRes.Poster,
                imdbrating: jsonRes.imdbRating,
            }
                }


        //if movie and year are input search for movie
        const res = await fetch(`https://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&t=${title}&y=${year}`);
        const jsonRes = await res.json();
        //return the data
        return {
            title: jsonRes.Title,
            year: jsonRes.Year,
            plot: jsonRes.Plot,
            poster: jsonRes.Poster,
            imdbrating: jsonRes.imdbRating,
        }
    } catch (error) {
        console.log("error occurred:", error);
        return undefined;
    }
}

