import { Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


const { Title } = Typography;

interface Props {
  title: string;
  text: any
}

export function AtivosItens({title, text}: Props) {
  return(
  <span 
    style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 5
    }}        
  >
    <Title 
    style={{display: 'inline', marginBottom: 0}} 
    level={5}
    >
    <CaretRightOutlined />
    {title}
    </Title>  
    {text}
  </span>
  )
}