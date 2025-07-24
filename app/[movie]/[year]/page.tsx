import Movie from "@/components/Movie";
import getMovie from "@/lib/getMovie";
import FailureCatch from "@/components/FailureCatch";

type PageProps = {
    params: {
        movie: string;
        year: string;
    };
};

export default async function ResultsPage(props: PageProps) {
    const { movie, year } = props.params; // declare movie and year
    const movieData = await getMovie(movie, year); //get the data
    if (!movieData) return <FailureCatch/>; //return a failure message

    const { title, plot, poster, imdbrating } = movieData;
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
