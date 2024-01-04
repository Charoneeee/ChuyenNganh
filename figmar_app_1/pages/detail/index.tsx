import type { ReactElement } from "react";
import Layout from "@/components/layout";
import { NextPageWithLayout } from "../_app";
import { Box, Button } from "@mui/material";

const Detail: NextPageWithLayout = () => {
  return (
    <Box>
      <p>hello world</p>
    </Box>
  );
};

Detail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Detail;
