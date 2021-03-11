import React from 'react';
import {Card, CardContent,Typography,Grid} from '@material-ui/core';
import cx from "classnames";
import styles from './Cards.module.css'
import CountUp from "react-countup";
export default function Cards({data: {confirmed, deaths, recovered,lastUpdate}}){
if(!confirmed){
    return 'Loading...;'
}
return (
    <div className={styles.container}>
        <Grid container spacing={3} justify='center'>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.infected)}>
                <CardContent>

                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography  variant="h5">
<CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Recovered cases COVID-19</Typography>
                </CardContent>

            </Grid>
            
            
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.recovered)}>
                <CardContent>

                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography  variant="h5">
<CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of Recovered cases COVID-19</Typography>
                </CardContent>

            </Grid>
            
            <Grid item component={Card} xs={12} md={3} className={cx(styles.card , styles.deaths)}>
                <CardContent>

                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography  variant="h5">
<CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Number of deaths of cased BY COVID-19</Typography>
                </CardContent>

            </Grid>
        </Grid>


    </div>
)

}