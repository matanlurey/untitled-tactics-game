import { Layout } from 'antd';
import React from 'react';
import { hot } from 'react-hot-loader';
import './App.scss';
import { Board } from './Board';

function app(): JSX.Element {
  return (
    <Layout>
      <Layout.Header></Layout.Header>
      <Layout.Content>
        <Board />
      </Layout.Content>
    </Layout>
  );
}

export const App = hot(module)(app);
