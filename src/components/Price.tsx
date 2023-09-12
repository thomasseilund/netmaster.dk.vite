// import React from 'react'
// import { Typography } from '@material-ui/core'
// import Container from '@material-ui/core/Container';
// import ReactGA from 'react-ga'
// ReactGA.initialize('UA-3136808-01')
// ReactGA.pageview(window.location.pathname + window.location.search)

import { Paper } from "@mui/material";
import AppBarBerlin from "./AppBarBerlin";
import { Fragment } from "react";

export default function Price() {
    return (
        <Fragment>
            <AppBarBerlin />
            <Paper style={{ backgroundColor: "#e6eae8", margin: "5px" }}>
                <div>
                    Priser
                </div>
                <div>
                    <ul>
                        <li>{window.config.price} kr. pr. overnatning. Minimum 3 dage.</li>
                        <li>Lejligheden rengøres af lejer efter ophold</li>
                        <li>Pt. er det desværre ikke muligt af skaffe lokal rengøringshjælp</li>
                    </ul>
                </div>
            </Paper>
        </Fragment>
    )
}
