import React from 'react';
import { Chart } from 'react-charts';

import { Container, Content } from '../styles';

export default function BarChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Pista',
        data: [
          ['Jan', 0],
          ['Fev', 4],
          ['Mar', 3],
          ['Abr', 5],
          ['Mai', 10],
        ],
      },
      {
        label: 'Lounge',
        data: [
          ['Jan', 2],
          ['Fev', 1],
          ['Mar', 5],
          ['Abr', 4],
          ['Mai', 9],
        ],
      },
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      type: 'bar',
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false },
    ],
    []
  );

  const getSeriesStyle = React.useCallback(
    () => ({
      transition: 'height .5s ease-in-out',
    }),
    []
  );
  const getDatumStyle = React.useCallback(
    () => ({
      transition: 'height .5s ease-in-out',
    }),
    []
  );
  return (
    <Container>
      <h2>Vendas por ingressos</h2>
      <Content>
        <Chart
          data={data}
          series={series}
          axes={axes}
          getSeriesStyle={getSeriesStyle}
          getDatumStyle={getDatumStyle}
          tooltip
        />
      </Content>
    </Container>
  );
}
