import type { ReactElement } from "react";
import Layout from "@/components/layout";
import { NextPageWithLayout } from "../../_app";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import AboutNestedLayout from "@/components/AboutNestedLayout";

const ContactDetail: NextPageWithLayout = () => {
  return (
    <>
      <Box className="Contact" sx={{ paddingBottom: "20px" }}>
        <Grid>
          <Typography
            style={{
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
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid>
          <Typography
            style={{
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
                color: "white",
              },
            }}
          />
        </Grid>
        <Grid>
          <Typography
            style={{
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
                color: "white",
              },
            }}
          />
        </Grid>
        <Button
          variant="contained"
          style={{
            fontFamily: "Inter, sans-serif",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Send
        </Button>
      </Box>
    </>
  );
};

ContactDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AboutNestedLayout>{page}</AboutNestedLayout>
    </Layout>
  );
};

export default ContactDetail;
