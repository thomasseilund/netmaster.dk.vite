import { Link, Paper, Typography } from "@mui/material";
import AppBarBerlin from "./AppBarBerlin";
import { Fragment } from "react";

export default function FAQ() {
    return (
        <Fragment>
            <AppBarBerlin />
            <Paper style={{ backgroundColor: "#e6eae8", margin: "5px" }}>
                <Typography variant="h6">
                    FAQ
                </Typography>

                <Typography variant="h6">
                    Hvordan bookes lejligheden?
                </Typography>
                Udfyld formularen under "KONTAKT" her på siden, og så vender vi tilbage per mail.

                <Typography variant="h6">
                    Nøgleudlevering
                </Typography>
                Nøglen sendes til den angivne adresse under "KONTAKT".

                <Typography variant="h6">
                    Parkering
                </Typography>
                Der kan parkeres i gaden mod betaling. Nord for Wisbyer Strasse er der gratis parkering (dec. 2019).
                Aug. 2023 fandt vi ud at man kan parkere 100 m. fra lejligheden for 5 EUR per døgn.
                <Link href="https://www.apcoa.de/parken/berlin/schoenhauser-allee-arcaden/">
                    Se Parkhaus Schönhauser Allee Arcaden
                </Link>

                <Typography variant="h6">
                    Er lejligheden børnevenlig?
                </Typography>
                Lejligheden er ikke børnesikret for mindre børn. Der findes desuden ikke barnestol, barneseng eller muligheder for opbevaring af klapvogne i opgangen.

                <Typography variant="h6">
                    Sengepladser
                </Typography>
                Der er 4 gode senge. Der findes desuden en foldeudmadras til et barn. Der er dyner/puder til 5 personer.

                <Typography variant="h6">
                    Rengøring
                </Typography>
                Lejligheden rengøres af lejer efter ophold. Medbring rengøringsklude og viskestykke. Rengøringsartikler findes i lejligheden.

                <Typography variant="h6">
                    Sengelinned, håndklæder etc
                </Typography>
                Medbring sengelinned, viskestykker, håndklæder og en rengøringsklud.

                <Typography variant="h6">
                    TV og internet
                </Typography>
                Der findes ikke TV og internet i lejligheden.

                <Typography variant="h6">
                    Når lejligheden forlades
                </Typography>
                <ul>
                    <li>Affaldsspande tømmes</li>
                    <li>Lejligheden rengøres</li>
                    <li>Gulvvarme i badeværelset slukkes</li>
                    <li>Døre og vinduer lukkes</li>
                    <li>Skrue alle radiatorer ned på 1</li>
                    <li>Skrue ned for gassen i køkkenskabet. De to grå drejeknapper med radiatorsymbol/vandhanesymbol skrues helt ned</li>
                    <li>Tømme og rengøre køleskabet</li>
                </ul>

                <Typography variant="h6">
                    Nøgleaflevering
                </Typography>
                Umiddelbart efter ophold sendes nøgle retur

            </Paper>
        </Fragment>
    )
}
