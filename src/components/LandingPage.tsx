import { Fragment } from "react";
import AppBarBerlin from "./AppBarBerlin";
import CarouselBerlin from "./CarouselBerlin";
import { Paper } from "@mui/material";

export default function LandingPage() {
    return (
        <Fragment>
            <AppBarBerlin />
            <Paper style={{ backgroundColor: "#e6eae8", margin: "5px" }}>
                <center>
                    <CarouselBerlin />
                </center>
            </Paper>
        </Fragment>
    )
}