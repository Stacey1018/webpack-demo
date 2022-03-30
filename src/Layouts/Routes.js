import React from 'react'

import List from '../pages/List'
import DataSet from '../pages/DataSet'

// const List = () => import('../pages/List').then()

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} exact />
        <Route path="/dataSet/" element={<DataSet />} />
      </Routes>
    </Router>
  )
}
