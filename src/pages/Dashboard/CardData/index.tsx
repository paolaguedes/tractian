import { Card, Row, Col, Image } from 'antd';

import { AtivosItens } from '../../../components/Ativos/AtivosItens'

interface Props {
  sensors: Array<string>
  model: string
  image: string
  maxTemp: number
  rpm?: number | string
  power?: number | string
  user?: any
}

export function CardData({
  image,
  sensors,
  model,
  maxTemp,
  rpm,
  power,
  user
}: Props) {
  return (
    <>
    <Row style={{display: 'flex', gap: 10, justifyContent: 'center'}}>
    <Image
      width={200}
      height={200}
      src={image}
      style={{ objectFit: 'cover'}}
    />
    <Col
      style={{
        paddingLeft: 10,
        maxWidth: '240px',
        width: '100%'
      }}
    >
      <AtivosItens
        title="Sensor"
        text={sensors}
      />

      <AtivosItens
        title="Modelo"
        text={model}
      />

      <AtivosItens
        title="Responsável"
        text={user}
      />
    </Col>
    </Row>
    <Card title="Especificações" style={{marginTop: 10}}>
      <AtivosItens
        title="Temperatura"
        text={maxTemp}
      />
      <AtivosItens
        title="Rotação"
        text={rpm}
      />

      <AtivosItens
        title="Potência"
        text={power}
      />
  </Card>
  </>
  )
}