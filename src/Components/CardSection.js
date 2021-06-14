import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import tour1 from "../images/Section02Img04.png";
import tour2 from "../images/Section02Img03.png";
import tour3 from "../images/Section02Img02.png";
import tour4 from "../images/Section02Img01.png";

const addStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "transparent",
    height: "100%",
    marginTop: "-100px",
  },
  cardContainer: {
    maxWidth: 450,
    margin: "3rem",
    margin: "5rem auto",
    textAlign: "center",
    "&:hover": {
      boxShadow: "0px 12px 26px 1px rgba(0,0,0,0.75)",
    },
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

const CardSection = () => {
  const classes = addStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* TOUR 01 START */}
        <Grid item xs={12} md={6} sm={8}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Tour 01"
                height="280"
                image={tour1}
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Lake in the Mountains
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, deserunt illo illum itaque sit amet impedit beatae
                  inventore quidem porro, veritatis voluptatibus corrupti nulla,
                  officia neque accusamus laudantium consectetur magnam?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* TOUR 01 END */}

        {/* TOUR 02 START */}
        <Grid item xs={12} md={6} sm={8}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Tour 02"
                height="280"
                image={tour2}
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Lake in the Forest
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, deserunt illo illum itaque sit amet impedit beatae
                  inventore quidem porro, veritatis voluptatibus corrupti nulla,
                  officia neque accusamus laudantium consectetur magnam?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* TOUR 02 END */}

        {/* TOUR 03 START */}
        <Grid item xs={12} md={6} sm={8}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Tour 03"
                height="280"
                image={tour3}
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Snowy Mountains
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, deserunt illo illum itaque sit amet impedit beatae
                  inventore quidem porro, veritatis voluptatibus corrupti nulla,
                  officia neque accusamus laudantium consectetur magnam?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* TOUR 03 END */}

        {/* TOUR 04 START */}
        <Grid item xs={12} md={6} sm={8}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Tour 04"
                height="280"
                image={tour4}
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.cardTitle}
                >
                  Group Hiking
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit, deserunt illo illum itaque sit amet impedit beatae
                  inventore quidem porro, veritatis voluptatibus corrupti nulla,
                  officia neque accusamus laudantium consectetur magnam?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* TOUR 04 END */}
      </Grid>
    </Box>
  );
};

export default CardSection;
