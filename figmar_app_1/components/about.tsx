import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

type Props = {};

const SectionAbout = () => {
  return (
    <Grid className="About">
      <Typography
        style={{
          position: "absolute",
          left: "660px",
          top: "4637px",
          fontSize: "81px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        About
      </Typography>
      <Typography
        style={{
          position: "absolute",
          left: "116px",
          top: "4900px",
          fontSize: "40px",
          width: "600px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.We create stunning Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. After 10 years of experience Lorem ipsum dolor sit
        amet, consectetur adipiscing elit.We create stunning Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.We create stunning Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Image
        alt="About"
        src="/About.png" // Update the path to your image
        layout="fixed"
        width={630}
        height={940}
        style={{
          position: "absolute",
          top: "4816px",
          left: "821px",
        }}
      />
    </Grid>
  );
};

export default SectionAbout;
