import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Cards = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        maxWidth: "100%",
        position: "relative",
        marginTop: { xs: "16px", sm: "64px", md: "50px" },
        // marginLeft: { xs: "16px", sm: "64px", md: "112px" },
        // marginRight: { xs: "16px", sm: "64px", md: "112px" },
      }}
    >
      <Box sx={{ justifyItems: "center", paddingTop: "50px" }}>
        <Typography
          variant="h4"
          fontWeight={"300"}
          sx={{ fontSize: { xs: "26px", sm: "36px", md: "46px", lg: "56px" } }}
        >
          Latest News
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap", lg: "nowrap" },
          maxWidth: "100%",
          margin: "0px 25px",
          marginLeft: { xs: "16px", sm: "64px", md: "112px" },
          marginRight: { xs: "16px", sm: "64px", md: "112px" },
        }}
      >
        <Box
          sx={{
            // border: "1px solid black",
            justifyItems: "flex-start",
            padding: "20px",
            display: "flex",

            flexDirection: "column",
            gap: "20px",
            "&:hover": {
              color: "red",
            },
          }}
        >
          <img
            alt="hello"
            src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog1.jpg"
            style={{
              maxWidth: "100%",
              height: { xs: "60%", sm: "80%", md: "100%" },
            }}
          />

          <Typography sx={{ color: "#74706B", fontSize: { xs: "26px" } }}>
            Fashion Tips
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "25px", md: "25px" } }}
          >
            What Curling Irons Are The Best Ones the Mui comp is materail UI.
          </Typography>

          <Typography
            variant="body1"
            color="#74706B"
            sx={{ fontSize: { xs: "16px", sm: "25px", md: "16px" } }}
          >
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
            voluptas iure, delectus..
          </Typography>

          <Link
            href="#"
            sx={{
              color: "Green !important",
              textDecorationThickness: "5px",
              fontWeight: "bold",
            }}
          >
            Read more
          </Link>
        </Box>
        <Box
          sx={{
            border: "1px solid whitesmoke",
            justifyItems: "flex-start",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            "&:hover": {
              color: "red",
            },
          }}
        >
          <img
            alt="hello"
            src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog2.jpg"
            style={{
              maxWidth: "100%",
              height: { xs: "60%", sm: "80%", md: "100%" },
            }}
          />

          <Typography sx={{ color: "#74706B", fontSize: { xs: "26px" } }}>
            Fashion Tips
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "25px", md: "25px" } }}
          >
            What Curling Irons Are The Best Ones the Mui comp is materail UI.
          </Typography>

          <Typography
            variant="body1"
            color="#74706B"
            sx={{ fontSize: { xs: "16px", sm: "22px", md: "16px" } }}
          >
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
            voluptas iure, delectus..
          </Typography>

          <Link
            href="#"
            sx={{
              color: "Green !important",
              textDecorationThickness: "5px",
              fontWeight: "bold",
            }}
          >
            Read more
          </Link>
        </Box>
        <Box
          sx={{
            border: "1px solid whitesmoke",
            justifyItems: "flex-start",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            "&:hover": {
              color: "red",
            },
          }}
        >
          <img
            alt="hello"
            src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog3.jpg"
            style={{
              maxWidth: "100%",
              height: { xs: "60%", sm: "80%", md: "100%" },
            }}
          />

          <Typography sx={{ color: "#74706B", fontSize: { xs: "26px" } }}>
            Fashion Tips
          </Typography>

          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "20px", sm: "22px", md: "25px" } }}
          >
            What Curling Irons Are The Best Ones the Mui comp is materail UI.
          </Typography>

          <Typography
            variant="body1"
            color="#74706B"
            sx={{ fontSize: { xs: "16px", sm: "22px", md: "16px" } }}
          >
            Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
            voluptas iure, delectus..
          </Typography>

          <Link
            href="#"
            sx={{
              color: "Green !important",
              textDecorationThickness: "5px",
              fontWeight: "bold",
            }}
          >
            Read more
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
