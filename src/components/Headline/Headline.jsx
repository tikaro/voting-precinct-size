import React from 'react';
import { Heading } from '@chakra-ui/react'

export const Headline = (props) => {

    return (
        <>
        <Heading as="h1" size='2xl'>Chester County Voting Precinct Size</Heading>
        <Heading as="h2" size='1xl'>A chart and table showing the number of registered voters in each of Chester County's voting precincts</Heading>
        </>
    );
}