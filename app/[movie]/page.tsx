
import {Suspense}from "react";

import RetrieveMovies from "@/components/RetrieveMovies";

export default async function ResultsPage({params,}: {params: Promise<{movie: string}>}) {
    const movie = decodeURIComponent((await params).movie)

    return(
        <Suspense
            fallback={
                <p> loading.... </p>
            }
        >
            <RetrieveMovies movie = {movie} years = {""}/>
        </Suspense>
    )
}