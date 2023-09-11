// import React from 'react'
// import { AppBar, Toolbar, Button } from '@material-ui/core'
// import Typography from '@material-ui/core/Typography'
// import Container from '@material-ui/core/Container';

import { AppBar, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AppBarBerlin() {
  const navigate = useNavigate();
  return (
    <Container>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        {/* <Toolbar onClick={props.showCarousel}> */}
          <Typography variant="h6">
            Berlin, Prenzlauer Berg
          </Typography>
        {/* </Toolbar> */}
      </AppBar>
      <Typography style={{ backgroundColor: "black", color: "white"}}>
      <Button size="small" color="inherit" aria-label="Menu" onClick={() => {navigate('/description');}}>Lejlighed</Button>
      <Button size="small" color="inherit" aria-label="Menu" onClick={() => {navigate('/price');}}>Pris</Button>
      <Button size="small" color="inherit" aria-label="Menu" onClick={() => {navigate('/calendar');}}>Kalender</Button>
      <Button size="small" color="inherit" aria-label="Menu" onClick={() => {navigate('/bookingrequest');}}>Kontakt</Button>
      <Button size="small" color="inherit" aria-label="Menu" onClick={() => {navigate('/faq');}}>FAQ</Button>
        {/* <Button size="small" color="inherit" aria-label="Menu" onClick={props.showPrice}>Pris</Button>
        <Button size="small" color="inherit" aria-label="Menu" onClick={props.showCalendar}>Kalender</Button>
        <Button size="small" color="inherit" aria-label="Menu" onClick={props.showBookingRequest}>Kontakt</Button>
        <Button size="small" color="inherit" aria-label="Menu" onClick={props.showFAQ}>FAQ</Button> */}
      </Typography>
    </Container>
  );
}