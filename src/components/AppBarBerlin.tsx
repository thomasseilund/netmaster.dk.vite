import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

export default function AppBarBerlin() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <IconButton onClick={() => navigate('/')}>
              <img src={`${import.meta.env.BASE_URL}favicon.ico`} />
            </IconButton>
          </Box>
          <Box>
            <Typography variant="h6">
              Berlin, Prenzlauer Berg
            </Typography>
          </Box>
        </Box>
      </AppBar>
      <Typography fontSize={6} style={{ backgroundColor: "black", color: "white" }}>
        <Button size="small" color="inherit" aria-label="Menu" onClick={() => { navigate('/description'); }}>
          <Typography fontSize={12} style={{ backgroundColor: "black", color: "white" }}>
            Lejlighed
          </Typography>
        </Button>
        <Button size="small" color="inherit" aria-label="Menu" onClick={() => { navigate('/price'); }}>
          <Typography fontSize={12} style={{ backgroundColor: "black", color: "white" }}>
            Pris
          </Typography>
        </Button>
        <Button size="small" color="inherit" aria-label="Menu" onClick={() => { navigate('/calendar'); }}>
          <Typography fontSize={12} style={{ backgroundColor: "black", color: "white" }}>
            Kalender
          </Typography>
        </Button>
        <Button size="small" color="inherit" aria-label="Menu" onClick={() => { navigate('/bookingrequest'); }}>
          <Typography fontSize={12} style={{ backgroundColor: "black", color: "white" }}>
            Kontakt
          </Typography>
        </Button>
        <Button size="small" color="inherit" aria-label="Menu" onClick={() => { navigate('/faq'); }}>
          <Typography fontSize={12} style={{ backgroundColor: "black", color: "white" }}>
            FAQ
          </Typography>
        </Button>
      </Typography>
    </Fragment >
  );
}