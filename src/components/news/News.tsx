

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from "./news-components/Stack";
import Nav from "../Nav"
const News = () => {



    return (
         <section className="h-full w-full min-h-screen bg-gray-900 relative overflow-hidden">
          <CssBaseline />
          <Container>
            <Nav />
            <Grid  container spacing={4} className="mt-5">
            <Grid  size={{ xs: 12, md: 12 }} order={{ xs: 0, md: 1 }}>
            <Stack/>
            </Grid>
            </Grid>
            </Container>
        </section>
        
    )
}

export default News;
