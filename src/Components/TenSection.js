import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const SecondLast = () => {
  return (
    <Box
      sx={{
        marginTop: "40px",
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "10px 15px",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          gap: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg"
          alt="logo"
          style={{ height: "auto" }}
        />
        <Typography
          variant="h5"
          color="#2B2B2B"
          sx={{ fontSize: { xs: "14px", sm: "18px", md: "22px", lg: "26px" } }}
        >
          Fast & Free Delivery
        </Typography>
        <Typography
          variant="subtitle2"
          color="#57667e"
          sx={{ fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "24px" } }}
        >
          Free Delivery on All orders
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          gap: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg"
          alt="logo"
          style={{ height: "auto" }}
        />
        <Typography
          variant="h5"
          color="#2B2B2B"
          sx={{ fontSize: { xs: "14px", sm: "18px", md: "22px", lg: "26px" } }}
        >
          Fast & Free Delivery
        </Typography>
        <Typography
          variant="subtitle2"
          color="#57667e"
          sx={{ fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "24px" } }}
        >
          Free Delivery on All orders
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          gap: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg"
          alt="logo"
          style={{ height: "auto" }}
        />
        <Typography
          variant="h5"
          color="#2B2B2B"
          sx={{ fontSize: { xs: "14px", sm: "18px", md: "22px", lg: "26px" } }}
        >
          Fast & Free Delivery
        </Typography>
        <Typography
          variant="subtitle2"
          color="#57667e"
          sx={{ fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "24px" } }}
        >
          Free Delivery on All orders
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          gap: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg"
          alt="logo"
          style={{ height: "auto" }}
        />
        <Typography
          variant="h5"
          color="#2B2B2B"
          sx={{ fontSize: { xs: "14px", sm: "18px", md: "22px", lg: "26px" } }}
        >
          Fast & Free Delivery
        </Typography>
        <Typography
          variant="subtitle2"
          color="#57667e"
          sx={{ fontSize: { xs: "12px", sm: "14px", md: "18px", lg: "24px" } }}
        >
          Free Delivery on All orders
        </Typography>
      </Box>
    </Box>
  );
};

export default SecondLast;
// src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg"
