import React from "react";
import { Box, Typography, Link, Button } from "@mui/material";
import styled from "styled-components";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const StyledLinks = styled(Link)({
  color: "grey !important",
  fontWeight: "bold",
  fontSize: "30px !important",
  transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
  "&:hover": {
    color: "red !important",
    transform: "rotateY(180deg)",
  },
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
};

const Hoverlink = styled(Link)({
  color: "#BBB9B5 !important",
  fontWeight: "bold",
  transition: "transform 0.5s ease",
  "&:hover": {
    textDecoration: "underline",
    transform: "scale(1.1)",
  },
});

const Cards = () => {
  return (
    <>
      <Box
        sx={{
          // justifyContent: "center",
          // alignItems: "center",
          // backgroundColor: "grey",
          maxWidth: "100%",
          // position: "relative",
          marginTop: { xs: "16px", sm: "64px", md: "50px" },
          padding: "40px 20px",
          // marginLeft: { xs: "16px", sm: "64px", md: "112px" },
          // marginRight: { xs: "16px", sm: "64px", md: "112px" },
          backgroundColor: "#212529",
          // borderRadius: "5px",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            color: "white",
            marginLeft: { xs: "5px", sm: "25px", md: "40px" },
            marginRight: { xs: "5px", sm: "25px", md: "40px" },

            backgroundColor: "#212529",
            alignItems: "center",

            padding: { xs: "10px", sm: "24px", md: "50px" },
            gap: "15px",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  xs: "13px",
                  sm: "16px",
                  md: "25px",
                  lg: "28px",
                  xl: "32px",
                },
              }}
            >
              Suscribe News Letter
            </Typography>
            <br />
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "20px",
                },
              }}
            >
              Suscribe News Letter to get 5% on all products
            </Typography>
          </Box>
          <Box
            display={{
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            gap={"10px"}
          >
            <input
              type="text"
              placeholder="Enter your email"
              style={{ padding: "12px 5px" }}
              // sx={{
              //   backgroundColor: "white",
              //   fontSize: {
              //     xs: "10px",
              //     sm: "12px",
              //     md: "14px",
              //     lg: "16px",
              //     xl: "20px",
              //   },
              // }}
            />
            <Button
              variant="contained"
              color="error"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "16px",
                  xl: "20px",
                },
              }}
            >
              Suscribe
            </Button>
          </Box>
          <Box
            display={{
              xs: "block",
              sm: "flex",
              md: "flex",
              lg: "flex",
              xl: "flex",
            }}
            gap={{ xs: "10px", sm: "15px", md: "25px" }}
            fontSize={{ xs: "1px", sm: "1px", md: "2px", lg: "3px" }}
          >
            <StyledLinks href="#">
              <FaFacebook />
            </StyledLinks>
            <StyledLinks href="#">
              <IoLogoInstagram />
            </StyledLinks>
            <StyledLinks href="#">
              <FaYoutube />
            </StyledLinks>
          </Box>
        </Box>
        {/* responsiveness done  */}
        <hr
          style={{
            border: "1px solid grey",
            maxWidth: "100%",
            margin: "10px 30px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            // border:'1px solid white',
            justifyContent: "space-between",
            maxWidth: "100%",
            marginTop: "50px",
            // paddingBottom:'100px',
            marginBottom: "100px",
          }}
        >
          <Box
            sx={{
              // border: "1px solid whitesmoke",
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              padding: "20px 10px",
              // backgroundColor:'green'
              gap: "10px",
              boxSizing: "border-box",
            }}
          >
            <img
              src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo2_footer.png"
              alt="logo"
              sx={{ width: { xs: "90%", sm: "110%", md: "100%" } }}
            />
          </Box>
          <Box
            sx={{
              // border: "1px solid whitesmoke",
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              // padding: "20px 100px",
              // backgroundColor:'green'
              gap: "15px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "10px",
                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" },
              }}
            >
              Shop Men{" "}
            </Typography>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
          </Box>
          <Box
            sx={{
              // border: "1px solid whitesmoke",
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              // padding: "20px 100px",
              // backgroundColor:'green'
              gap: "15px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "10px",
                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" },
              }}
            >
              Shop Men{" "}
            </Typography>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
          </Box>
          <Box
            sx={{
              // border: "1px solid whitesmoke",
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              // padding: "20px 100px",
              // backgroundColor:'green'
              gap: "15px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "10px",
                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" },
              }}
            >
              Shop Men{" "}
            </Typography>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
          </Box>
          <Box
            sx={{
              // border: "1px solid whitesmoke",
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              // padding: "20px 100px",
              // backgroundColor:'green'
              gap: "15px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                marginBottom: "10px",
                fontSize: { xs: "16px", sm: "18px", md: "18px", lg: "20px" },
              }}
            >
              Shop Men{" "}
            </Typography>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
            <Hoverlink
              href="#"
              sx={{
                textDecoration: "none",
                color: "white",
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
              }}
            >
              Clothing Fashion{" "}
            </Hoverlink>
          </Box>
        </Box>
        <hr
          style={{
            border: "1px solid grey",
            maxWidth: "100%",
            margin: "10px 30px",
          }}
        />
        <Box
          color={"#BBB9B5"}
          justifyContent={"center"}
          alignItems={"center"}
          pt="30px"
          display={"flex"}
        >
          <Typography
            position={"relative"}
            sx={{ fontSize: { xs: "12px", sm: "14px", md: "20px" } }}
          >
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <FavoriteIcon style={{ color: "red", fontSize: 15 }} />
            by Me
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "20px", sm: "25px", md: "30px", lg: "40px" },
              height: { xs: "20px", sm: "25px", md: "30px", lg: "40px" },

              borderRadius: "50%",
              backgroundColor: "red",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Button onClick={scrollToTop}>
              <KeyboardDoubleArrowUpIcon
                sx={{
                  position: "absolute",
                  animation: "moveUp 4s infinite linear  ",
                  color: "white",
                  fontSize: 35,
                }}
              />
            </Button>
            {/* Add animation in global CSS or style block */}
            <style>
              {`
          @keyframes moveUp {
             0% { transform: translateY(1px); opacity: 0.8; }
        25% { transform: translateY(-10px); opacity: 0.3; }
        50% { transform: translateY(1px); opacity: 0.5; }
        75% { transform: translateY(-10px); opacity: 0.4; }
        100% { transform: translateY(1px); opacity: 0.8; }
          }
        `}
            </style>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Cards;
