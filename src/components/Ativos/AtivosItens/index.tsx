import { Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';


const { Title } = Typography;

interface Props {
  title: string;
  text: any
  color?: string
}

export function AtivosItens({title, text, color}: Props) {
  return(
  <span 
    style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 5,
      color: color
    }}        
  >
    <Title 
    style={{
      display: 'inline', 
      marginBottom: 0, 
      color: color
    }} 
    level={5}
    >
    <CaretRightOutlined />
    {title}
    </Title>  
    {text}
  </span>
  )
}