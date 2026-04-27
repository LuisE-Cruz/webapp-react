import { useState } from "react";

export default function AddReviewForm({ movieId, handleReview }) {
    const initialFormData = {
        name: '',
        vote: 1,
        text: ''
    }

    const [newReview, setNewReview] = useState(initialFormData)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newReview)

        const api_url = import.meta.env.VITE_SERVER_API + "/movies/";
        fetch(`${api_url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...newReview, movie_id: movieId })
        })
            .then(response => response.json())
            .then(data => {
                handleReview(data)
                console.log('Review submitted successfully:', data);
            })
            .catch(error => {
                console.error('Error submitting review:', error);
            });

        setNewReview(initialFormData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="form-label mb-2 text-white fs-5 fw-bold">Insert your name or username:</label>
                <input type="text" className="form-control bg-dark text-white mb-3" id="name" placeholder="Marco" value={newReview.name} onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}></input>
                <select className="form-select mb-3 bg-dark text-white" aria-label="Default select example" value={newReview.vote} onChange={(e) => setNewReview({ ...newReview, vote: parseInt(e.target.value) })}>
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
                <label htmlFor="text" className="form-label text-white fs-5 fw-bold mb-2">Tell us what you think about this film: </label>
                <textarea className="form-control bg-dark text-white" id="text" rows="6" value={newReview.text} onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}></textarea>
                <button className="btn btn-dark mt-3"> <span className="text-info">Send Review</span></button>
            </div>
        </form>
    )
}