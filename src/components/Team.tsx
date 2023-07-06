import { TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Box, Heading, Progress, SimpleGrid } from "@chakra-ui/react";

export  default function Teams(){
    return(
        <SimpleGrid mt={"10px"} ml={"250px"} p={"10px"} columns={2} spacing={5} minChildWidth={"400px"} pt={"20px"}>
        
        <Box h="400px" border="1px solid">
        <TableContainer >
        <Heading as='h4' size='md'>
            Our Active principals
            </Heading><br />
            <Table variant='simple'>
            <Tbody>
                <Tr>
                    <Td>Oyoo Osen</Td>
                    <Td> Kisumu East</Td>
                    <Td> 2/7</Td>
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
    </SimpleGrid>
    )
}