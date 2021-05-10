import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
export function CharacterByID({ character }) {


    return (

            <div className="overview">
                <div className="character__image">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="character__heading">
                    <h3>Name:</h3>
                    <h3>{character.name}</h3>
                </div>
                <div className="overview__gender">

                    <p>Gender:</p>
                    <span>{character.gender}</span>
                </div>
                <div className="overview__type">
                <p>Type:</p>
                <span>{character.type}</span>
            </div>
                <div className="overview__species">
                <p>Species:</p>
                <p>{character.species}</p>
                     </div>
                <div className="overview__status">
                    <p>Status:</p>
                    <p>{character.status}</p>

                </div>
                <div className="overview__name">
                     All Episodes with "{character.name}":
                    {character.episode.map((episode, index) =>
                    <div key={index} className="containerE">


                        <Button className="btn btn-white" disableElevation>
                            <Link exact to={`/episode/${episode.id}`}>
                                {episode.name}
                            </Link>
                        </Button>

                    </div>
                )}
                                    </div>





            </div>


    )
}

