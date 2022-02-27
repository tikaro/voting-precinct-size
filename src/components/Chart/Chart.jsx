import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip } from 'victory';

import Precincts from '../../json/precincts.json';

export const Chart = (props) => {

    function tooltipMessage(datum) {
      let precinctMessage = `Precinct ${datum.precinct_number}`;
      if (datum.precintName !== "") { precinctMessage += `\n${datum.precinct_name}`};
      precinctMessage += `\n${datum.registered.toLocaleString("en-US")} voters`;
      return precinctMessage;
    }

    return (
    <VictoryChart
        domainPadding={20}>

        <VictoryAxis
          dependentAxis
          tickFormat={(y) => (y)}
        />
        <VictoryBar
          data={Precincts}
          x="precinct_number"
          y="registered"
          labels={({ datum }) => tooltipMessage(datum)}
          labelComponent={<VictoryTooltip/>}
        />
    </VictoryChart>
    );
}