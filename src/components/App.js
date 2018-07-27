import React from 'react'
import { Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import Header from './Header'
import Home from './pages/Home'
import Todos from './pages/Todos'
import Settings from './pages/Settings'
import Layout from './Layout'
import styled from 'styled-components'
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 80%;
`
const App = () => (
  <Layout>
    <Header />
    <Main>
      <Route exact path="/" component={Home} />
      <Route path="/todos" component={Todos} />
      <Route path="/settings" component={Settings} />
    </Main>
    <footer>The footer</footer>
  </Layout>
)

export default App
