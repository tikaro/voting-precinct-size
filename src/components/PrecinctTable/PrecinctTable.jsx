import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from '@chakra-ui/react'

import Precincts from '../../json/precincts.json';


export const PrecinctTable = (props) => {

    return (
        <>
        <Table variant='striped'>
            <TableCaption>Precincts by number of registered voters</TableCaption>
            <Thead>
                <Tr>
                <Th>Precinct</Th>
                <Th>Number of Registered Voters in 2018</Th>
                </Tr>
            </Thead>
            <Tbody>
                {Precincts.map(precinct => {
                    return (
                        <Tr>
                            <Td>{precinct.precinct_number} {precinct.precinct_name}</Td>
                            <Td>{precinct.registered.toLocaleString("en-US")}</Td>
                        </Tr>
                    )
                })}
            </Tbody>
            <Tfoot>
                <Tr>
                <Th>Precinct</Th>
                <Th>Registered Voters</Th>
                </Tr>
            </Tfoot>
            </Table>
        </>
    );
}