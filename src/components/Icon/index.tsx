import { Avatar, Row, Col, Typography } from 'antd';

import {
  UserOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;


export function Icon() {
  return(
    <Row style={{alignItems: 'center', margin: ' 30px 5px' }}>
    <Avatar style={{ margin: ' 0 5px' }} size={50} icon={<UserOutlined />} />
    <Col>
      <Title level={5} style={{ color: "#FFF", marginBottom: 0}}>Usuário</Title>
      <Text style={{ color: "#FFF"}}>usuario@email.com</Text>
    </Col>
    </Row>
  )
}