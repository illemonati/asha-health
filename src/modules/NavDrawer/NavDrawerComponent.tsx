import React, {useState} from "react";
import {AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {PageLinks} from "../../utils/links";
import {Link} from "react-router-dom";


interface NavDrawerComponentProps {
    pageLinks?: PageLinks
}

export default function NavDrawerComponent(props?: NavDrawerComponentProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);


    return (
        <div className="NavDrawer">
            <AppBar position="static" color='primary'>
                <Toolbar>
                    <IconButton  color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
                        <MenuIcon style={{marginRight: 10}} />
                    </IconButton>
                    <Typography variant='h6'>
                        Advocating for Self Health Awareness
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box style={{width: '17vw'}}>
                    <Typography variant="h4" style={{textAlign: 'center'}}>
                        Pages
                    </Typography>
                    <List>
                        {props?.pageLinks?.map((pageLink) => {
                            console.log(pageLink.pageUrl);
                            return (
                                <Link to={pageLink.pageUrl} style={{textDecoration: 'none'}}>
                                    <ListItem button key={pageLink.pageName}>
                                        <ListItemText primary={pageLink.pageName}/>
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        </div>
    )


}

