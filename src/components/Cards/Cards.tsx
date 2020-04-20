import React from "react";
import cx from "classnames";
import CountUp from "react-countup";
import { ICardsProps } from "../../interfaces";

// Moment
import moment from "moment";

// Material UI
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Cards.module.css";

const Cards: React.SFC<ICardsProps> = ({ data }) => {
  const { confirmed, recovered, deaths, lastUpdate } = data;

  if (!confirmed) return <span>"Loading..."</span>;

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator="." />
            </Typography>
            <Typography color="textSecondary">
              {moment(lastUpdate).format("lll")}
            </Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator="." />
            </Typography>
            <Typography color="textSecondary">
              {moment(lastUpdate).format("lll")}
            </Typography>
            <Typography variant="body2">
              Number of recoveries cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator="." />
            </Typography>
            <Typography color="textSecondary">
              {moment(lastUpdate).format("lll")}
            </Typography>
            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
