import { Layout, Breadcrumb } from 'antd';

import {SideBar} from '../../components/SideBar'

import { UsersData } from '../../components/Data/UsersData';

const { Header, Content } = Layout;

function Users() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <SideBar/>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Informações</Breadcrumb.Item>
              <Breadcrumb.Item>Usuários</Breadcrumb.Item>
            </Breadcrumb>
            <div 
              className="site-layout-background" 
              style={{ 
                padding: 24, 
                minHeight: 360, 
                display: 'flex', 
                flexWrap: 'wrap' 
              }}
            >
              <UsersData/>
            </div>
          </Content>
        </Layout>

      </Layout>
    );
  }

export default Users
