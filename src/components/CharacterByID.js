import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
export function CharacterByID({ character }) {


    return (

            <div className="container">
                <div className="character__image">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="character__name">
                    <p>{character.name}</p>
                </div>
                <div className="character__meta">

                    <span>{character.gender}</span>
                </div>
                <div className="character__meta">
                <span>{character.type}</span>
            </div>
                <div className="character__meta">
                <span>{character.species}</span>
                     </div>
                <div className="character__meta">
                    <span>{character.status}</span>

                </div>
                <div className="character__name">
                     All Episodes with "{character.name}"
                    {character.episode.map((episode, index) =>
                    <div key={index} className="containerE">

                        <div className="episode__name">
                            <h3>{episode.name} </h3>
                        </div>
                        <Button className="btn btn-white" disableElevation>
                            <Link exact to={`/episode/${episode.id}`}>
                                Episode details ..
                            </Link>
                        </Button>

                    </div>
                )}
                                    </div>





            </div>


    )
}

