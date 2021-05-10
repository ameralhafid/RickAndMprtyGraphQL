import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";


export function EpisodeByID({ episode }) {


    return (

        <div  className="overviewE">
            <div className="overviewE__name">
                <h3>Episode's Name:</h3>
                <h3> {episode.name} </h3>
                </div>
                    <div className="overviewE__airdate">

                <h3> Episode's air date: </h3>
                <h4>{episode.air_date} </h4>

            </div>


            <div className="overviewE">

                {episode.characters.map((characters, index) =>
                    <div key={index} className="overviewE">

                        <div className="overviewE__character">
                            <h3>{characters.name} </h3>

                        <Button  disableElevation>
                            <Link exact to={`/character/${characters.id}`}>
                                details..
                            </Link>
                        </Button>
                        </div>
                    </div>
                )}
            </div>

        </div>


    )
}
