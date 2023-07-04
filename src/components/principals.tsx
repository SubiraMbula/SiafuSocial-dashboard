import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    SimpleGrid,
    Progress,
  } from '@chakra-ui/react'
  import { Heading } from '@chakra-ui/react'


  export default function Prinipal(){
    return(
        
    <SimpleGrid mt={"10px"} ml={"250px"} p={"10px"} columns={2} spacing={5} minChildWidth={"400px"} pt={"20px"}>
        
        <Box h="400px" border="1px solid">
        <TableContainer >
        <Heading as='h4' size='md'>
            Our Active principals
            </Heading><br />
            <Table variant='simple'>
            <Thead>
                <Tr>
                    <Th>NAME</Th>
                    <Th>LISTINGS</Th>
                    <Th>REORDERS</Th>
                    <Th>HIT RATE(AVG)</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Amos Dairy (KE) </Td>
                    <Td>4,896</Td>
                    <Td>3,654</Td>
                    <Td>82.54%</Td>
                </Tr>
                <Tr>
                    <Td>Marsyetu </Td>
                    <Td> 3,652</Td>
                    <Td>3,215</Td>
                    <Td>76.29%</Td>
                </Tr>
                <Tr>
                    <Td>Total Kenya</Td>
                    <Td>	3,256</Td>
                    <Td>2,865</Td>
                    <Td>72.65%</Td>
                </Tr>
      
                <Tr>
                    <Td>Zen Dairy</Td>
                    <Td>986</Td>
                    <Td>865</Td>
                    <Td>44.89%</Td>
                </Tr>
                <Tr>
                    <Td>Sangare Dairy</Td>
                    <Td>	912</Td>
                    <Td>822</Td>
                    <Td>41.12%</Td>
                </Tr>
                <Tr>
                    <Td>Yaleo</Td>
                    <Td>855</Td>
                    <Td>798</Td>
                    <Td>32.65%</Td>
                </Tr>
            </Tbody>
        </Table>
        </TableContainer>
        </Box>
        
        <Box h={"500px"} border={"1px solid"}>
            <TableContainer>
        <Heading as='h4' size='md'>
        Regions Traffic
            </Heading><br />
            <Table variant='simple'>
            <Thead>
                <Tr>
                    <Th>REGION</Th>
                    <Th>RELATIONS</Th>
                   
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                <Td>Nairobi East</Td>
                    <Td> 3,500</Td>
                    <Td><Progress value={70} mt={"10px"} p={"2px"}/></Td>
                    
                </Tr>
                <Tr>
                    <Td>Nakuru</Td>
                    <Td>1,798</Td>
                    <Td><Progress value={35} mt={"10px"} p={"1px"}/></Td>
                    
                </Tr>
                <Tr>
                    <Td>Kericho</Td>
                    <Td>1,245</Td>
                    <Td><Progress value={25} mt={"10px"} p={"1px"}/></Td>
                    
                </Tr>
      
                <Tr>
                    <Td>Nyamira</Td>
                    <Td>986</Td>
                    <Td><Progress value={20} mt={"10px"} p={"1px"}/></Td>
                    
                </Tr>
                <Tr>
                    <Td>Narok</Td>
                    <Td>854</Td>
                    <Td><Progress value={20} mt={"10px"} p={"1px"}/></Td>
                </Tr>
                <Tr>
                    <Td>Kitale</Td>
                    <Td>650</Td>
                    <Td><Progress value={15} mt={"10px"} p={"1px"}/></Td>
                </Tr>
                    
                <Tr>
                    <Td>Nyandarua</Td>
                    <Td>420</Td>
                    <Td><Progress value={5} mt={"10px"} p={"1px"}/></Td>
                </Tr>
            </Tbody>
        </Table>
            </TableContainer>
        </Box>
    </SimpleGrid>
)
}