import { Card, Form, Modal } from 'antd';

import {useState, useEffect} from 'react'
import { api } from '../../../services/api';
import { EditOutlined } from '@ant-design/icons';

interface UnitsDataList {
  id: number;
  name: string;
  companyId: number;
}

export function UnitsData(){

  const [units, setUnits] = useState<UnitsDataList[]>([])

  useEffect(() => {
    api.get('/units')
    .then(response => {
      setUnits(response.data)
      setName(response.data)
    })
  },[])

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [name, setName] = useState<UnitsDataList[]>([])

  return(
    <>
    {
      units.map(unit => (
      <Card
        key={unit.id}
        title="Unidade" 
        bordered={false} 
        style={{ width: 300, margin: '0 10px 10px 0'}}
        extra={<EditOutlined onClick={()=>setIsModalVisible(true)}/>}
      >
      <Modal 
      title="Basic Modal" 
      visible={isModalVisible} 
      onOk={()=> setIsModalVisible(false)} 
      onCancel={()=> setIsModalVisible(false)} 
      >
        <Form>
          <Form.Item label="Nome">
          <input 
          style={{ border: '1px solid #d9d9d9', padding: '5px'}}
          type="text"
          value={unit.name}
          name="name"
          />
          </Form.Item>
        </Form>
      </Modal>
        <p>{unit.name}</p>
      </Card>
      ))
    }
    </>
  )
}