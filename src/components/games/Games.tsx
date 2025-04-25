
import GameStack from "./components/GameStack";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FilterField from "./components/FilterField";

const Games = () => {
    return (
        <section className="h-full bg-gray-900 relative">
          <CssBaseline />
          <Container>
          <Grid container spacing={4}>
        
            <Grid size={{ xs: 12, md: 8 }}>
            <GameStack />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
            <FilterField />
            </Grid>
            </Grid>
            </Container>
        </section>
    )
}

export default Games;
