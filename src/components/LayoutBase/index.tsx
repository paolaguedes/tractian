import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import {SideBar} from '../SideBar'

const { Header, Content } = Layout;

interface Props{
  children: any;
  to: string
  path: string
}

function LayoutBase({children, path, to}: Props) {

    return (
      <Layout style={{ minHeight: '100vh' }}>
        
        <SideBar/>

        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
              <Link to={to}>{path}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div 
              style={{ 
                padding: 24, 
                minHeight: 360, 
                display: 'flex', 
                flexWrap: 'wrap',
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    )
}

export default LayoutBase