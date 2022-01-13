import { Layout, Menu} from 'antd';

import {
  DesktopOutlined,
  PieChartOutlined,
  FundProjectionScreenOutlined,
  UserOutlined,
  PartitionOutlined
} from '@ant-design/icons';

import { useState } from 'react';

import {NavLink} from '../NavLink'
import {Icon} from '../../Icon'

const { Sider } = Layout;
const { SubMenu } = Menu;

export function SideBar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
    <Icon/>

      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <NavLink 
          key="1"
          icon={<DesktopOutlined />}
          to="/"
        > 
        Inicial
        </NavLink>
        <NavLink 
          key="2"
          icon={<PieChartOutlined />}
          to="/dash"
        > 
        Dashboard
        </NavLink>
        <SubMenu key="sub1" icon={<FundProjectionScreenOutlined />} title="Informações">
        <NavLink 
          key="3"
          icon={<UserOutlined />}
          to="/users"
        >
          Usuários
        </NavLink>
        <NavLink 
          key="4"
          icon={<PartitionOutlined />}
          to="/units"
        >
          Unidades
        </NavLink>
        <NavLink 
          key="5"
          icon={<PartitionOutlined />}
          to="/companies"
        >
          Empresas
        </NavLink>
          </SubMenu>
      </Menu>
      </Sider>
  )
}