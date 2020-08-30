import React from 'react'
import Grid from '@material-ui/core/Grid'

import img4 from './../images/img4.svg'
import img5 from './../images/img5.gif'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    mainimg: {
      width:'75%',
      margin:theme.spacing(2)
    },
    pcenter:{
        textAlign:'center'
    }
    
  }));

 const Dashboard = () =>{
    const classes = useStyles();
    return(
        <Grid container >
            <Grid item xs={12} md={12}>
            <Grid container justify="center"  alignItems="center">
            
            <img src={img5} alt="" className={classes.mainimg}/>
        
            </Grid>
            </Grid>
            
           <Grid item xs={12} md={6}>
               <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
               
            <h1>You move out, we clean up.</h1>
            <p>The simplest way to get your bond back. Guaranteed</p>
        
            </Grid>
           </Grid>
           <Grid item xs={12} md={6}>
           <Grid container justify="center"  alignItems="center" className={classes.pcenter} >
           
           <img src={img4} alt="" className={classes.mainimg}/>
           
            </Grid>
          

           </Grid>
           
        </Grid>
    )
}

export default Dashboard