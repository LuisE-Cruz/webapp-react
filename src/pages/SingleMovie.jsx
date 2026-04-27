import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { data, useParams } from "react-router-dom"
import AddReviewForm from "../components/AddReviewForm"


export default function SingleMovie() {

    const { movieId } = useParams()

    const [movie, setMovie] = useState(null)

    const api_url = import.meta.env.VITE_SERVER_API + "/movies/";

    useEffect(() => {
        fetch(`${api_url}${movieId}`)
            .then(response => response.json())
            .then(data => setMovie(data))
    }, [movieId]);

    const starsVote = (vote) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= vote) {
                stars.push(<i key={i} className="bi bi-star-fill"></i>)
            } else {
                stars.push(<i key={i} className="bi bi-star"></i>)
            }
        }
        return stars;
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6 g-3">
                        <div className="card h-100 mx-auto text-center text-info bg-dark" style={{ width: "18rem" }}>
                            <img src={`http://127.0.0.1:3010/${movie?.image}`} className="card-img-top h-100" alt={movie?.title} />
                            <div className="card-body text-white">
                                <h3 className="card-title">{movie?.title}</h3>
                                <div className="card-text"><span className="text-info"> Genre:</span> {movie?.genre} </div>
                                <div className="card-text"><span className="text-info"> Year:</span> {movie?.release_year} </div>
                                <div className="card-text"><span className="text-info"> Director:</span> {movie?.director} </div>
                                <div className="card-text"><span className="text-info"> Plot:</span> {movie?.abstract} </div>
                                <Link to='/' className="text-white btn btn-outline-info px-3 py-1 border-2 mt-1">Go back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 g-3 my-auto">
                        <AddReviewForm movieId={movieId} />

                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h3 className="text-white ms-3">Reviews:</h3>
                        <div className="list-group">
                            {movie?.reviews?.map(review => (
                                <div key={review.id} className="list-group-item bg-dark">
                                    <h4 className="mb-1 text-info"> {review.name} - <span className="text-warning">{starsVote(review.vote)}</span></h4>
                                    <p className="mb-1 text-white">{review.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}