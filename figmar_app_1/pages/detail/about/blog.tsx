import type { ReactElement } from "react";
import Layout from "@/components/layout";
import { NextPageWithLayout } from "../../_app";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AboutNestedLayout from "@/components/AboutNestedLayout";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const BlogDetail: NextPageWithLayout = () => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          width: "757px",
          height: "309px",
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
    </>
  );
};

BlogDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <AboutNestedLayout>{page}</AboutNestedLayout>
    </Layout>
  );
};

export default BlogDetail;
