
import GameStack from "./components/GameStack";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterField from "./components/FilterField";

const Games = () => {
    return (
        <section className="h-full w-full min-h-screen bg-gray-900 relative overflow-hidden">
          <CssBaseline />
          <Container>
          <Grid  container spacing={4}>
        
            <Grid size={{ xs: 12, md: 8 }} order={{ xs: 2, md: 1 }}>
            <GameStack />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }}>
            <FilterField />
            </Grid>
            </Grid>
            </Container>
        </section>
    )
}

export default Games;
