import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios'

const DeleteMovieModal = (props) => {

    const { id } = useParams();
    const { push } = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:9000/api/movies/${id}`)
            .then(res => {
                props.setMovies(res.data)
                push('/movies')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (<div id="deleteEmployeeModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <h4 className="modal-title">Delete Movie</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete these Records?</p>
                        <p className="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div className="modal-footer">
                        <Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel" /></Link>
                        <input type="submit" className="btn btn-danger" value="Delete" />
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default DeleteMovieModal;