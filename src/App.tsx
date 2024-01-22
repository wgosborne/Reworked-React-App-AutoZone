import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import SideBarList from "./components/SideBarList";
import MainMenu from "./components/MainMenu";
import RoutingMenu from "./components/RoutingMenu";


function App() {

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //phone size
        lg: `"nav nav" "aside main"`, //desktop, wider than 1024px
      }}
      templateColumns={{
        base: "1fr", //one fraction, it will stretch to take up available space
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => (console.log('serching'))}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <SideBarList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <MainMenu />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;

//Shows
//use for deciding on showing based on screen

//Template Areas
//determining layouts for different breakpoints
