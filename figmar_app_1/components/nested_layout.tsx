import { Box, Stack } from "@mui/material";
import React from "react";

export default function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Stack alignItems={"center"}>{children}</Stack>;
}
