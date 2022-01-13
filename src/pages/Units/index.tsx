import { Layout, Breadcrumb } from 'antd';

import {SideBar} from '../../components/SideBar'

import { UnitsData } from '../../components/Data/UnitsData';

const { Header, Content } = Layout;

function Units() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <SideBar/>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Informações</Breadcrumb.Item>
              <Breadcrumb.Item>Unidades</Breadcrumb.Item>
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
              <UnitsData/>
            </div>
          </Content>
        </Layout>

      </Layout>
    );
  }

export default Units
