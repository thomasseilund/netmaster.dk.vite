import { Box, Paper } from "@mui/material";
import AppBarBerlin from "./AppBarBerlin";
import { Fragment } from "react";
import { Image } from 'mui-image'

// https://www.youtube.com/watch?v=K74l26pE4YA

export default function Description() {
    return (
        <Fragment>
            <AppBarBerlin />
            <Paper style={{ backgroundColor: "#e6eae8", margin: "5px" }}>

                <div>
                    Ferielejlighed i Prenzlauer Berg
                </div>
                <div>
                    - kun 10 minutter fra Alexander Platz
                </div>

                <div>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }} marginTop={5}>
                        <Box sx={{ flex: 2 }}>
                            <Box marginRight={1}>
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
                        <Box sx={{ flex: 1 }}>
                            <Image src={`${import.meta.env.BASE_URL}images/lillevaerelsemedsenge.jpg`} />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }} marginTop={5}>
                        <Box sx={{ flex: 1 }}>
                            <Image src={`${import.meta.env.BASE_URL}images/facade.jpg`} />
                        </Box>
                        <Box sx={{ flex: 2 }} marginLeft={1}>
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

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }} marginTop={5}>
                        <Box sx={{ flex: 1 }}>
                            <Image src={`${import.meta.env.BASE_URL}images/stuemedbordogseng.jpg`} />
                        </Box>
                        <Box sx={{ flex: 0.5 }}></Box>
                        <Box sx={{ flex: 1 }}>
                            <Image src={`${import.meta.env.BASE_URL}images/plantegning01.jpg`} />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }} marginTop={5}>
                        <Box sx={{ flex: 2 }}>
                            Køkkenet er fuldt udstyret med køkkenredskaber og service.
                            Her findes også opvaskemaskine, vaskemaskine, mikroovn, kaffemaskine, el-koger og andre elektriske artikler.
                            Desuden findes strygebræt og strygejern i værelset.
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Image src={`${import.meta.env.BASE_URL}images/koekken.jpg`} />
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }} marginTop={5}>
                        <Box sx={{ flex: 1 }}>
                            <Image src={`${import.meta.env.BASE_URL}images/badevaerelse.jpg`} />
                        </Box>
                        <Box sx={{ flex: 2 }} marginLeft={1}>
                            Badeværelset er med føntørrer, håndklædevarmer og gulvvarme.
                            Der findes ekstra håndklæder i lejligheden som blot skal vaskes og tørres før afrejse.
                        </Box>
                    </Box>

                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <Box sx={{ flex: 0.333 }}>
                            <Image src={`${import.meta.env.BASE_URL}images/korridor.jpg`} />
                        </Box>
                    </Box>

                    <Box marginTop={5}>
                        Lokalområdet
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'flex-start' }} marginTop={5} >
                        <Image src={`${import.meta.env.BASE_URL}images/underUBahn.png`} />
                    </Box>

                    <Box sx={{ display: 'flex' }} marginTop={5}>
                        <Box sx={{flex: 1}}>
                            <Image src={`${import.meta.env.BASE_URL}images/localmap04.jpg`}/>
                        </Box>
                        <Box sx={{flex: 0.5}}>
                        </Box>
                        <Box sx={{flex: 1}}>
                            <Image src={`${import.meta.env.BASE_URL}images/mauerinmauerpark.jpg`}/>
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
                        <Image width={60} height={'auto'} src={`${import.meta.env.BASE_URL}images/nosmoking50.png`}/>
                    </Box>
                    Røgfri lejlighed - rygning kun på balkon.

                </div>
            </Paper>
        </Fragment>
    )
}
