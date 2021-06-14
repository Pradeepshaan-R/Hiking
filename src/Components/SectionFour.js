import React from "react";
import styled, { css } from "styled-components";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { GrStatusGoodSmall } from "react-icons/gr";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ImgOne from "../images/Section03Img01.png";
import ImgTwo from "../images/Section03Img02.png";

const SectionFour = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.PaperLeft}>
        <MdKeyboardArrowLeft className={classes.IconSmall} />
        <MdKeyboardArrowUp className={classes.IconBig} />
        <GrStatusGoodSmall
          style={{
            display: "flex",
            color: "white",
            border: "1px solid black",
            borderRadius: "50%",
            margin: "15px",
          }}
        />
        <GrStatusGoodSmall
          style={{
            display: "flex",
            margin: "15px",
            border: "1px solid black",
            borderRadius: "50%",
          }}
        />
        <GrStatusGoodSmall
          style={{
            display: "flex",
            margin: "15px",
            border: "1px solid black",
            borderRadius: "50%",
          }}
        />
        <GrStatusGoodSmall
          style={{
            display: "flex",
            margin: "15px",
            border: "1px solid black",
            borderRadius: "50%",
          }}
        />
        <MdKeyboardArrowDown className={classes.IconBig} />
        <MdKeyboardArrowRight className={classes.IconSmall} />
      </Paper>
      <Paper className={classes.PaperMiddle}>
        <h1 className={classes.MiddleTitle}>Store</h1>
      </Paper>
      <Paper className={classes.PaperRight}>
        <Box component="div" className={classes.mainContainer}>
          <Grid container justify="center" className={classes.CardImage}>
            {/* IMAGE 01 START */}
            <Grid item xs={12} md={6} sm={8}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Image 01"
                    height="350"
                    image={ImgTwo}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            {/* IMAGE 01 END */}
            {/* IMAGE 02 START */}
            <Grid item xs={12} md={6} sm={8}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Image 01"
                    height="340"
                    image={ImgOne}
                  />
                </CardActionArea>
              </Card>
            </Grid>
            {/* IMAGE 02 END */}
          </Grid>
        </Box>
      </Paper>
    </div>
  );
};

export default SectionFour;

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: 10,
    flexWrap: "wrap",
    overflow: "hidden",
    borderRadius: "0px",
    "& > *": {
      margin: theme.spacing(0),
      width: theme.spacing(60),
      height: theme.spacing(90),
    },
  },

  PaperLeft: {
    paddingTop: "250px",
    paddingLeft: "20px",
    width: "100px",
    "@media screen and (max-width: 768px)": {
      display: "flex",
      width: "100%",
      height: "100px",
      paddingTop: "50px",
      paddingLeft: "100px",
    },
  },

  PaperMiddle: {
    background: "transparent",
    outline: "none",
    border: "none",
    paddingLeft: "20px",
    "@media screen and (max-width: 768px)": {},
  },

  PaperRight: {
    background: "rgba(0,0,0,0)",
    outline: "rgba(0,0,0,0)",
    border: "rgba(0,0,0,0)",
    paddingLeft: "20px",
    width: "900px",
    "@media screen and (max-width: 768px)": {},
  },
  IconSmall: {
    display: "none",
    margin: "10px",
    width: "50px",
    height: "50px",
    "@media screen and (max-width: 768px)": {
      display: "block",
      paddingBottom: "20px",
    },
  },
  IconBig: {
    display: "block",
    // margin: "10px",
    width: "50px",
    height: "50px",
    "@media screen and (max-width: 768px)": {
      display: "none",
    },
  },
  MiddleTitle: {
    fontFamily: "Poppins",
    fontWeight: "900",
    textTransform: "uppercase",
    padding: "20px 100px 20px 20px",
    letterSpacing: "3px",
    fontSize: "200px",
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
  },

  // CARD
  mainContainer: {
    background: "transparent",
    height: "100%",
    display: "grid",
    width: "1500px",
  },
  cardContainer: {
    maxWidth: 1000,
    marginBottom: "30px",
    textAlign: "center",
    "&:hover": {
      boxShadow: "0px 12px 26px 1px rgba(0,0,0,0.75)",
    },
  },
  CardImage: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
  cardContent: {
    height: 220,
    padding: "20px",
  },

  cardTitle: {
    marginTop: 10,
    marginBottom: 20,
  },
}));
