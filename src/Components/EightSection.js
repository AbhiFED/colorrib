import React, { useEffect, useState } from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const sliderImages = [
  {
    id: 1,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest5.jpg",
    alt: "Image 1",
    label: "Cashmere Tank + Bag",
    hiddenContent: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 2,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest6.jpg",
    alt: "Image 2",
    label: "Cashmere Tank + Bag",
    hiddenText: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 3,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg",
    alt: "Image 3",
    label: " Cashmere Tank + Bag",
    hiddenText: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 4,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest8.jpg",
    alt: "Image 3",
    label: "Cashmere Tank + Bag ",
    hiddenText: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
];
const InformationSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   automatic image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previndex) =>
        previndex === sliderImages.lenghth - 1 ? 0 : previndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: { xs: "10px", sm: "10px 64px", md: "10px 114px" },
            //   backgroundColor: "red",
            padding: "5px 25px",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'jost' , sans-serif",
                padding: "25px 10px",
                fontWeight: "300",
                color: "#292621",
                fontSize: { xs: "26px", sm: "36px", md: "46px", lg: "56px" },
              }}
            >
              You may Like
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            justifyContent: "center",
            maxWidth: "100%",
            // backgroundColor: "lightgrey",

            position: "relative",
            marginLeft: { xs: "6px", sm: "10px", md: "40px" },
            marginRight: { xs: "6px", sm: "10px", md: "40px" },
            "&:hover .section": {
              opacity: 1,
            },
          }}
        >
          <Box
            sx={{
              className: "section",
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-evenly",
              transform: `translate (-${currentIndex * 100}%)`,
              animation: "transform 0.5s ease-in-out",
            }}
          >
            {sliderImages.map((slides, index) => (
              <Box
                key={slides.id}
                sx={{
                  position: "relative",
                  // minWidth: "100%",
                  // height: "400px",
                  margin: "10px 5px",
                  overflow: "hidden",
                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                  //   "&:hover .overlayText": {
                  //     opacity: 1,
                  //   },
                }}
              >
                <img
                  src={slides.src}
                  alt={slides.alt}
                  style={{
                    width: "100%",
                    height: "350px",
                    transition: "transform 0.8s ease-in-out",
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    // position: "absolute",
                    // bottom: 0,
                    // left: 0,
                    // right: 0,
                    // backgroundColor: "rgba(0, 0, 0, 0)",
                    // color: "White",
                    // fontSize: "24px",
                    // display: "inline-block",
                    padding: "10px",
                    textAlign: "center",
                    // opacity: 1,
                    // transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "'jost' , sans-serif" }}
                  >
                    {slides.label}
                  </Typography>
                  <span style={{ fontFamily: "'jost' , sans-serif" }}>
                    {slides.saleprice}
                  </span>
                  &nbsp;&nbsp; &nbsp;
                  <span
                    style={{
                      fontFamily: "'jost' , sans-serif",
                      textDecoration: "line-through",
                      color: "grey",
                    }}
                  >
                    {slides.Mrp}
                  </span>
                </Box>

                <Stack
                  direction="row"
                  className="section"
                  sx={{
                    position: "absolute",
                    justifyContent: "center",
                    bottom: "120px",

                    left: "0",
                    right: "0",
                    // display: "flex",
                    // gap: "30px",

                    opacity: "0",
                    backgroundColor: "white",
                    transition: "opacity 0.3s ease-in-out",
                    margin: "0px 110px",
                    // padding: "5px 0px",
                    // border: "2px solid black",
                    "&:hover": {
                      opacity: "1",
                    },
                  }}
                >
                  {" "}
                  <Link href="#">
                    <ShoppingBasketIcon
                      sx={{
                        color: "black",
                        fontSize: "35px",
                        // margin:'10px 0px 10px 20px',
                        cursor: "pointer",
                        "&:hover": {
                          // border:'2px solid red',
                          color: "white",
                          backgroundColor: "red",
                        },
                      }}
                    />
                  </Link>
                  <Link href="#">
                    <SearchIcon
                      sx={{
                        color: "Black",
                        fontSize: "35px",
                        cursor: "pointer",
                        "&:hover": {
                          // border:'2px solid red',
                          color: "white",
                          backgroundColor: "red",
                        },
                      }}
                    />
                  </Link>
                  <Link href="#">
                    <FavoriteBorderIcon
                      sx={{
                        color: "Black",
                        fontSize: "35px",
                        cursor: "pointer",
                        "&:hover": {
                          // border:'2px solid red',
                          color: "white",
                          backgroundColor: "red",
                        },
                      }}
                    />
                  </Link>
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InformationSlider;
