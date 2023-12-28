import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import { Box, Switch } from "@mui/material";
import Layout from "@/components/layout";
import Layout1 from "@/components/layout1";

import { useState } from "react";
import Layout2 from "@/components/layout2";

const Detail: NextPageWithLayout = () => {
  const [isSwitchOn, setSwitchOn] = useState(false);

  const handleSwitchToggle = () => {
    setSwitchOn((prev) => !prev);
  };

  return (
    <>
      <Switch checked={isSwitchOn} onChange={handleSwitchToggle} />
      {isSwitchOn ? (
        <Layout1>
          <Box>On</Box>
        </Layout1>
      ) : (
        <Layout2>
          <Box>Off</Box>
        </Layout2>
      )}
    </>
  );
};

Detail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Detail;
