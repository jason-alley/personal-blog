import { useEffect, useState } from "react";
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from "../components/Layouts/Layouts";
import HeroSecondary from "../components/Hero/Hero-secondary";
import MovieCard from "../components/Movie-card/Movie-card";

const MovieDB = ({ work }) => {
    const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=77d65c2b'

    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title: string) => {
        const response = await fetch(`${apiUrl}&s=${title}`)
        const data = await response.json();
        setMovies(data.Search)
    }

    const savedString = () => {
        searchMovies(searchTerm)
    }

    useEffect(() => {
        searchMovies('batman')
    }, [])

    return (
        <Layout container={"container.is-fullhd"}>
            <HeroSecondary postData={ work } />
            <div className="container mt-6 mb-6 is-flex">
                <input className="input is-medium is-rounded"
                    type="text"
                    placeholder="Search movies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="button is-link is-outlined ml-2 mt-1" onClick={savedString}>Search</button>
            </div>
            <div className="container movie-card-container">
                {
                    movies.length ? (
                        movies.map((movie) => {
                            return (
                                <MovieCard
                                    movie={movie}
                                    key={movie.imdbID}
                                />
                            )
                        })
                    ) : (
                        <h2 className="title">No Movies matching your search was found!</h2>
                    )
                }
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const workFiles = fs.readdirSync(path.join('featuredWork'))
 
    const markdownWithMeta = fs.readFileSync(path.join('featuredWork', 'movie-db.mdx'), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
        props: {
            work: frontmatter
        }
    }
}

export default MovieDB;
