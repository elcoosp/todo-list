import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'antd'

class HorizontalMenu extends Component {
  state = {
    current: 'home'
  }

  handleClick = e =>
    this.setState(s => ({
      current: e.key
    }))

  render () {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="todos">
          <Link to="/todos">Todos</Link>
        </Menu.Item>
        <Menu.Item key="settings">
          <Link to="/settings">
            <Icon type="setting" />Settings
          </Link>
        </Menu.Item>
      </Menu>
    )
  }
}

const Header = () => (
  <header>
    <HorizontalMenu />
  </header>
)

export default Header
