import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";

interface AppBarProps {
  currentPage: string;
}

function DefaultAppBar({ currentPage }: AppBarProps) {
  return (
    <>
      <CssBaseline>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: "left" }}
            >
              Jonas' {currentPage}
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  textDecoration: currentPage === "Home" ? "underline" : "none",
                }}
              >
                Home
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  textDecoration:
                    currentPage === "Projects" ? "underline" : "none",
                }}
              >
                Projects
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  textDecoration:
                    currentPage === "Photography" ? "underline" : "none",
                }}
              >
                Photography
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{
                  textDecoration:
                    currentPage === "Notes" ? "underline" : "none",
                }}
              >
                Notes
              </Button>
              <Button variant="outlined" color="inherit" sx={{ marginLeft: 1 }}>
                Contact Me
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </CssBaseline>
    </>
  );
}

export default DefaultAppBar;
