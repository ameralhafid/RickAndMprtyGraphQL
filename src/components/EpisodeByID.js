import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";


export function EpisodeByID({ episode }) {


    return (

        <div  className="container">
            <div className="Episode__name">
                <h3>{episode.id} </h3>
            </div>
            <div className="episode__name">
                <h3>Episode's Name:</h3>
                <h4> {episode.name} </h4>

                <h3> Episode's air date: </h3>
                <h4>{episode.air_date} </h4>

            </div>


            <div className="character">

                {episode.characters.map((characters, index) =>
                    <div key={index} className="containerE">

                        <div className="character__name">
                            <h3>{characters.name} </h3>
                        </div>
                        <Button className="btn btn-white" disableElevation>
                            <Link exact to={`/character/${characters.id}`}>
                                Character details ..
                            </Link>
                        </Button>

                    </div>
                )}
            </div>

        </div>


    )
}
