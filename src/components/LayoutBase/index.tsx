import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

import {HeaderMenu} from '../HeaderMenu'

const { Header, Content } = Layout;

interface Props{
  children: any;
  to: string
  path: string
}

function LayoutBase({children, path, to}: Props) {

    return (
      <Layout style={{ minHeight: '100vh'}}>
        

        <Layout className="site-layout">
        <HeaderMenu/>

          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 25px' }}>
              <Breadcrumb.Item>
              <Link to={to}>{path}</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div 
              style={{ 
                padding: 10, 
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