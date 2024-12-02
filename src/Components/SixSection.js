import React, { useEffect, useState } from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const sliderImages = [
  {
    id: 1,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest1.jpg",
    alt: "Image 1",
    label: "Cashmere Tank + Bag",
    hiddenContent: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 2,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest2.jpg",
    alt: "Image 2",
    label: "Cashmere Tank + Bag",
    hiddenText: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 3,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest3.jpg",
    alt: "Image 3",
    label: " Cashmere Tank + Bag",
    hiddenText: "Shop Now",
    Mrp: "$120.00",
    saleprice: "$98.00",
  },
  {
    id: 4,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest4.jpg",
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
      <Box
        sx={{ padding: { xs: "12px 12px", sm: "10px 40px", md: "10px 4px" } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: "100%",
            // justifyContent: "space-around",
            justifyContent: {
              xs: "center",
              sm: "space-around",
              md: "space-evenly",
              lg: "space-around",
            },
            margin: { xs: "10px", sm: "10px 10px", md: "10px 4px" },
            // backgroundColor: "red",
            padding: "5px 10px",
            // borderBottom: "1px solid black",
            overflow: "hidden",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'jost' , sans-serif",
                padding: "25px 10px",
                fontSize: { xs: "15px", sm: "20px", md: "30px" },
              }}
            >
              Trending This Week
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "5px", sm: "8px", md: "12px", lg: "18px" },
              fontSize: { xs: "12px", sm: "16px", md: "18px" },
              boxSizing: "border-box",
            }}
          >
            <Link
              href="#"
              sx={{
                padding: "35px 10px",
                textDecoration: "none",
                color: "black",
                // borderBottom: "4px solid transparent",
                "&:hover": {
                  borderBottom: "4px solid red",
                },
              }}
            >
              Men
            </Link>
            <Link
              href="#"
              sx={{
                padding: "35px 10px",
                textDecoration: "none",
                color: "black",
                "&:hover": {
                  borderBottom: "4px solid red",
                },
              }}
            >
              Women
            </Link>
            <Link
              href="#"
              sx={{
                padding: "35px 10px",
                textDecoration: "none",
                color: "black",
                "&:hover": {
                  borderBottom: "4px solid red",
                },
              }}
            >
              Baby
            </Link>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                padding: "35px 10px",
                color: "black",
                "&:hover": {
                  borderBottom: "4px solid red",
                },
              }}
            >
              Fashion
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            justifyContent: "space-between",
            maxWidth: "100%",
            gap: "18",

            position: "relative",
            margin: { xs: "10px", sm: "10px 10px", md: "10px 4px" },
            // backgroundColor: "red",
            padding: "5px 25px",
          }}
        >
          <Box
            sx={{
              className: "section",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              transform: `translate (-${currentIndex * 100}%)`,
              animation: "transform 0.5s ease-in-out",
            }}
          >
            {sliderImages.map((slides, index) => (
              <Box
                key={slides.id}
                sx={{
                  position: "relative",

                  "&:hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <img
                  src={slides.src}
                  alt={slides.alt}
                  style={{
                    width: "100%",
                    height: {xs:'200px',sm:'320px',md:'350px',lg:'350px'},
                    transition: "transform 0.8s ease-in-out",
                    objectFit: "cover",
                  }}
                />

                <Box
                  sx={{
                    padding: "10px",
                    textAlign: "center",
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
                  <ShoppingBasketIcon
                    sx={{
                      color: "Black",
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
