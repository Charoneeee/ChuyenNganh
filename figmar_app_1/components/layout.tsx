import { Box, Stack } from "@mui/material";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack alignItems={"center"}>
      <Box>Đây là Header</Box>
      {children}
      <Box>Đây là Footer</Box>
    </Stack>
  );
}
