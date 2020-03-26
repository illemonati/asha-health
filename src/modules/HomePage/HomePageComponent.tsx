import React from "react";
import {Box, Container, Typography} from "@material-ui/core";
import {PageLinks} from "../../utils/links";
import {Link} from "react-router-dom";
import logoPng from '../../static-assets/ASHA_logo_2.png';
import './styles.css';


interface HomePageComponentProps {
    pageLinks?: PageLinks
}


export default function HomePageComponent(props: HomePageComponentProps) {
    return (
        <div className="homepage">
            <Container maxWidth="md">
                <Box margin="auto" justifyContent="center">
                    <Typography variant="h3">
                        Advocating for Self Health Awareness
                    </Typography>
                    <br />
                    <br />

                    <img className="logoImage" src={logoPng} alt="logo" />
                    <br />
                    <br />

                    {props.pageLinks?.map((pageLink, i) => {
                        return(
                            <Box key={i}>
                                <Link to={pageLink.pageUrl}>{pageLink.pageName}</Link>
                                <br />
                                <br />
                            </Box>
                        )
                    })}

                </Box>
            </Container>
        </div>
    )
}


