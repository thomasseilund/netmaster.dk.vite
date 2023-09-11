import AppBarBerlin from "./AppBarBerlin";
import CarouselBerlin from "./CarouselBerlin";
import { Container, Paper } from "@mui/material";

export default function LandingPage() {
    return (
        <Container>
            <AppBarBerlin />
            <Paper style={{ backgroundColor: "#e6eae8", margin: "5px" }}>
                <center>
                    <CarouselBerlin />
                </center>
            </Paper>
        </Container>
    )
}