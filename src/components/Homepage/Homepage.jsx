import * as React from "react";
import Grid from "@mui/material/Grid";
import Content from "./Content";
import Search from "./Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Raleway",
    body1: {
      fontSize: 14,
    },
    body2: {
      fontSize: 16,
    },
    color: "#363636",
  },
});

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 6, mb: 10 }}>
        <Grid container direction="column">
          <Grid item>
            <Search />
          </Grid>
          <Grid item container>
            <Grid item xs={12} sm={12}>
              <Content />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Homepage;
