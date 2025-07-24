import FailureCatch from "@/components/FailureCatch";
import Movie from "@/components/Movie";
import getMovie from "@/lib/getMovie";
import type { MovieProps } from "@/types";

export default async function RetrieveMovies({movie, years}: {movie: string , years:string}) {
    const data: MovieProps | undefined = await getMovie(movie, years);

    if (!data) return <FailureCatch />;

    const { title, year, plot, poster, imdbrating } = data;
    if (!title) return <FailureCatch/>;
    return(
        <Movie title={title} year={year} plot={plot} poster={poster} imdbrating={imdbrating}/>
    );
}