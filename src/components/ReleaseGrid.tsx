import React from "react";
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
} from "@chakra-ui/react";

const ReleaseGrid = () => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Release Name</Th>
            <Th isNumeric>Dist. Sent This Week</Th>
            <Th isNumeric>Dist. Scheduled This Week</Th>
            <Th isNumeric>Total District Sent To</Th>
            <Th isNumeric>Stores Installed</Th>
            <Th isNumeric>Send Error</Th>
            <Th isNumeric>Install Error</Th>
            <Th isNumeric>No. Results</Th>
            <Th isNumeric>Backed Out</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>THESE NEED TO BE DYNAMIC LINKS</Td>
            <Td>THESE NEED TO BE DYNAMIC LINKS</Td>
            <Td >THESE NEED TO BE DYNAMIC LINKS</Td>
          </Tr>
          <Tr>
            <Td isNumeric>0</Td>
            <Td isNumeric>0</Td>
            <Td isNumeric>0</Td>
          </Tr>
          <Tr>
            <Td isNumeric>0</Td>
            <Td isNumeric>0</Td>
            <Td isNumeric>0</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default ReleaseGrid;
