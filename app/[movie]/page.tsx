import Movie from "@/components/Movie";
import getMovie from "@/lib/getMovie";

import FailureCatch from "@/components/FailureCatch";
//make a declaration for the movie input, takes movie out of link
type PageProps = {
    params: {
        movie: string;
    };
};

export default async function TitleOnlyPage(props: PageProps) {
    const { movie } = props.params; // declare the movie and fetch the data
    const movieData = await getMovie(movie, "");

    if (!movieData) return undefined; //return undefined if fetch doesnt work

    const { title, year, plot, poster, imdbrating } = movieData;

    if (!title) return <FailureCatch/>;

    return (
        <Movie
            title={title}
            year={year}
            plot={plot}
            poster={poster}
            imdbrating={imdbrating}
        />
    );
}