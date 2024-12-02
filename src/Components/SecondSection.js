import React, { useState } from "react";
import { Menu, MenuItem, Box, Link, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Badge } from "@mui/material";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

////////////////////////////////////////////////////////////////////////
const StyledLink = styled(Link)({
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    color: "red",
  },
});
////////////////////////////////////////////////////////////////////////
const Hoverlink = styled(Link)({
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    color: "red",
  },
});
/////////////////////////////////////////////////////////////////////////
const Secondsection = () => {
  ////////
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  ////////////////////////////////////////////////////////////////////////

  const [blog, setBlog] = useState(null);
  const handleenter = (event) => {
    setBlog(event.currentTarget);
  };
  const handleleave = () => {
    setBlog(null);
  };
  ///////////////////////////////////////////////////////////////////

  const [open, setOpen] = useState(false);
  const HandleToogle = () => {
    setOpen(!open);
  };

  /////
  return (
    <>
      <Box
        sx={{
          // maxWidth: "100%",
          height: "60px",

          p: {
            xl: "10px 50px",
            lg: " 10px 50px",
            md: " 10px 70px",
            sm: " 10px 80px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: { xs: "10px", md: "70px" },
        }}
      >
        <Grid
          container
          spacing={0}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={4} sm={2}>
            <Box
              display={"flex"}
              justifyContent={{
                xs: "flex-end",
                sm: "center",
                md: "center",
                lg: "center",
              }}
              alignItems={"center"}
            >
              <img
                src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
                alt="logo"
                style={{ width: "200px", height: "auto" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={7} md={7} lg={7} xl={7}>
            <Box
              sx={{
                fontSize: { xs: "11px", sm: "12px", md: "13px", lg: "14px" },
                display: { md: "flex", lg: "flex", sm: "none", xs: "none" },
                justifyContent: {
                  md: "center",
                  lg: "center",
                  sm: "space-between",
                },
                alignItems: "center",
                height: "70px",
                flexWrap: "wrap",
                gap: { xs: "12px", sm: "13px", md: "14px", lg: "16px" },
              }}
            >
              <StyledLink
                underline="none"
                href="#"
                sx={{ color: "#292621", m: "0px 8px" }}
              >
                Home
              </StyledLink>
              <StyledLink
                underline="none"
                href="#"
                sx={{ color: "#292621", m: "0px 8px" }}
              >
                Men
              </StyledLink>
              <StyledLink
                underline="none"
                href="#"
                sx={{ color: "#292621", m: "0px 8px" }}
              >
                Women
              </StyledLink>
              <StyledLink
                underline="none"
                href="#"
                sx={{ color: "#292621", m: "0px 8px" }}
              >
                <Badge
                  badgeContent={"New"}
                  color="error"
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  Baby Collection
                </Badge>
              </StyledLink>
              <StyledLink
                href="#"
                onMouseEnter={handleMouseEnter}
                underline="none"
                sx={{
                  color: "#292621",
                  m: "0px 8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span>Pages</span>
                <KeyboardArrowDownIcon />
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMouseLeave}
                  MenuListProps={{
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                  }}
                >
                  <MenuItem onClick={handleMouseLeave}>Login</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>Cart</MenuItem>
                  <MenuItem onClick={handleMouseLeave}>
                    Product Details
                  </MenuItem>
                  <MenuItem onClick={handleMouseLeave}>
                    Product Checkout
                  </MenuItem>
                </Menu>
              </StyledLink>
              <StyledLink
                href="#"
                onMouseEnter={handleenter}
                underline="none"
                sx={{ color: "#292621", m: "0px 8px" }}
              >
                Blog
                <Menu
                  anchorEl={blog}
                  open={Boolean(blog)}
                  onClose={handleleave}
                  MenuListProps={{
                    onMouseEnter: handleenter,
                    onMouseLeave: handleleave,
                  }}
                >
                  <MenuItem onClick={handleleave}>Blog</MenuItem>
                  <MenuItem onClick={handleleave}>Blog Product</MenuItem>
                  <MenuItem onClick={handleleave}>Product Price</MenuItem>
                </Menu>
              </StyledLink>
              <StyledLink
                underline="none"
                href="#"
                sx={{ color: "#292621", m: "0px 8px" }}
              >
                Contact
              </StyledLink>
            </Box>
          </Grid>

          <Grid item xs={8} sm={3}>
            <Box
              display={{ sm: "flex", md: "flex", lg: "flex", xs: "none" }}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"35px"}
              fontSize={"30px"}
            >
              <Hoverlink>
                <SearchIcon />
              </Hoverlink>
              <Hoverlink>
                <GoPerson />
              </Hoverlink>
              <Badge badgeContent={"1"} color="error">
                <Hoverlink>
                  <HiOutlineShoppingCart />
                </Hoverlink>
              </Badge>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display={{ xs: "flex", sm: "flex", md: "none", lg: "none", xl: "none" }}
        // justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#4c4c4c",
          height: "7vh",
          padding: { xs: "10px", sm: "12px", md: "14px", lg: "20px" },
          position: "relative",
        }}
      >
        <Button
          onClick={HandleToogle}
          sx={{
            backgroundColor: "black",
            color: "white",
            position: "absolute",
            right: "1rem",
            zIndex: "101",
            "&:hover": { backgroundColor: "black" },
          }}
        >
          Menu
        </Button>
        {open && (
          <Box
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "100%",
              position: "relative",
              top: "60px",
              zIndex: "100",
            }}
          >
            <ul sx={{}}>
              <li>Menu1</li>
              <li>Menu2</li>
              <li>Menu3</li>
              <li>Menu4</li>
              <li>Menu5</li>
            </ul>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Secondsection;
