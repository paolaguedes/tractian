import { Card, Row, Col, Image } from 'antd';

import { AtivosItens } from '../../../components/Ativos/AtivosItens'

interface Props {
  sensors: Array<string>
  model: string
  image: string
  maxTemp: number
  rpm?: number | string
  power?: number | string
}

export function CardData({
  image,
  sensors,
  model,
  maxTemp,
  rpm,
  power,
}: Props) {
  return (
    <>
    <Row>
    <Image
      width={200}
      height={200}
      src={image}
      style={{ objectFit: 'cover' }}
    />
    <Col
      style={{
        paddingLeft: 10,
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

      {/* <AtivosItens
        title="Responsável"
        text={dash.unitId === users.unitId ? users.name : users.name}
      /> */}
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