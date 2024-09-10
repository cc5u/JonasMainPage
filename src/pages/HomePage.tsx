import { Divider, Typography } from "@mui/material";
import DefaultFooter from "../components/DefaultFooter";
import RandomPhotoDisplay from "../components/RandomPhotoDisplay";
import WrapperPage from "../components/WrapperPage";
const imageUrls = ["src/assets/Lac_Léman.png"];

function HomePage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        minHeight: "100vh",
      }}
    >
      <WrapperPage pageTitle="Home" />
      <RandomPhotoDisplay imageUrls={imageUrls} />

      <Divider style={{ marginTop: 10 }} />
      <div style={{ width: "100%", marginLeft: 20 }}>
        <Typography variant="h4" marginTop={5} marginBottom={1}>
          Welcome,
        </Typography>
        <Typography variant="body1" marginBottom={5}>
          Hi, I'm Jonas, a computer engineering student graduated from the Hong
          Kong Univeristy of Science and Technology. Welcome to my personal
          website, you can view my projects (coursework), notes, and some photos
          I took in my daily life.
        </Typography>
      </div>
      <DefaultFooter></DefaultFooter>
    </div>
  );
}

export default HomePage;
