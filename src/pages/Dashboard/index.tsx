import { Card, Row, Col, Image } from 'antd';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';

import {AtivosItens} from '../../components/Ativos/AtivosItens'

interface AtivosProps{
  id: number
  sensors: Array<string>;
  model: string
  status: string
  healthscore: number
  name: string
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
  companyId: number
}

function Dashboard() {
  const [ativos, setAtivos] = useState<AtivosProps[]>([]);

  useEffect(() => {
    api.get(`assets`)
      .then(response => setAtivos(response.data))
  }, []);

  return (
    <>
    {
      ativos.map(ativo => (
      <Link to={`/assets/${ativo.id}`}>
      <Card
        key={ativo.id}
        title={ativo.name}
        bordered
        style={{ margin: '0 10px 10px 0'}}
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
            title="Sensor"
            text={ativo.sensors}
          />

          <AtivosItens
            title="Modelo"
            text={ativo.model}
          />

          <AtivosItens
            title="Rotação"
            text={ativo.specifications.rpm ? ativo.specifications.rpm : "null"}
          />

          <AtivosItens
            title="Potência"
            text={ativo.specifications.power ? ativo.specifications.power : "null"}
          />

          <AtivosItens
            title="Temperatura"
            text={ativo.specifications.maxTemp+" °C"}
          />

          <AtivosItens
            title="Último coleta"
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

export default Dashboard