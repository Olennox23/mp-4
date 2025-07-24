import Link from "next/link";
//static header
export default function Header() {
    return(
        <header className="p-[2vh] h-20  flex justify-center items-center text-4xl  font-bold bg-amber-200 text-blue-500 font-sans">
            <Link href="/" className="text-4xl font-semibold">
                IMDB Movie Search
            </Link>
        </header>
    );
}

