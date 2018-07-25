import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import Header from './Header'
import Home from './pages/Home'
import Todos from './pages/Todos'
import Settings from './pages/Settings'

const App = () => (
  <Fragment>
    <Header />
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/todos" component={Todos} />
      <Route path="/settings" component={Settings} />
    </main>
    <footer>The footer</footer>
  </Fragment>
)

export default App
