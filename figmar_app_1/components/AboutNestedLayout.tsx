import { Box, Stack } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

interface MenuItemObject {
  title: string;
  url: string;
}

export default function AboutNestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu: MenuItemObject[] = [
    { title: "contact", url: "/detail/about/contact" },
    { title: "blog", url: "/detail/about/blog" },
  ];

  const [currentMenu, setCurrentMenu] = useState(0);

  return (
    <main>
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
      <Box>{children}</Box>
    </main>
  );
}
