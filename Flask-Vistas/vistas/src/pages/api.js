import React, {useEffect, useState} from "react";
import { getCharacter } from "../services/api";

const Api = () => {
    const [page, setPage] = useState(1);
    const [character, setCharacter] = useState();

    useEffect(()=>{
        getCharacter().then(
            (response) => {
                setCharacter( response.data?.results);
            }
        ).catch(
            (errors) => {}
        )
    }, []);

    return (
        <section className="bg-light">
            <div className="container">
                <h1>View API</h1>
            </div>
            <div className="row">
                {
                    character ? character.map(
                        (e) => (
                            <div className="card col-3">
                                <img src={e.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{e.name}</h5>
                                    <p className="card-text">{e.gender}</p>
                                </div>
                            </div>
                        )
                    ) : null
                }
            </div>
            <button onClick={()=>setPage(page-1)} className="btn btn-primary">
                Siguiente
            </button>
        </section>
    )
}

export default Api;