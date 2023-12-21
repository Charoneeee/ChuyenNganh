import { Typography, Link, Button, Stack, Box, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
type Props = {};

const SectionHeader = () => {
  return (
    <Box pb={"100px"} className="Header">
      <Box p={"50px"}>
        <Stack direction="row" spacing={95}>
          <Typography
            style={{
              fontWeight: "bolder",
              fontSize: "20px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            LOGO
          </Typography>
          <Stack
            direction="row"
            spacing={7}
            sx={{
              fontSize: "20px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <Link underline="hover" color={"white"}>
              HOME
            </Link>
            <Link underline="hover" color={"white"}>
              PORTFOLIO
            </Link>
            <Link underline="hover" color={"white"}>
              ABOUT
            </Link>
            <Link underline="hover" color={"white"}>
              CONTACT
            </Link>
          </Stack>
        </Stack>
      </Box>
      <Grid pt={"100px"} container spacing={2}>
        <Grid xs={8}>
          <Box>
            <Typography
              sx={{
                padding: "60px",
                fontSize: "24px",
                width: "650px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
        <Grid xs={4}>
          <Image
            alt="HeaderRight"
            src="/HeaderRight.jpg" // Update the path to your image
            layout="fixed"
            width={520}
            height={530}
          />
        </Grid>
        <Grid xs={5.3}>
          <Image
            alt="HeaderLeft"
            src="/HeaderLeft.png" // Update the path to your image
            layout="fixed"
            width={510}
            height={540}
          />
        </Grid>
        <Grid pt={"400px"} textAlign={"center"} xs={6.7}>
          <Button
            variant="contained"
            sx={{
              fontSize: "38px",
              fontFamily: "Inter, sans-serif",
              backgroundColor: "white",
              color: "black",
            }}
          >
            Get a Quote
          </Button>
        </Grid>
      </Grid>
      <Typography
        style={{
          position: "absolute",
          left: "165px",
          top: "275px",
          fontSize: "309px",
          fontFamily: "Playfair Display, serif",
          fontWeight: "bold",
        }}
      >
        Creative
      </Typography>
      <Typography
        style={{
          position: "absolute",
          left: "305px",
          top: "524px",
          fontSize: "285px",
          fontFamily: "Playfair Display, serif",
          fontWeight: "bold",
        }}
      >
        Design
      </Typography>
    </Box>
  );
};

export default SectionHeader;
