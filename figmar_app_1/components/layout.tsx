import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  // return (
  //   <html lang="en">
  //     <body>{children}</body>
  //   </html>
  // );
  return (
    <main>
      <Stack alignItems={"center"}>
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
        {children}
        <Box>This is footer</Box>
      </Stack>
    </main>
  );
}
