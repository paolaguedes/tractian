import { Typography } from 'antd';

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
      gap: 15,
      marginBottom: 5
    }}        
  >
    <Title 
    style={{display: 'inline', marginBottom: 0}} 
    level={5}
    >
    {title}
    </Title>  
    {text}
  </span>
  )
}