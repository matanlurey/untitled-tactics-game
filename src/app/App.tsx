import { Layout } from 'antd';
import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { Cell, Grid, Row } from './ui/Grid';

function app(): JSX.Element {
  const tiles = [
    [0, 1, 2, 3],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3],
    [0, 1, 2, 3, 4],
    [0, 1, 2, 3],
  ];
  return (
    <Layout>
      <Layout.Sider collapsed={true} collapsedWidth={0}></Layout.Sider>
      <Layout.Content>
        <Grid>
          {tiles.map((row, y) => {
            return (
              <Row key={y}>
                {row.map((_, x) => {
                  return (
                    <Cell key={x}>
                      <></>
                    </Cell>
                  );
                })}
              </Row>
            );
          })}
        </Grid>
      </Layout.Content>
    </Layout>
  );
}

export const App = hot(module)(app);
