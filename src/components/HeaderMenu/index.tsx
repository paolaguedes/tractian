import { Menu, Image } from 'antd';

import {
  PieChartOutlined,
  UserOutlined,
  PartitionOutlined
} from '@ant-design/icons';

import { Link } from 'react-router-dom';
import { Header } from 'antd/lib/layout/layout';

export function HeaderMenu() {

  return (
    <Header style={{ height: 90 }}>

      <div style={{ float: 'left', margin: '10px 20px 0 0' }}>
        <Link to="/">
          <Image
            width={120}
            preview={false}
            src="https://imgix.tractian.com/images/Logo-Tractian.svg?auto=format&fit=max&w=540"
          />
        </Link>
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        style={{ display: "flex", alignItems: "center", padding: '10px 0' }}
      >
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          style={{ padding: '0 20px' }}>
          <Link to="/">
            Inicial
          </Link>
        </Menu.Item>

        <Menu.Item
          key="2"
          icon={<UserOutlined />}
          style={{ padding: '0 20px' }}>
          <Link to="/users">
            Usuários
          </Link>
        </Menu.Item>

        <Menu.Item
          key="3"
          icon={<PartitionOutlined />}
          style={{ padding: '0 20px' }}>
          <Link to="/units">
            Unidades
          </Link>
        </Menu.Item>

        <Menu.Item
          key="4"
          icon={<PartitionOutlined />}
          style={{ padding: '0 20px' }}>
          <Link to="/companies">
            Empresas
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}