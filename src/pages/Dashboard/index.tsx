import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { api } from '../../services/api';

import { Card, Modal, Input, Form } from 'antd';
import { EditOutlined } from '@ant-design/icons';

import {Bar} from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { CardData } from './CardData';
import LayoutBase from '../../components/LayoutBase'
import { AtivosProps } from '../../components/Ativos'
import { CardProgress } from './CardProgress';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

function Dashboard() {

  const { pathname } = useLocation()

  const [dash, setDash] = useState<AtivosProps>({
    id: 0,
    sensors: [],
    model: '',
    status: 'inAlert',
    name: '',
    healthscore: 0,
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
    },
    unitId: 0
  });

  useEffect(() => {
    api.get(`${pathname}`)
      .then(response => {
        setDash(response.data)
        setName(dash.name)
        setModel(dash.model)
      })
  });

  const [name, setName] = useState('')
  const [model, setModel] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  function onEditAtivo() {
    setIsOpen(true)
  }

  return (
    <LayoutBase to="/" path={'Inicial / Ativos / ' + dash.name}>
      <Card
        key={dash.id}
        title={dash.name}
        bordered
        style={{ margin: '0 10px 10px 0' }}
        extra={<EditOutlined onClick={()=> {
          onEditAtivo()
        }} style={{fontSize: 18}}/>}
      >
      <Modal 
        title="Editar ativo" 
        okText="Salvar"
        visible={isOpen}
        onCancel={() => setIsOpen(false)}
        onOk={() => setIsOpen(false)}
      >
      <Form
        name="update"
      >
        <Form.Item label="Nome">
        <Input 
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </Form.Item>
        <Form.Item label="Modelo">
        <Input 
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        </Form.Item>
        </Form>
      </Modal>

        <CardData 
          sensors={dash.sensors}
          model={dash.model}
          image={dash.image}
          maxTemp={dash.specifications.maxTemp}
          rpm={dash.specifications.rpm ? dash.specifications.rpm : "null"}
          power={dash.specifications.power ? dash.specifications.power : "null"}
          lastUptimeAt={dash.metrics.lastUptimeAt.slice(0, -14)}
        />
      </Card>

      <CardProgress
        status={dash.status}
        healthscore={dash.healthscore}
      />

      <Card 
      title="Métricas de coleta"
      style={{ 
        height: 350, 
        maxWidth: 500, 
        width: '100%',
      }}>
        <Bar 
          data={{ 
            labels:[
            `Total de coleta - ${dash.metrics.totalCollectsUptime}`, 
            `Total de horas de coleta - ${dash.metrics.totalUptime}`
            ],
            datasets:[{
              label:'Coletas',
              data:[
                `${dash.metrics.totalCollectsUptime}`, 
                `${dash.metrics.totalUptime}`
              ],
              backgroundColor: ['#001529', '#36465D'],
              barThickness: 50
            },
            {
              label:'Horas',
              data:[],
              backgroundColor: '#36465D'
            },
          ]
          }}
        />
      </Card>
       
    </LayoutBase>
  )
}

export default Dashboard