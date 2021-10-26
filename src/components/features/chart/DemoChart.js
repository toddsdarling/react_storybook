import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export function DemoChart() {
  const options = {
    title: {
      text: 'Highcharts Example',
    },
    series: [
      {
        data: [1, 2, 3],
        name: 'Test Data',
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
