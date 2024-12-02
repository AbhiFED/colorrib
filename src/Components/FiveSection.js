import React from "react";
import { Box, Typography, Link } from "@mui/material";

const images = [
  {
    id: 1,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items1.jpg",
    alt: "Image 1",
    label: "Men's Fashion",
    hiddenText: "Shop Now",
  },
  {
    id: 2,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items2.jpg",
    alt: "Image 2",
    label: "Women's Fashion",
    hiddenText: "Shop Now",
  },
  {
    id: 3,
    src: "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items3.jpg",
    alt: "Image 3",
    label: "Baby Fashion",
    hiddenText: "Shop Now",
  },
];

const ImageList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap:{xs:'wrap',sm:'nowrap',md:'nowrap',lg:'nowrap',xl:'nowrap'},
        marginLeft: { xs: "6px", sm: "10px", md: "40px" },
        marginRight: { xs: "6px", sm: "10px", md: "40px" },
      }}
    >
      {images.map((image) => (
        <Box
          key={image.id}
          sx={{
            position: "relative",
            display: "inline-block",
            width: { xs: "100%", sm: "48%", md: "30%" },
            height: { xs: "250px", sm: "300px", md: "400px" },
            margin: { xs: "10px 10px", sm: "10px 15px" },
            overflow: "hidden",
            "&:hover img": {
              transform: "scale(1.1)",
            },
            "&:hover .overlayText": {
              opacity: 1,
            },
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: "100%",
              height: "100%",
              transition: "transform 0.3s ease-in-out",
              objectFit: "cover",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0)",
              color: "White",
              fontSize: { xs: "16px", sm: "20px", md: "24px" },
              display: "inline-block",
              padding: { xs: "5px", md: "20px" },
              textAlign: "center",
              opacity: 1,
              transition: "opacity 0.3s ease-in-out",
            }}
          >
            <Typography sx={{ fontFamily: "'jost' , sans-serif" }}>
              {image.label}
            </Typography>
            <Link
              href="#"
              className="overlayText"
              variant="body2"
              sx={{
                opacity: 0,
                color: "#CEBD9C",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                fontFamily: "'jost' , sans-serif",
                transition: "opacity 0.3s ease-in-out",
                "&:hover  ": { opacity: 0 },
              }}
            >
              {image.hiddenText}
            </Link>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ImageList;
