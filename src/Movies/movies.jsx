/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import CardComponent from '../components/Card/Card';
import { useState, useEffect } from "react";
import "./movies.css"

export default function Movies(props) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [pelisFilter, setPelisFilter] = useState([]);
    const [searchState, setSearch] = useState("");

    useEffect(() => {
        if (loading) {
            fetch(`https://api-pelis-back.onrender.com/${props.genero}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    setData(data)
                    setLoading(false);
                });
        }
    }, []);

    const handlerSearch = (e) => {
        let value = e.target.value;
        setSearch(value);

        if (!value) {
            setPelisFilter(data.peliculas);
        } else {
            const filterMovies = data.peliculas.filter((movie) => movie.titulo.toLowerCase().includes(searchState.toLowerCase()));
            setPelisFilter(filterMovies);
            console.log(pelisFilter);
        }
    }

    if (loading) {
        return <>
            <img src="https://media0.giphy.com/media/yhfTY8JL1wIAE/giphy.gif" alt="" />
        </>
    } else {
        return (
            <>
                <h1 className='titulo'>Welcome {data.genero}</h1>

                <div className="container-fluid mt-5">
                    <div className="row mb-5">
                        <div className="col ">
                            <input type="text" onChange={handlerSearch} className="search" placeholder="pelicula" />
                        </div>
                    </div>

                    <div className="row">

                        {pelisFilter.map((movie, index) => {
                            return (
                                <div className="col cardHover" key={index}>
                                    <CardComponent key={index} movie={movie} />
                                </div>
                            )
                        })}
                    </div>

                </div>
            </>
        );
    }

}
