
import React from 'react';
import { useQuery} from '@apollo/react-hooks';
import {GET_PAGES} from '../graphql/get-pages';
import {Pagination} from "@material-ui/lab";
import { makeStyles } from '@material-ui/core/styles';
import {Link, useParams} from "react-router-dom";
import {CHARACTERBYID} from "../queries/fetchCharacter";
import {CharacterByID} from "./CharacterByID";
import {Button, FormControlLabel, FormLabel, Paper, Radio, RadioGroup} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ButtonGroup from "@material-ui/core/ButtonGroup";



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export function Pages() {
    const { data } = useQuery(GET_PAGES);
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    return (
        <div className={classes.root}>
            {data && data.character &&
            <Pagination count={34} defaultPage={1} siblingCount={1} boundaryCount={3} />
            }

        </div>
                );



}
/*

{data  && data.characters && data.characters.info.map((pages, index) =>
    <div key={index} className={classes.root}>
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={pages.count} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
    </div>


export function CharacterDetailContainer() {
    let { id } = useParams();

    const { data } = useQuery(CHARACTERBYID, {variables: {id}});
    // console.log(data);
    return (
        <div className="character">
            {data && data.character &&
            <CharacterByID key={data.character.id} character={data.character} />
            }
        </div>
    );
}

 */