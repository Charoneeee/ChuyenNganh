import { Typography, ImageList, ImageListItem, Box } from "@mui/material";
import React from "react";

type Props = {};

const itemData = [
  {
    img: "Images/Rectangle1.jpg",
    title: "Bed",
  },
  {
    img: "Images/Rectangle4.png",
    title: "Books",
  },
  {
    img: "Images/Rectangle5.png",
    title: "Sink",
  },
  {
    img: "Images/Rectangle2.png",
    title: "Kitchen",
  },
  {
    img: "Images/Rectangle3.png",
    title: "Blinds",
  },
  {
    img: "Images/Rectangle6.png",
    title: "Chairs",
  },
];

const SecttionPortfolio = () => {
  return (
    <Box className="Portfolio">
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "81px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Portfolio
      </Typography>
      <ImageList
        variant="masonry"
        cols={2}
        gap={100}
        sx={{ paddingTop: "50px", paddingLeft: "55px", width: "90%" }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default SecttionPortfolio;
