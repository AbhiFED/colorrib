import React from "react";
import { Box, Link, Typography } from "@mui/material";

const ThirdSection = () => {
  return (
    <Box
      sx={{
        background: "black",
        color: "white",
        textAlign: "center",
        height: "35px",
        margin: "5px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
          fontWeight: "400",
          margin: 0,
        }}
      >
        Sale Up To 50% Biggest Discounts. Hurry! Limited Period Offer
        &nbsp;&nbsp;
        <Link
          href="#"
          sx={{
            color: "#CEBD9C",
            fontWeight: "500",
            fontSize: { xs: "13px", sm: "15px", md: "17px", lg: "19px" },
            textDecoration: "underline",
            textDecorationThickness: "3px",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          Shop Now
        </Link>
      </Typography>
    </Box>
  );
};

export default ThirdSection;
