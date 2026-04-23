import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { data, useParams } from "react-router-dom"


export default function SingleMovie() {

    const { movieId } = useParams()

    const [movie, setMovie] = useState(null)

    const api_url = import.meta.env.VITE_SERVER_API + "/movies/";

    useEffect(() => {
        fetch(`${api_url}${movieId}`)
            .then(response => response.json())
            .then(data => setMovie(data))
    }, [movieId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col g-3">
                    <div className="card h-100 mx-auto text-center text-info bg-dark" style={{ width: "18rem" }}>
                        <img src={`http://127.0.0.1:3010/${movie?.image}`} className="card-img-top h-100" alt={movie?.title} />
                        <div className="card-body text-white">
                            <h3 className="card-title">{movie?.title}</h3>
                            <div className="card-text"><span className="text-info"> Genre:</span> {movie?.genre} </div>
                            <div className="card-text"><span className="text-info"> Year:</span> {movie?.release_year} </div>
                            <div className="card-text"><span className="text-info"> Director:</span> {movie?.director} </div>
                            <div className="card-text"><span className="text-info"> Plot:</span> {movie?.abstract} </div>
                            <Link to='/' className="text-white btn btn-outline-info px-3 py-1 border-2 mt-1">Movie list</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}