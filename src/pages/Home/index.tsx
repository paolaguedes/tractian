import { Layout, Breadcrumb } from 'antd';

import {SideBar} from '../../components/Navigation/SideBar'

import { Ativos } from '../../components/Ativos';

const { Header, Content } = Layout;

function Home() {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <SideBar/>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Inicial</Breadcrumb.Item>
            </Breadcrumb>
            <div 
              style={{ 
                padding: 24, 
                minHeight: 360, 
                display: 'flex', 
                flexWrap: 'wrap',
              }}
            >
              <Ativos/>
            </div>
          </Content>
        </Layout>

      </Layout>
    );
  }

  export default Home


