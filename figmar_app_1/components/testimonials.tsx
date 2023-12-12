import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type Props = {};

const SectionTestimonials = () => {
  return (
    <Grid className="Testimonials">
      <Typography
        style={{
          position: "absolute",
          left: "529px",
          top: "6000px",
          fontSize: "81px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Testimonials
      </Typography>
      <Typography
        style={{
          position: "absolute",
          left: "203px",
          top: "6150px",
          fontSize: "22px",
          width: "1080px",
          textAlign: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Typography>
      <Card
        sx={{
          display: "flex",
          width: "757px",
          height: "309px",
          position: "absolute",
          top: "6400px",
          left: "193px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "309px", height: "327px" }}
          image="Person1.png"
          alt="Live from space album cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(24, 24, 24, 1)",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              style={{
                fontSize: "44px",
                width: "417px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "bolder",
                lineHeight: "1",
                color: "white",
              }}
            >
              “Amazing Team with Lorem Ipsum”
            </Typography>
            <Typography
              style={{
                fontSize: "15px",
                width: "285px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "lighter",
                color: "white",
                marginTop: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet,
            </Typography>
            <Typography
              style={{
                fontSize: "16px",
                width: "113px",
                fontFamily: "Inter, sans-serif",
                color: "white",
                marginTop: "49px",
              }}
            >
              See full review
            </Typography>
            <IconButton
              aria-label="See more"
              style={{
                color: "white",
                marginLeft: "105px",
                marginTop: "-45px",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          display: "flex",
          width: "757px",
          height: "309px",
          position: "absolute",
          top: "6780px",
          left: "193px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgba(24, 24, 24, 1)",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              style={{
                fontSize: "44px",
                width: "417px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "bolder",
                lineHeight: "1",
                color: "white",
              }}
            >
              “Big Dreams for lorem ipsum”
            </Typography>
            <Typography
              style={{
                fontSize: "15px",
                width: "285px",
                fontFamily: "Inter, sans-serif",
                fontWeight: "lighter",
                color: "white",
                marginTop: "30px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet,
            </Typography>
            <Typography
              style={{
                fontSize: "16px",
                width: "113px",
                fontFamily: "Inter, sans-serif",
                color: "white",
                marginTop: "49px",
              }}
            >
              See full review
            </Typography>
            <IconButton
              aria-label="See more"
              style={{
                color: "white",
                marginLeft: "105px",
                marginTop: "-45px",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: "309px", height: "327px" }}
          image="Person2.png"
          alt="Live from space album cover"
        />
      </Card>
      <Card
        sx={{
          maxWidth: "309px",
          maxHeight: "690px",
          position: "absolute",
          top: "6400px",
          left: "1005px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "309px", height: "327px" }}
          image="Person3.png"
          alt="green iguana"
        />
        <CardContent style={{ backgroundColor: "rgba(24, 24, 24, 1)" }}>
          <Typography
            style={{
              fontSize: "44px",
              width: "300px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bolder",
              lineHeight: "1",
              color: "white",
            }}
          >
            “Good Dreams for lorem ipsum”
          </Typography>
          <Typography
            style={{
              fontSize: "15px",
              width: "220px",
              fontFamily: "Inter, sans-serif",
              fontWeight: "lighter",
              color: "white",
              marginTop: "30px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
            amet,
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              width: "113px",
              fontFamily: "Inter, sans-serif",
              color: "white",
              marginTop: "30px",
            }}
          >
            See full review
          </Typography>
          <IconButton
            aria-label="See more"
            style={{
              color: "white",
              marginLeft: "105px",
              marginTop: "-45px",
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </CardContent>
      </Card>
      <Button
        variant="outlined"
        style={{
          position: "absolute",
          left: "641px",
          top: "7200px",
          fontSize: "38px",
          fontFamily: "Inter, sans-serif",
          color: "white",
        }}
      >
        See all review
      </Button>
    </Grid>
  );
};

export default SectionTestimonials;
