import React, { useEffect, useState } from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";

// List of customer testimonials
const testimonials = [
  {
    id: 1,
    feedback:
      "Attracting customers in a competitive market can feel like an uphill battle. So, how do brands stand out from the competition? One powerful tool in today’s marketplace is customer testimonials..",
    name: "John Doe",
    designation: "CEO, Company XYZ",
    image:
      "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/founder-img.png",
  },
  {
    id: 2,
    feedback:
      "Not sure how to ask for customer testimonials or where you should display them for maximum effect? Don’t worry – we have you covered with all of the essential details about customer testimonials, below.",
    name: "Jane Smith",
    designation: "Marketing Manager, ABC Corp",
    image:
      "https://www.researchgate.net/publication/342302524/figure/fig5/AS:903981605875712@1592537418051/RGB-lena-image-reconstructed-from-randomly-chosen-2-of-pixel-values-using-EED-left-or.ppm",
  },
  {
    id: 3,
    feedback:
      "These stats highlight the importance of online reviews and testimonials. Good testimonials help you build (online) credibility, and customers will get the social proof they need to trust you.",
    name: "Mike Johnson",
    designation: "CTO, Tech Ventures",
    image:
      "https://www.researchgate.net/profile/Pascal-Peter/publication/281690533/figure/fig3/AS:809171406581760@1569932905157/Reconstruction-of-scenes-with-quick-movement-based-on-different-initialisations.ppm",
  },
];

const CustomerT = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic carousel that changes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "400px",
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#F3EAD8",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Jost', sans-serif",
          marginBottom: "auto",
          color:"#292621",
          fontWeight:'500',
          fontSize:{xs:'36px',sm:'56px',md:'66px'}
        }}
      >
        Customer Testimonial
      </Typography>

      <Box
        sx={{
          width: "80%",
          maxWidth: "800px",
          transition: "all 0.5s ease-in-out",
        }}
      >
        {/* Feedback text */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            marginBottom: "30px",
            color:'#292621',
            fontFamily: "'Jost', sans-serif",
            
          }}
        >
          {testimonials[currentIndex].feedback}
        </Typography>

        {/* Customer image and info */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt={testimonials[currentIndex].name}
            src={testimonials[currentIndex].image}
            sx={{ width: "60px", height: "60px" }}
          />
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{ fontFamily: "'Jost', sans-serif", fontWeight: "bold" }}
            >
              {testimonials[currentIndex].name}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: "'Jost', sans-serif", color: "gray" }}
            >
              {testimonials[currentIndex].designation}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomerT;
