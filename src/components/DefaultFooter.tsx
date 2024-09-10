import { Typography, Box, Button, Divider } from "@mui/material";

function DefaultFooter() {
  return (
    <>
      <Divider style={{ marginTop: 10 }} />
      <footer
        style={{
          marginLeft: 20,
          marginTop: 20,
          marginBottom: 100,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 5,
              }}
            >
              <Typography variant="h6">Projects</Typography>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Project 1
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Project 2
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Project 3
              </Button>
            </div>
          </Box>
          <Box sx={{ flex: 1 }}>
            <div
              style={{ display: "flex", flexDirection: "column", marginTop: 5 }}
            >
              <Typography variant="h6">Album</Typography>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Switzerland
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                France
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Germany
              </Button>
            </div>
          </Box>
          <Box sx={{ flex: 1 }}>
            <div
              style={{ display: "flex", flexDirection: "column", marginTop: 5 }}
            >
              <Typography variant="h6">Notes</Typography>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Introduction in ML
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Deep Learning and Computer Visions
              </Button>
            </div>
          </Box>
          <Box sx={{ flex: 1 }}>
            <div
              style={{ display: "flex", flexDirection: "column", marginTop: 5 }}
            >
              <Typography variant="h6">Contacts</Typography>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Email
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                LinkedIn
              </Button>
              <Button
                variant="text"
                color="inherit"
                sx={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                Instagram
              </Button>
            </div>
          </Box>
        </Box>
      </footer>
    </>
  );
}

export default DefaultFooter;
