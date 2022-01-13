import { Layout, Breadcrumb } from 'antd';

import {SideBar} from '../../components/Navigation/SideBar'

import { CompaniesData } from '../../components/Data/CompaniesData';

const { Header, Content } = Layout;

function Companies() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <SideBar/>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Informações</Breadcrumb.Item>
              <Breadcrumb.Item>Empresas</Breadcrumb.Item>
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
              <CompaniesData/>
            </div>
          </Content>
        </Layout>

      </Layout>
    );
  }

export default Companies
