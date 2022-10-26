import { useEffect } from "react";
import { Button, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import theme from "./styles/theme";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        {/*
        Appbar
        Banner
        Promotions
        Title
        Products
        footer
        search
        Appdrawer
        */}
        <Button variant="contained">Test</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
