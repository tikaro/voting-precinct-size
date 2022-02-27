import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';

import Precincts from '../../json/precincts.json';

export const Chart = (props) => {

    return (
    <VictoryChart
        domainPadding={20}>
        <VictoryAxis
          tickFormat={["Precincts"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(y) => (y)}
        />
        <VictoryBar 
            data={Precincts}
            x="precinct_number"
            y="registered"
        />
    </VictoryChart>
    );
}