import type { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import { Box, Stack, Typography } from "@mui/material";
import AboutLayout from "@/components/AboutLayout";
import Image from "next/image";

const PortfolioDetail: NextPageWithLayout = () => {
  return (
    <>
      <Box className="About">
        <Stack direction="row" spacing={10}>
          <Typography sx={{ width: "17%" }}>
            We create stunning Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.We create stunning Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. After 10 years of experience Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.We create stunning
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.We create
            stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Image
            alt="About"
            src="/About.png"
            layout="fixed"
            width={330}
            height={440}
          />
        </Stack>
      </Box>
    </>
  );
};

PortfolioDetail.getLayout = function getLayout(page: ReactElement) {
  return <AboutLayout>{page}</AboutLayout>;
};

export default PortfolioDetail;
