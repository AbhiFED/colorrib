import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Fade } from "@mui/material";
import "./Slider.css";

const Four = () => {
  const images = [
    "https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg.webp",
    "https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg.webp",
  ];
  const [cii, setCii] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCii((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
        justifyItems: "center",
        // top:'5px',
        width: "100%",
        height: {
          xs: "200px",
          sm: "250px",
          md: "350px",
          lg: "450px",
          xl: "550px",
        },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Animated text box */}
      <Fade in={true} timeout={1000} sx>
        <Box
          sx={{
            position: "absolute",
            top: "50px",
            [cii % 2 === 0 ? "right" : "left"]: "0",
            width: "100%",
            textAlign: "center",
            backgroundColor: "grey",

            height: { xs: "20%", sm: "30%", md: "40%", lg: "50%" },
            margin: {
              xs: "10px 20px",
              sm: "10px 30px",
              md: "10px 40px",
              lg: "10px 50px",
              xl: "10px 60px",
            },
            color: "white",
            padding: {
              xs: "16px",
              sm: "26px",
              md: "36px",
              lg: "46px",
              xl: "56px",
            },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "all 0.1s ease-in-out",
          }}
        >
          <Box
            sx={{
              width: { xs: "40%", sm: "35%", md: "35%", lg: "32%" },
              textAlign: "center",
              // margin: cii % 2 === 0 ? "1px 800px" : "1px 300px",
              margin:
                cii % 2 === 0
                  ? {
                      xs: "1px 300px",
                      sm: "1px 400px",
                      md: "1px 500px",
                      lg: "1px 800px",
                    }
                  : {
                      xs: "1px 100px",
                      sm: "1px 200px",
                      md: "1px 250px",
                      lg: "1px 300px",
                    },
              position: "absolute",
              // backgroundColor:'grey',
              top: "10%",
            }}
          >
            <Typography
              variant="h3"
              className="static-text"
              sx={{
                fontFamily: "'Clicker Script', sans-serif",
                color: "red",
                fontSize: { xs: "30px", sm: "40px", md: "50px", lg: "66px" },
              }}
            >
              Fashion Sale
            </Typography>
            <Typography
              variant="h4"
              className="bouncing-text"
              mt={{xs:1}}
              mb={2}
              sx={{
                fontFamily: "'Jost', sans-serif",
                fontSize: {
                  xs: "20px",
                  sm: "25px",
                  md: "35px",
                  lg: "45px",
                  xl: "60px",
                },
                color: "#292621",
              }}
            >
              Minimal Menz Style
            </Typography>
            <Typography
              variant="h6"
              className="slide-in-text"
              sx={{
                color: "#74706B",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
              letterSpacing={0.5}
            >
              Explore fashion fonts at MyFonts. Discover a world of captivating
              typography for your creative projects. Unleash your design
              potential today!
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 5, backgroundColor: "#292621", color: "white" }}
              className="slide-in-text"
            >
              SHOP NOW
            </Button>
          </Box>
        </Box>
      </Fade>

      {/* Image slider */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${images[cii]})`,
          transition: "background-image 1s ease-in-out",
        }}
      />
    </Box>
  );
};

export default Four;
