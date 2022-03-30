import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout

// import List from '../pages/List'
import DataSet from '../pages/DataSet'

const List = () => import(/* webpackChunkName: "about" */ '../pages/List')
// import Routes from './Routes'
// const List = () => import('../pages/List').then()
// const DataSet = () => import('../pages/DataSet').then()

export default function Layouts() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dataSet">数据集</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<List />} exact />
            <Route path="/dataSet/" element={<DataSet />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}
