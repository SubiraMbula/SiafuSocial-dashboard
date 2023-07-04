import { Grid, GridItem } from "@chakra-ui/react";
import SidebarWithHeader from "../components/sidebar";
import BasicStatistics from "../components/stats";
// import BarChart from "../components/barchart";

export default function Rootlayout(){
  return(
    <Grid templateColumns="repeat (6, 1fr)">
      <GridItem
      colSpan={1}
      >
        <SidebarWithHeader children={undefined} />
      </GridItem>
      <GridItem
      as={"main"}
      colSpan={5}
      p={"40px"}
      >
        <BasicStatistics />
      </GridItem>
    </Grid>
  )
}