import { Box, Stack } from "@mui/material";
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
        <Box>This Header</Box>
        {children}
        <Box>This Footer</Box>
      </Stack>
    </main>
  );
}
