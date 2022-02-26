import React from 'react';
import { Heading } from '@chakra-ui/react'

export const Headline = (props) => {

    return (
        <>
        <Heading as="h1" size='2xl'>Voting Precinct Size</Heading>
        <Heading as="h2" size='1xl'>A graph of voting precincts in Chester County</Heading>
        </>
    );
}