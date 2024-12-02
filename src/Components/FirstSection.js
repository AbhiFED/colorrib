import React from "react";
import { Box, Link, Divider } from "@mui/material";
import { FaFacebook, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { styled } from "@mui/system";

const StyledLinks = styled(Link)({
  color: "grey",
  fontWeight: "bold",
  transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
  "&:hover": {
    color: "red",
    transform: "rotateY(180deg)",
  },
});

const FirstSection = () => {
  return (
    <Box
      sx={{
        // border: "1px solid whiteSmoke",
        mx: { xs: "10px",  sm: "30px" },
        p: { xs: "5px", sm: "7px", md: "10px" },
        display: { xs: "none", sm: "inline-block", md: "block" },
      }}
    >
      <Box
        display={"flex"}
        justifyContent={{ xs: "center", md: "space-between" }}
        alignItems={"center"}
        sx={{
          fontSize: { xs: "8px", sm: "12px", md: "16px" },
          // maxWidth: "100%",
          mx: { xs: "5px", sm: "30px", md: "85px" },
          height: "30px",
        }}
      >
        <Box
          aria-label="leftInfo"
          display={"flex"}
          gap={{ xs: 1, sm: 1.5, md: 2 }}
        >
          <Link underline="none" href="#" sx={{ color: "#292621" }}>
            About Us
          </Link>
          <Link underline="none" href="#" sx={{ color: "#292621" }}>
            Privacy
          </Link>
          <Link underline="none" href="#" sx={{ color: "#292621" }}>
            FAQ
          </Link>
          <Link underline="none" href="#" sx={{ color: "#292621" }}>
            Careers
          </Link>
        </Box>
        <Box aria-label="RightInfo" display={"flex"} alignItems={"center"}>
          <Box display={"flex"} gap={{ xs: "6px", sm: "8px", md: "10px" }}>
            <Link underline="none" href="#" sx={{ color: "#292621" }}>
              My Wishlist
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link underline="none" href="#" sx={{ color: "#292621" }}>
              Track Your Order
            </Link>
            <Divider orientation="vertical" flexItem />
          </Box>
          <Box
            display={"flex"}
            gap={{ xs: "8px", sm: "12px", md: "16px" }}
            ml={"5px"}
          >
            <StyledLinks href="#">
              <FaFacebook />
            </StyledLinks>
            <StyledLinks href="#">
              <IoLogoInstagram />
            </StyledLinks>
            <StyledLinks href="#">
              <FaTwitter />
            </StyledLinks>
            <StyledLinks href="#">
              <FaLinkedinIn />
            </StyledLinks>
            <StyledLinks href="#">
              <FaYoutube />
            </StyledLinks>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FirstSection;
