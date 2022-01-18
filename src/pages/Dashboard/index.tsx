import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { api } from '../../services/api';

import { Card, Form } from 'antd';

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
import { useForm, SubmitHandler  } from 'react-hook-form';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend);

function Dashboard() {

  const { pathname } = useLocation()
  let history = useHistory()

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

  const onSubmit: SubmitHandler<AtivosProps> = data => api.put(`${pathname}`, setDash(data))
  .then(() => {
    console.log("Deu tudo certo")
    history.push(`${pathname}`)
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })


  useEffect(() => {
    api.get(`${pathname}`)
      .then(response => {
        setDash(response.data)
        reset(response.data)
      })

  }, []);

  const { register, handleSubmit, reset } = useForm<AtivosProps>()

  return (
    <LayoutBase to="/" path={'Inicial / Ativos / ' + dash.name}>
      <Card
        key={dash.id}
        title={dash.name}
        bordered
        style={{ margin: '0 10px 10px 0' }}
      >
        <Form
          onFinish={handleSubmit(onSubmit)}
        >
          <Form.Item label="Nome">
          <input type="text" {...register("name")} />
          </Form.Item>
          <Form.Item label="Modelo">
          <input type="text" {...register("model")} />
          </Form.Item>
          <button type="submit" >Enviar</button>
          </Form>
  
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