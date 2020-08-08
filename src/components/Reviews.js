import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import img6 from './../images/img6.svg'
import img7 from './../images/img7.svg'
import img8 from './../images/img8.svg'
const useStyles = makeStyles((theme) => ({
    
    mainimg: {
      width:'25%'
    },
    pcenter:{
      textAlign:'center'
    }
    
  }));
 const Reviews = () =>{
    const classes = useStyles();
    return(
        <Grid container>
           <Grid item xs={12} md={12}>
           <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
            <h1>Our Reviews</h1>
            </Grid>
            <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
            <p>We believe our work speaks for itself, but our customers vouch for us too.
             Here’s just a few of the reviews that make up our 4.9 star rating on  .</p>
          </Grid>
           </Grid>




           <Grid item xs={12} md={4}>
           <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
               <img src={img6} alt="" className={classes.mainimg}/>
               </Grid>
               <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
               <h3> Gina G</h3>
               </Grid>
               </Grid>
            


           <Grid item xs={12} md={4}>
           <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
            <img src={img7} alt=""  className={classes.mainimg}/>
            </Grid>
            <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
            <h3> Adrian S</h3>
            </Grid>
            </Grid>



           <Grid item xs={12} md={4}>
           <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
           <img src={img8} alt=""  className={classes.mainimg}/>
           </Grid>
            <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
           <h3> Jo G</h3>
           </Grid>
           </Grid>
        </Grid>
    )
}

export default Reviews