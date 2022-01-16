import { Card, Progress } from 'antd';
import { CheckOutlined, ExclamationOutlined , MinusOutlined } from '@ant-design/icons';


interface Props {
  status: string;
  healthscore: number
}

export function CardProgress({status, healthscore}: Props){

  function handleStrokeColor(status: string){
    if(status === 'inAlert')
      return '#9B1113'
    else if(status === 'inDowntime')
      return '#FCBE39'
    else
      return '#36465D'
}

function handleIconStatus(status: string){
  if(status === 'inAlert')
    return <ExclamationOutlined/>
  else if(status === 'inDowntime')
    return <MinusOutlined/>
  else
    return <CheckOutlined/>
}


  return(
    <Card 
        title="Estado de saúde"
        bordered
        style={{ 
          maxWidth: 250, 
          width: '100%',
          height: 350,
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          margin: '0 10px 10px 0'
        }}
        >
            <p style={{fontSize: 20}}>
            {handleIconStatus(status)}
            {status}
          </p>
          <Progress 
          strokeColor={handleStrokeColor(status)}
          type="circle" 
          percent={healthscore} 
          />
    </Card>
  )
}