import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

type Props = {};

const SectionContact = () => {
  return (
    <Grid className="Contact" sx={{ paddingBottom: "20px" }}>
      <Typography
        style={{
          position: "absolute",
          left: "620px",
          top: "7550px",
          fontSize: "81px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Contact
      </Typography>
      <Grid
        style={{
          position: "absolute",
          left: "329px",
          top: "7700px",
          fontSize: "81px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        <Typography
          style={{
            fontSize: "55px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Name
        </Typography>
        <TextField
          id="filled-textarea"
          placeholder="John Doe"
          multiline
          variant="filled"
          style={{
            width: "855px",
            borderBottom: "groove",
          }}
          InputProps={{
            style: {
              color: "white", // Đặt màu chữ thành màu trắng
              fontSize: "25px",
            },
          }}
        />
      </Grid>
      <Grid
        style={{
          position: "absolute",
          left: "329px",
          top: "7900px",
          fontSize: "81px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        <Typography
          style={{
            fontSize: "55px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Email
        </Typography>
        <TextField
          id="filled-textarea"
          placeholder="jhon@email.com"
          multiline
          variant="filled"
          style={{
            width: "855px",
            borderBottom: "groove",
          }}
          InputProps={{
            style: {
              color: "white", // Đặt màu chữ thành màu trắng
              fontSize: "25px",
            },
          }}
        />
      </Grid>
      <Grid
        style={{
          position: "absolute",
          left: "329px",
          top: "8100px",
          fontSize: "81px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        <Typography
          style={{
            fontSize: "55px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Message
        </Typography>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="Enter your message here..."
          variant="standard"
          style={{
            width: "855px",
            borderBottom: "groove",
          }}
          InputProps={{
            style: {
              color: "white", // Đặt màu chữ thành màu trắng
              fontSize: "25px",
            },
          }}
        />
      </Grid>
      <Button
        variant="contained"
        style={{
          position: "absolute",
          left: "327px",
          top: "8450px",
          fontSize: "38px",
          fontFamily: "Inter, sans-serif",
          backgroundColor: "white",
          color: "black",
        }}
      >
        Send
      </Button>
    </Grid>
  );
};

export default SectionContact;
