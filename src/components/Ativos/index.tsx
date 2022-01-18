import { Card, Row, Col, Image } from 'antd';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import {AtivosItens} from './AtivosItens'

export interface AtivosProps{
  id: number
  sensors: Array<string>;
  status: 'inAlert' | 'inDowntime' | 'inOperation' 
  model: string
  name: string
  healthscore: number
  image: string,
  specifications: {
    maxTemp: number
    rpm?: number
    power?: number
  }
  metrics: {
    totalCollectsUptime: number
    totalUptime: number
    lastUptimeAt: string
  }
  unitId: number
}

export function Ativos() {

  const [ativos, setAtivos] = useState<AtivosProps[]>([]);

  useEffect(() => {
    api.get('/assets')
      .then(response => setAtivos(response.data))
  }, []);

  return (
    <>

    {
      ativos.map((ativo, index) => (
      <Link 
      to={`/assets/${ativo.id}`} 
      key={index}
      >
      <Card
        key={ativo.id}
        title={ativo.status == 'inAlert' ? '! '+ativo.name : ativo.name}
        bordered
        style={{ 
          margin: '0 10px 10px 0',
          borderColor: ativo.status == 'inAlert' ? '#9B1113':''
        }}
      >
        <Row>
        <Image
          width={200}
          height={200}
          src={ativo.image}
          style={{objectFit: 'cover'}}
        />
        <Col 
          style={{
            paddingLeft: 10, 
          }} 
        >
          <AtivosItens
            color=''
            title="Sensor"
            text={ativo.sensors}
          />

          <AtivosItens
            color=''

            title="Modelo"
            text={ativo.model}
          />

          <AtivosItens
            color=''

            title="Rotação"
            text={ativo.specifications.rpm ? ativo.specifications.rpm : "null"}
          />

          <AtivosItens
            color=''

            title="Potência"
            text={ativo.specifications.power ? ativo.specifications.power : "null"}
          />

          <AtivosItens
            color=''

            title="Temperatura"
            text={ativo.specifications.maxTemp+" °C"}
          />

          <AtivosItens
            color={ativo.status == 'inAlert' ? '#9B1113':''}

            title="Saúde"
            text={ativo.healthscore}
          />

          <AtivosItens
            color=''

            title="Última coleta"
            text={new Intl.DateTimeFormat('pt-BR').format(
              new Date(ativo.metrics.lastUptimeAt)
            )}
          />

        </Col>
        </Row>
      </Card>
      </Link>
      ))
    }

    </>
  )
}