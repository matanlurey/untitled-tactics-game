import { Layout } from 'antd';
import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { Grid, Hex, Row } from './Grid';

function app(): JSX.Element {
  return (
    <Layout>
      <Layout.Sider collapsed={true}></Layout.Sider>
      <Layout.Content>
        <Grid>
          <Row>
            <Hex>
              <div>(0, 0)</div>
            </Hex>
            <Hex>
              <div>(1, 0)</div>
            </Hex>
            <Hex>
              <div>(2, 0)</div>
            </Hex>
            <Hex>
              <div>(3, 0)</div>
            </Hex>
            <Hex>
              <div>(4, 0)</div>
            </Hex>
          </Row>
          <Row>
            <Hex>
              <div>(1, 1)</div>
            </Hex>
            <Hex>
              <div>(2, 1)</div>
            </Hex>
            <Hex>
              <div>(2, 1)</div>
            </Hex>
            <Hex>
              <div>(3, 1)</div>
            </Hex>
            <Hex>
              <div>(4, 1)</div>
            </Hex>
          </Row>
          <Row>
            <Hex>
              <div>(0, 2)</div>
            </Hex>
            <Hex>
              <div>(1, 2)</div>
            </Hex>
            <Hex>
              <div>(2, 2)</div>
            </Hex>
            <Hex>
              <div>(3, 2)</div>
            </Hex>
            <Hex>
              <div>(4, 2)</div>
            </Hex>
          </Row>
        </Grid>
      </Layout.Content>
    </Layout>
  );
}

export const App = hot(module)(app);
