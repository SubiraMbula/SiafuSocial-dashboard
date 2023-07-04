import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import SidebarWithHeader from "./components/sidebar"
import BasicStatistics from "./components/stats"
import Prinipal from "./components/principals"


export const App = () => (
  <ChakraProvider theme={theme}>
    < SidebarWithHeader children={undefined} />
    < BasicStatistics />
    < Prinipal />
  </ChakraProvider>
)
