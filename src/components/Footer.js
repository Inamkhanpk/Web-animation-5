import React from 'react'
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    
    bg: {
      backgroundColor:'#4d4d4d'
      
    },
    pcenter:{
      textAlign:'center'
    }
    
  }));
const Footer = () =>{
    const classes = useStyles();
    return(
        <Grid container className={classes.bg}>
            <Grid item xs={12} md={3}>
            <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
                <h1>NEAT</h1>
             <p>
             This is Neat is a bond cleaning service keeping tenants, 
             real estate agents and property managers happy all across Sydney and Melbourne.
             </p>
             <FacebookIcon />
             <TwitterIcon/>
             <InstagramIcon/>
             </Grid>
            </Grid>

            <Grid item xs={12} md={3}>
            
            <h1>SERVICES</h1>
            <Divider/>
            <ul className="list-unstyled">
            
                
              

              <li>
                <a href="#!">End of Lease Cleaning</a>
              </li>
              <li>
                <a href="#!">Vacate Cleaning</a>
              </li>
              <li>
                <a href="#!">Moving Cleaning</a>
              </li>
             
            </ul>
            
            </Grid>



            <Grid item xs={12} md={3}>
            
            <h1>LOCATIONS</h1>
            <Divider/>
            <ul className="list-unstyled">
            
                
              

              <li>
                <a href="#!">Sydney</a>
              </li>
              <li>
                <a href="#!">Melbourne</a>
              </li>
              <li>
                <a href="#!">Inner West</a>
              </li>
              <li>
                <a href="#!">Eastern Suburbs</a>
              </li>
              <li>
                <a href="#!">Northern Beaches</a>
              </li>
              <li>
                <a href="#!">North Shore</a>
              </li>
              <li>
                <a href="#!">Surry Hills</a>
              </li>
              <li>
                <a href="#!">Bondi</a>
              </li>
              <li>
                <a href="#!">Parramatta</a>
              </li>
              </ul>
              
            </Grid>
             


            <Grid item xs={12} md={3}>
            
            <h1>CONTACT</h1>
            <Divider/>
              <p>
              This is Neat Cleaning
              Level 16, 175 Pitt Street
              Sydney NSW 2000, Australia
             </p>
            <p>
           hello@thisisneat.com.au
            </p>
            </Grid>             
         

<Divider/>
            
            <Grid item xs={12} md={4}>
            <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
            <p>©2020 THIS IS NEAT CLEANING</p>
            </Grid>
            </Grid>


            <Grid item xs={12} md={4}>
            <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
             <p>Request a Reclean
             Terms and Conditions
             Privacy Policy</p>
             </Grid>
            </Grid>


            <Grid item xs={12} md={4}>
            <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
            <p>ABN: 92 616 673 440</p>
            </Grid>
            </Grid>



      </Grid>
    )
}

export default Footer