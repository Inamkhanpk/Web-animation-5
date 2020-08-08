import React from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";




  
 const Header = ( ) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const openDrawer = () => {
        setDrawerOpen(true);
      };
    
      const closeDrawer = () => {
        setDrawerOpen(false);
      };
    return(
        <Grid container>
             <Grid item xs={12} sm={12} md={12} lg={12}>
      <AppBar position="static">
        <Toolbar>
        <Hidden xsDown>
        <div>
          <Typography variant="h6" >
            Neat
          </Typography>
          </div>
          <div>
        <Button size="small">
          LOCATIONS
        </Button>
        </div>
        <div>
        <Button size="small" >
          SERVICES
        </Button>
        </div>
        <div>
        <Button size="small" >
          RESOURCES
        </Button>
        </div>
        <div>
        <Button size="small" >
          BLOG
        </Button>
        </div>
        <div>
        <Button size="small" >
          REVIEWS
        </Button>
        </div>
      </Hidden>

      <Hidden smUp>
        <div>
              <IconButton
              
                edge="end"
                aria-label="menu"
                onClick={() => openDrawer()}
              >
                <MenuIcon />
                
              </IconButton>
              </div>
            </Hidden>

            <Drawer
      variant="temporary"
      anchor="left"
      open={drawerOpen}
    //   classes={{
    //     paper: classes.drawerPaper,
    //   }}
      onClick={() => closeDrawer()}
    >
      <List>
      <ListItem >
    
    <ListItemText primary="LOCATIONS" />
  </ListItem>
        <ListItem >
    
    <ListItemText primary="SERVIVES" />
  </ListItem>
  <ListItem >

    <ListItemText primary="RESOURCES" />
  </ListItem>
  <ListItem>
    
    <ListItemText primary="BLOG" />
  </ListItem>
  <ListItem >
    
    <ListItemText primary="REVIEWS" />
  </ListItem>
      </List>
    </Drawer>
         
        </Toolbar>
        
      </AppBar>
      </Grid>


        </Grid>
    )
}


export default Header