import { Box, SimpleGrid } from "@chakra-ui/react";
import { Progress } from '@chakra-ui/react'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

export default function BasicStatistics(){
    return (
        <SimpleGrid mt={"-600px"} ml={"250px"} p={"10px"} columns={4} spacing={5} minChildWidth={"200px"}>
          <Box h="200px" border="1px solid">
          <StatGroup pl={"10px"}>
          <Stat>
            <StatLabel>RELATIONSHIPS</StatLabel>
            <StatNumber>76,000</StatNumber>
            <StatNumber>75%</StatNumber><br />
            <StatHelpText>
              <StatArrow type='increase' />
              7%
            </StatHelpText>
          </Stat>

        <Stat>
          <StatHelpText mt={"97%"}>
            <StatArrow type='decrease' />
             0%
          </StatHelpText>
         </Stat>
      </StatGroup>
          <Progress value={75} mt={"10px"} p={"2px"}/>
          </Box>
          <Box h="200px" border="1px solid">
          <StatGroup pl={"10px"}>
          <Stat>
            <StatLabel>REVENUE</StatLabel>
            <StatNumber>4,300</StatNumber><br />
            <StatHelpText>
              <StatArrow type='increase' />
              8%
            </StatHelpText>
          </Stat>

        <Stat>
          <StatHelpText mt={"77px"}>
            <StatArrow type='decrease' />
             0%
          </StatHelpText>
         </Stat>
      </StatGroup>
          </Box>
          <Box h="200px" border="1px solid">
          <StatGroup pl={"10px"}>
          <Stat>
            <StatLabel>NEW RELATIONSHIPS</StatLabel>
            <StatNumber>6,782</StatNumber><br />
            <StatHelpText>
              <StatArrow type='increase' />
              0%
            </StatHelpText>
          </Stat>

        <Stat>
          <StatHelpText mt={"87%"}>
            <StatArrow type='decrease' />
             0%
          </StatHelpText>
         </Stat>
      </StatGroup>
          </Box>
          <Box h="200px" border="1px solid">
          <StatGroup pl={"10px"}>
          <Stat>
            <StatLabel>SIAFU UNIVERSE</StatLabel>
            <StatNumber>2,986</StatNumber><br />
            <StatHelpText>
              <StatArrow type='increase' />
              4%
            </StatHelpText>
          </Stat>

        <Stat>
          <StatHelpText mt={"77px"}>
            <StatArrow type='decrease' />
             0%
          </StatHelpText>
         </Stat>
      </StatGroup>
          </Box>

          <Box h="100px" border="1px solid">
          <Stat p={"10px"}>
            <StatLabel>1678 Active Sku Universe</StatLabel>
            <StatNumber>824</StatNumber>
            <StatHelpText>ordered today</StatHelpText>
          </Stat>
          </Box>
          <Box h="100px" border="1px solid">
          <Stat p={"10px"}>
            <StatLabel>1478 Orders Placed Today</StatLabel>
            <StatNumber>698 </StatNumber>
            <StatHelpText>Shipped</StatHelpText>
          </Stat>
          </Box>
          <Box h="100px" border="1px solid">
          <Stat p={"10px"}>
            <StatLabel>1623 Insights & Surveys</StatLabel>
            <StatNumber>450</StatNumber>
            <StatHelpText>Today</StatHelpText>
          </Stat>
          </Box>
          <Box h="100px" border="1px solid">
          <Stat p={"10px"}>
            <StatLabel>18,000 Interations this week</StatLabel>
            <StatNumber>4,500</StatNumber>
            <StatHelpText>Today</StatHelpText>
          </Stat>
          </Box>
      
        </SimpleGrid>
    )
}