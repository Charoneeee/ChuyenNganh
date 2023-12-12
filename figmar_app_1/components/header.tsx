import { Grid, Typography, Link, Button } from "@mui/material";
import React from "react";
import Image from "next/image";
type Props = {};

const SectionHeader = () => {
  return (
    <Grid className="Header">
      <Typography
        style={{
          position: "absolute",
          left: "110px",
          top: "80px",
          fontWeight: "bolder",
          fontSize: "20px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        LOGO
      </Typography>
      <Grid
        container
        item
        xs={4}
        style={{
          position: "absolute",
          left: "893px",
          top: "85px",
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Grid item xs={3}>
          <Link underline="hover" color={"white"}>
            HOME
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link underline="hover" color={"white"}>
            PORTFOLIO
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link underline="hover" color={"white"}>
            ABOUT
          </Link>
        </Grid>
        <Grid item xs={3}>
          <Link underline="hover" color={"white"}>
            CONTACT
          </Link>
        </Grid>
      </Grid>
      <Typography
        style={{
          position: "absolute",
          left: "110px",
          top: "253px",
          fontSize: "24px",
          width: "650px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Image
        alt="HeaderRight"
        src="/HeaderRight.jpg" // Update the path to your image
        layout="fixed"
        width={490}
        height={530}
        style={{
          position: "absolute",
          top: "215px",
          left: "1028px",
        }}
      />
      <Image
        alt="HeaderLeft"
        src="/HeaderLeft.png" // Update the path to your image
        layout="fixed"
        width={520}
        height={540}
        style={{
          position: "absolute",
          top: "544px",
          right: "1000px",
        }}
      />
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
    </Grid>
  );
};

export default SectionHeader;
