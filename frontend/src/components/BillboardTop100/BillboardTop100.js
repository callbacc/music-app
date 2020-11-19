import React from "react";
import { getBillboardTop100 } from "../../functions";
import BillboardItem from "./BillboardTop100Item/BillboardTop100Item";
import { Grid, Typography } from "@material-ui/core";

import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

function BillboardTop100({ setSearchTerm }) {
  const [billboard, setBillboard] = React.useState([]);

  const [loading, setLoading] = React.useState(true);
  const dataLoaded = () => {
    setLoading(false);
  };

  React.useEffect(() => {
    (async () => {
      const data = await getBillboardTop100();
      setBillboard(data);
    })();
  }, []);

  return (
    <>
      <Typography align="center" variant="h1" gutterBottom>
        Billboard Top 100
      </Typography>

      <Grid align="center" style={{ display: loading ? "block" : "none" }}>
        <LoadingAnimation size="600px" speed="5" />
      </Grid>

      <Grid container direction="column" spacing={1}>
        {billboard.data?.map((item) => {
          return (
            <Grid item key={item.position} onLoad={dataLoaded}>
              <BillboardItem {...{ item, setSearchTerm }} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default BillboardTop100;
