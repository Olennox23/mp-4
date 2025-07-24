import {Suspense}from "react";

import RetrieveMovies from "@/components/RetrieveMovies";

export default async function ResultsPage({params,}: {params: Promise<{movie: string, year:string}>}) {
    const movie = decodeURIComponent((await params).movie)
    const year = decodeURIComponent((await params).year);
    return(
        <Suspense
            fallback={
                <p> loading.... </p>
            }
        >
            <RetrieveMovies movie = {movie} years = {year}/>
        </Suspense>
    )
}