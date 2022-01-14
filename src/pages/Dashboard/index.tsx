import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../services/api';

import { Card, Row, Col, Image } from 'antd';

import {AtivosItens} from '../../components/Ativos/AtivosItens'
import {AtivosProps} from '../../components/Ativos'

function Dashboard() {

  const { pathname } = useLocation()
  
  const [dash, setDash] = useState<AtivosProps>({
    id: 0,
    sensors: [],
    model: '',
    name: '',
    image: '',
    specifications: {
      maxTemp: 0,
      rpm: 0,
      power: 0
    },
    metrics: {
      totalCollectsUptime: 0,
      totalUptime: 0,
      lastUptimeAt: ''
    }
  });
  
  useEffect(() => {
    api.get(`${pathname}`)
      .then(response => setDash(response.data))
  });
  
  return (
    <>
          <Card
            key={dash.id}
            title={dash.name}
            bordered
            style={{ margin: '0 10px 10px 0'}}
          >
            <Row>
            <Image
              width={200}
              height={200}
              src={dash.image}
              style={{objectFit: 'cover'}}
            />
            <Col 
              style={{
                paddingLeft: 10, 
              }} 
            >
              <AtivosItens
                title="Sensor"
                text={dash.sensors}
              />
        
              <AtivosItens
                title="Modelo"
                text={dash.model}
              />
        
                  {/* <AtivosItens
                    title="Rotação"
                    text={dash.specifications.rpm ? dash.specifications.rpm : "null"}
                  />
        
                  <AtivosItens
                    title="Potência"
                    text={dash.specifications.power ? dash.specifications.power : "null"}
                  />
        
                  <AtivosItens
                    title="Temperatura"
                    text={dash.specifications.maxTemp+" °C"}
                  />
        
                  <AtivosItens
                    title="Último coleta"
                    text={new Intl.DateTimeFormat('pt-BR').format(
                      new Date(dash.metrics.lastUptimeAt)
                    )}
                  /> */}
            </Col>
            </Row>
          </Card>
    </>
  )
}

export default Dashboard