import { Box, Stack } from "@mui/material";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Stack alignItems={"center"}>
        <Box>This Header</Box>
        {children}
        <Box bgcolor={"red"}>This Footer</Box>
      </Stack>
    </main>
  );
}
