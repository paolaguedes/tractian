import { Layout, Menu} from 'antd';

import {
  PieChartOutlined,
  FundProjectionScreenOutlined,
  UserOutlined,
  PartitionOutlined
} from '@ant-design/icons';

import { useState } from 'react';

import {Icon} from '../Icon'
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

export function SideBar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
    <Icon/>

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item 
        key="1" 
        icon={<PieChartOutlined />} 
        style={{ padding: 10 }}>
          <Link to="/">   
          Inicial
          </Link>
        </Menu.Item>

        <SubMenu key="sub1" icon={<FundProjectionScreenOutlined />} title="Informações">
          <Menu.Item 
          key="2" 
          icon={<UserOutlined />} 
          style={{ padding: 10 }}>
            <Link to="/users">   
            Usuários
            </Link>
          </Menu.Item>

          <Menu.Item 
          key="3" 
          icon={<PartitionOutlined />} 
          style={{ padding: 10 }}>
            <Link to="/units">   
            Unidades
            </Link>
          </Menu.Item>

          <Menu.Item 
          key="3" 
          icon={<PartitionOutlined />} 
          style={{ padding: 10 }}>
            <Link to="/companies">   
            Empresas
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
      </Sider>
  )
}