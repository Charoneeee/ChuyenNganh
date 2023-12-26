import { Box, Stack } from "@mui/material";
import React from "react";

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack alignItems={"center"}>
      <Box>Header của Nested Layout</Box>
      {children}
      <Box>Footer của Nested Layout</Box>
    </Stack>
  );
}
