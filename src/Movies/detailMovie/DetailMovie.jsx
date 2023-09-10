import React from 'react'
import { useLocation } from 'react-router-dom'
import './DetailMovie.css'

export default function DetailMovie(props) {
    const location = useLocation();
    const movie = location.state;
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{props.titulo}</h1>
                    </div>
                </div>


                <div className="row">
                    <div className="col">
                        <img className='imgP' src={movie.portada} alt="" />
                    </div>
                    <div>
                        <h5><p>{movie.sinopsis}</p></h5>

                        <li>Director: {movie.director}</li>
                        <li>Actores: {movie.actores.map((actor) => {
                            return <p className='ml-3'>{actor}</p>
                        })}</li>
                        <li>Genero: {movie.genero}</li>
                        <li>Fecha de estreno: {movie.anio}</li>
                    </div>
                </div>
            </div >

        </>
    )
}
