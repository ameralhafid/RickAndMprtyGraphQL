import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_CHARACTERS } from '../graphql/get-characters';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Pages} from "../components/Pages";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(3),
    },
}));
export function CharactersContainer() {

    const { data } = useQuery(GET_CHARACTERS);
    const [spacing] = React.useState(7);
    const classes = useStyles();

        return (
            <React.Fragment>
                   <Pages/>
                    <Grid  container className={classes.root} spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={spacing}>
                                {data && data.characters && data.characters.results.map((character, index) =>
                                    <Grid key={index} item>

                                    <Grid className={classes.root}>
                            <div className="character">
                            <div className="character__name">
                                <p>{character.name}</p>
                            </div>
                            <div className="character__meta">

                                <span>{character.gender}</span>
                            </div>
                            <div className="character__image">
                                <img src={character.image} alt={character.name} />
                            </div>
                            <Button variant="contained" color="yellow" disableElevation>
                                <Link exact to={`/character/${character.id}`}>
                                    Character details ..
                                </Link>
                            </Button>

                        </div>

                                    </Grid>
                        </Grid>
                                )}
                    </Grid>
                    </Grid>
                    </Grid>




            </React.Fragment>

        );
}
