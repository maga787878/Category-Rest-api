import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";
import './dashboard.css'

let useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default class Dashboard extends Component {
  render() {
   
    return (
      <div className={useStyles.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Paper className={useStyles.paper}>
              <CategoryList />
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={useStyles.paper}>
              <ProductList />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
