import React, {useState} from "react";
import {AppBar, Box, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {PageLinks} from "../../utils/links";
import {Link} from "react-router-dom";
import './styles.css';


interface NavDrawerComponentProps {
    pageLinks?: PageLinks
}

export default function NavDrawerComponent(props?: NavDrawerComponentProps) {
    const [drawerOpen, setDrawerOpen] = useState(false);


    return (
        <>
            <AppBar position="sticky" color='primary'>
                <Toolbar>
                    <IconButton className="menuIconButton" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6'>
                        Advocating for Self Health Awareness
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor='left' open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box className="drawerBox">
                    <Typography variant="h4">
                        Pages
                    </Typography>
                    <List>
                        {props?.pageLinks?.map((pageLink, i) => {
                            return (
                                <Link to={pageLink.pageUrl} key={i} className={"pageLink"}>
                                    <ListItem button key={pageLink.pageName}>
                                        <ListItemText primary={pageLink.pageName}/>
                                    </ListItem>
                                </Link>
                            )
                        })}
                    </List>
                </Box>
            </Drawer>
        </>
    )


}

