import { Box, Container, Paper } from "@mui/material";
import AppBarBerlin from "./AppBarBerlin";

export default function Description() {
    return (
        <Container>
            <AppBarBerlin />
            <Paper style={{ backgroundColor: "#e6eae8", margin: "5px" }}>

                <div>
                    Ferielejlighed i Prenzlauer Berg
                </div>
                <div>
                    - kun 10 minutter fra Alexander Platz
                </div>

                <div>

                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <Box>
                            <Box marginRight={5}>
                                <div>
                                    Vi har en flot istandsat 2-værelses lejlighed i Rodenbergstrasse i Prenzlauer Berg.
                                    Den bliver mest brugt af os selv og vores familie (både tysk og dansk) og venner, men har du lyst til at låne den så læs her:
                                </div>
                                <div>
                                    Lejligheden ligger i en stille sidevej til den hyggelige Schönhauser Allee. Der er få minutters gang til nærmeste U-bahn,
                                    som får dig til Alexander Platz på 10 minutter. Den samme U-bahn går også til Potsdamer Platz og Bahnhof Zoo ved Kurfürsten Damm.
                                    Der er desuden gode S-togsforbindelser fra/til lufthavnene Shönefeldt og Tegel.
                                </div>
                            </Box>
                        </Box>
                        <Box>
                            <img src={`${import.meta.env.BASE_URL}images/lillevaerelsemedsenge.jpg`} />
                        </Box>
                    </Box>



                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <img src={`${import.meta.env.BASE_URL}images/facade.jpg`} />
                        <Box marginLeft={5}>
                            <div>
                                Huset er bygget omkring år 1900 i den charmerende Jugend stil. Lejligheden er nyrenoveret og indrettet smagfuldt med en lys og enkel indretning.
                                Der er plads til 4-5 overnattende personer. Lejligheden er ikke indrettet til mindre børn.
                            </div>
                            <div>
                                Lejligheden indeholder en stor stue med en dobbeltseng, et værelse med to senge, som kan skilles ad til to enkeltsenge,
                                et dejligt køkken og et badeværelse med bruser/kar . Fra stuen er der udgang til stor balkon, hvor du kan nyde udsigten til gadens gamle huse.
                                Lejligheden ligger på 4. sal og den er meget stille. Der er elevator i ejendommen.
                            </div>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <Box>
                            <img src={`${import.meta.env.BASE_URL}images/stuemedbordogseng.jpg`}></img>
                        </Box>
                        <Box sx={{ width: 1 }}></Box>
                        <Box>
                            <img src={`${import.meta.env.BASE_URL}images/plantegning01.jpg`}></img>
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex' }} marginRight={5} marginTop={5}>
                        <div>
                            Køkkenet er fuldt udstyret med køkkenredskaber og service.
                            Her findes også opvaskemaskine, vaskemaskine, mikroovn, kaffemaskine, el-koger og andre elektriske artikler.
                            Desuden findes strygebræt og strygejern i værelset.
                        </div>
                        <img src={`${import.meta.env.BASE_URL}images/koekken.jpg`} />
                    </Box>

                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <img src={`${import.meta.env.BASE_URL}images/badevaerelse.jpg`}></img>
                        <div>
                            Badeværelset er med føntørrer, håndklædevarmer og gulvvarme.
                            Der findes ekstra håndklæder i lejligheden som blot skal vaskes og tørres før afrejse.
                        </div>
                    </Box>

                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <img src={`${import.meta.env.BASE_URL}images/korridor.jpg`} />
                    </Box>

                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <div>
                            Lokalområdet
                        </div>
                    </Box>

                    <Box sx={{ width: '100%' }} marginTop={5} >
                        <center>
                            <img src={`${import.meta.env.BASE_URL}images/header.png`}></img>
                        </center>
                    </Box>

                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <Box>
                            <img src={`${import.meta.env.BASE_URL}images/localmap04.jpg`}></img>
                        </Box>
                        <Box sx={{ width: '100%' }}>
                        </Box>
                        <Box>
                            <img src={`${import.meta.env.BASE_URL}images/mauerinmauerpark.jpg`}></img>
                        </Box>
                    </Box>

                    <div>
                        <ul>
                            <li>I lokalområdet findes mange butikker, restauranter og caféer.</li>
                            <li>Det er en del billigere at spise ude end i Danmark.</li>
                            <li>Mauer Park ligger ikke langt derfra og her kan du stadig se et langt stykke af den gamle Berlin-mur.</li>
                        </ul>
                    </div>
                    <div>
                        Oplev stemningen i et meget afslappet område af Berlin, hvor du får lidt mere end blot turisme.
                    </div>
                    <div>
                        Skriv og hør nærmere:
                    </div>
                    <div>
                        Annette og Thomas Seilund
                    </div>
                    <div>
                        Mail: <a href="mailto:a_seilund@hotmail.com">a_seilund@hotmail.com</a>
                    </div>
                    <div>
                        Bemærk venligst
                    </div>
                    <Box>
                        <img src={`${import.meta.env.BASE_URL}images/nosmoking50.png`}></img>
                    </Box>
                    Røgfri lejlighed - rygning kun på balkon.

                </div>
            </Paper>
        </Container >
    )
}
