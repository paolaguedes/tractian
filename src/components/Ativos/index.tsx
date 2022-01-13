import { Card, Row, Col, Image, Typography } from 'antd';

import { useState, useEffect } from 'react';

import {AtivosItens} from './AtivosItens'

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

export function Ativos() {

  const [ativos, setAtivos] = useState<AtivosProps[]>([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/tractian/fake-api/assets')
      .then((response) => response.json())
      .then((data) => setAtivos(data))
      .catch((error) => {
        console.log('fetch data failed', error);
      });

  }, []);

  return (
    <>
    {
      ativos.map(ativo => (
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
      ))
    }
    </>
  )
}