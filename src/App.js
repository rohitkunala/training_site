import CourseCard from "./Components/common/CourseCard";
import { SwipeableTextMobileStepper as Carousel } from "./Components/Carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Footer from "./Components/Footer";
import ResponsiveAppBar from "./Components/NavBar";
import Typed from "react-typed";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 100,
      }}
    >
      <ResponsiveAppBar></ResponsiveAppBar>
      <div className="texttyping" style={{ fontSize: 70, color: "#f62443", fontFamily: "Pacifico,cursive", alignSelf:"flex-start" , padding:"5% 0 5% 5%",}}>
        ECSR{" "}
        <span className="animated-typing">
          <Typed
            strings={["Eat", "Code", "Sleep", "Repeat"]}
            startDelay={500}
            typeSpeed={150}
            backSpeed={150}
            // cursorChar="🩸"
            // cursorChar="💚"
            cursorChar="🐱‍💻"
            // fadeOut={true}
            // showCursor={false}
            loop
          />
        </span>
      </div>
      <Carousel></Carousel>
      <Stack
        sx={{
          boxShadow: 12,
          marginY: 7,
          padding: 2,
          border: "0px solid black",
          borderRadius: 2,
          maxWidth: "80vw",
          backgroundColor: "rgba(67, 231, 217, 0.957)",
        }}
      >
        <h3 style={{ textAlign: "center" }}>
          This Training website offers abcd
        </h3>
        <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
        vel repudiandae magnam magni autem, blanditiis sequi tempore neque quae
        reprehenderit voluptatem nulla laborum, minima officia corporis culpa.
        Quas, tempora harum.
      </Stack>
      <Accordion
        sx={{ maxWidth: 800, backgroundColor: "rgba(6, 154, 142, 0.286)" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>C Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <CourseCard />
            <CourseCard />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ maxWidth: 800, backgroundColor: "rgba(6, 154, 142, 0.286)" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>C++ Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <CourseCard />
            <CourseCard />
          </div>
        </AccordionDetails>
      </Accordion>
      <Footer />
    </div>
  );
}

export default App;

export const logoSrc =
  "data:image/png;base64,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";

// export const Height = () => {
//   return (
//     <Grid container>
//       <Box
//         sx={{
//           boxShadow: 0,
//           width: "8rem",
//           height: "5rem",
//           bgcolor: (theme) =>
//             theme.palette.mode === "dark" ? "#101010" : "#fff",
//           color: (theme) =>
//             theme.palette.mode === "dark" ? "grey.300" : "grey.800",
//           p: 1,
//           m: 1,
//           borderRadius: 2,
//           textAlign: "center",
//           fontSize: "0.875rem",
//           fontWeight: "700",
//         }}
//       >
//         boxShadow: 0
//       </Box>
//       <Box
//         sx={{
//           boxShadow: 1,
//           width: "8rem",
//           height: "5rem",
//           bgcolor: (theme) =>
//             theme.palette.mode === "dark" ? "#101010" : "#fff",
//           color: (theme) =>
//             theme.palette.mode === "dark" ? "grey.300" : "grey.800",
//           p: 1,
//           m: 1,
//           borderRadius: 2,
//           textAlign: "center",
//           fontSize: "0.875rem",
//           fontWeight: "700",
//         }}
//       >
//         boxShadow: 1
//       </Box>
//       <Box
//         sx={{
//           boxShadow: 2,
//           width: "8rem",
//           height: "5rem",
//           bgcolor: (theme) =>
//             theme.palette.mode === "dark" ? "#101010" : "#fff",
//           color: (theme) =>
//             theme.palette.mode === "dark" ? "grey.300" : "grey.800",
//           p: 1,
//           m: 1,
//           borderRadius: 2,
//           textAlign: "center",
//           fontSize: "0.875rem",
//           fontWeight: "700",
//         }}
//       >
//         boxShadow: 2
//       </Box>
//       <Box
//         sx={{
//           boxShadow: 3,
//           width: "8rem",
//           height: "5rem",
//           bgcolor: (theme) =>
//             theme.palette.mode === "dark" ? "#101010" : "#fff",
//           color: (theme) =>
//             theme.palette.mode === "dark" ? "grey.300" : "grey.800",
//           p: 1,
//           m: 1,
//           borderRadius: 2,
//           textAlign: "center",
//           fontSize: "0.875rem",
//           fontWeight: "700",
//         }}
//       >
//         boxShadow: 3
//       </Box>
//     </Grid>
//   );
// };
