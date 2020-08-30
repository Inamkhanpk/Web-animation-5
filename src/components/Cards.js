import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import img1 from './../images/img1.jpg'
import img2 from './../images/img2.jpg'
import img3 from './../images/img3.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    media: {
      height: 200,
      
    },
    maincard:{
        margin:theme.spacing(2)
    },
    param:{
        padding:'20px'
    }
    
  }));
const Cards = () =>{
    const classes = useStyles();
    return(
        <Grid container >
           <Grid item xs={12} md={12}>
           <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
             
            <h1>Our Services</h1>
            
            </Grid>
            <Grid container justify="center"  alignItems="center" className={classes.pcenter}>
            
            <p className={classes.param}>Dependable, professional, and experienced.
                 Choose from any
             of our cleaning services and we’ll handle the rest.</p>
             
             </Grid>
           </Grid>




           <Grid item xs={12} md={4}>
            
               <Card className={classes.maincard}>
                   <CardMedia
                   className={classes.media}
                   image={img1}
                   title="Paella dish"
                   />
                      
                   <CardContent>
                       <Typography variant="h5" component="h2">
                           End of Lease Cleaning
                       </Typography>
                       <Typography component="p">
                           With our famous 72-hour bond back guarantee, our cleaners 
                               always ensure tenants recover their full rental deposits.
                       </Typography>
                   </CardContent>
               </Card>
               
             </Grid>




           <Grid item xs={12} md={4}>
               
               <Card className={classes.maincard}>
                   <CardMedia
                   className={classes.media}
                   image={img2}
                   title="Paella dish"
                   />

                   <CardContent>
                       <Typography variant="h5" component="h2">
                           Vacate Cleaning
                       </Typography>
                       <Typography component="p">
                           Our 5-star rated cleaners specialise in helping renters pass their final vacate inspections.and add something more
                       </Typography>
                   </CardContent>
               </Card>
               
           </Grid>


           <Grid item xs={12} md={4}>
               
            <Card className={classes.maincard}>
           <CardMedia
           className={classes.media}
           image={img3}
           title="Paella dish"
           />

          <CardContent>
       <Typography variant="h5" component="h2">
        Moving Cleaning
       </Typography>
        <Typography component="p">
        Our cleaning teams will make sure your property is ready for sale, a rental inspection, or for your family to move into.
      </Typography>
      </CardContent>
         </Card>
         
         </Grid>


        </Grid>
    )
}

export default Cards