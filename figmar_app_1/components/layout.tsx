import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { title } from "process";

interface MenuItemObject {
  title: string;
  url: string;
}
export default function Layout({ children }: { children: React.ReactNode }) {
  const menu: MenuItemObject[] = [
    { title: "home", url: "/detail/home" },
    { title: "about", url: "/detail/about/contact" },
    { title: "portfolio", url: "/detail/portfolio" },
  ];

  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <main>
      <AppBar>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>This header</Typography>
          <Stack direction="row" gap={4}>
            {menu.map((item, index) => (
              <Link
                key={item.url}
                href={item.url}
                style={{ color: `${currentMenu == index ? "red" : "gray"}` }}
                onClick={() => setCurrentMenu(index)}
              >
                {item.title}
              </Link>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Stack p={2}>
        {/* <TextField variant="outlined" placeholder="Search" size="small" /> */}
        <Box>{children}</Box>
      </Stack>

      <Toolbar />
      {/* <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>This footer</Toolbar>
      </AppBar> */}
    </main>
  );
}
