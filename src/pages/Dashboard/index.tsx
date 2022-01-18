import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { api } from '../../services/api';

import { Card, Drawer, Form} from 'antd';
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
import { useForm, SubmitHandler  } from 'react-hook-form';
import { AtivosItens } from '../../components/Ativos/AtivosItens';
import { Button } from '../../components/Button';

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

  const onSubmit: SubmitHandler<AtivosProps> = data => api.put(`${pathname}`, setDash(data))

  useEffect(() => {
    api.get(`${pathname}`)
      .then(response => {
        setDash(response.data)
        reset(response.data)
      })

  }, []);

  const { register, handleSubmit, reset } = useForm<AtivosProps>()

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);


  return (
    <LayoutBase to="/" path={'Inicial / Ativos / ' + dash.name}>
      <Card
        key={dash.id}
        title={dash.name}
        bordered
        style={{ margin: '0 10px 10px 0' }}
        extra={<EditOutlined  onClick={() => setIsDrawerVisible(true)}/>}
      >
        <Drawer
          title="Editar ativo"
          width={'100%'}
          style={{maxWidth: 500}}
          onClose={()=>setIsDrawerVisible(false)}
          visible={isDrawerVisible}
          bodyStyle={{ paddingBottom: 80 }}
        >
        <Form
          onFinish={handleSubmit(onSubmit)}
        >
          <Form.Item label="Nome">
          <input 
          style={{ border: '1px solid #d9d9d9', padding: '5px'}}
          type="text" {...register("name")} />
          </Form.Item>
          <Form.Item label="Modelo">
          <input 
          style={{ border: '1px solid #d9d9d9', padding: '5px'}}
          type="text" 
          {...register("model")} />
          </Form.Item>
          <Form.Item label="Sensor">
          <input 
          style={{ border: '1px solid #d9d9d9', padding: '5px'}}
          type="text" {...register("sensors")} />
          </Form.Item>
          <Button
          onClick={()=>setIsDrawerVisible(false)}
          text="Alterar"
          type="submit"
          />
        </Form>
        </Drawer>

  
        <CardData 
          sensors={dash.sensors}
          model={dash.model}
          image={dash.image}
          maxTemp={dash.specifications.maxTemp}
          rpm={dash.specifications.rpm ? dash.specifications.rpm : "null"}
          power={dash.specifications.power ? dash.specifications.power : "null"}
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
        padding: 0,
      }}>
        <Bar 
        style={{marginBottom: 6}}
          data={{ 
            labels:[
            `Qntd. Coletas`, 
            `Horas Totais`
            ],
            datasets:[{
              label: `Em unidade`,
              data:[
                `${dash.metrics.totalCollectsUptime}`, 
                `${dash.metrics.totalUptime}`
              ],
              backgroundColor: ['#001529', '#36465D'],
              barThickness: 50
            },
            {
              label: `Em horas`,
              data:[],
              backgroundColor: '#36465D'
            },
          ]
          }}
        />
        <AtivosItens
        color=''
        title="Data da última coleta"
        text={dash.metrics.lastUptimeAt.slice(0, -14)}
        />
      </Card>
       
    </LayoutBase>
  )
}

export default Dashboard