
import React from 'react';
//import { useQuery} from '@apollo/react-hooks';
//import {GET_PAGES} from '../graphql/get-pages';
import {Pagination} from "@material-ui/lab";
// import { makeStyles } from '@material-ui/core/styles';
import "../App.css";

/*

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));
*/
export function Pages() {
  //  const { data } = useQuery(GET_PAGES);
 //   const classes = useStyles();


    return (
        <div className="pagination">
            <Pagination count={34} defaultPage={1} siblingCount={1} boundaryCount={3} />
        </div>

                );



}
