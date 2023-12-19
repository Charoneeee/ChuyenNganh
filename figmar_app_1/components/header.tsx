import { Typography, Link, Button, Stack, Box, Grid } from "@mui/material";
import React from "react";
import Image from "next/image";
type Props = {};

const SectionHeader = () => {
  return (
    <Box className="Header">
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
      <Box>
        <Typography
          sx={{
            padding: "50px",
            paddingTop: "120px",
            fontSize: "24px",
            width: "650px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid xs={7.8} pt={"180px"}>
          <Image
            alt="HeaderLeft"
            src="/HeaderLeft.png" // Update the path to your image
            layout="fixed"
            width={540}
            height={570}
          />
        </Grid>
        <Grid xs={4.2}>
          <Image
            alt="HeaderRight"
            src="/HeaderRight.jpg" // Update the path to your image
            layout="fixed"
            width={520}
            height={530}
          />
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
      <Button
        variant="contained"
        style={{
          position: "absolute",
          left: "770px",
          top: "978px",
          fontSize: "38px",
          fontFamily: "Inter, sans-serif",
          backgroundColor: "white",
          color: "black",
        }}
      >
        Get a Quote
      </Button>
    </Box>
  );
};

export default SectionHeader;
