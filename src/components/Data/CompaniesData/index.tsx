import { Card, Form, Modal } from 'antd';
import { EditOutlined } from '@ant-design/icons';


import { useState, useEffect } from 'react'
import { api } from '../../../services/api';

export interface CompaniesList {
  id: number;
  name: string;
}

export function CompaniesData() {

  const [companies, setCompanies] = useState<CompaniesList[]>([])

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    api.get('/companies')
      .then(response => {
        setCompanies(response.data)
        setName(response.data)
      })
  }, []);

  const [nameForm, setName] = useState('')

  function handleCompanieId(name: string) {
    setCompanies(prevState => (
      prevState.filter(post => post.name == name)
    ))
    setName(name)
  }

  return (
    <>
      {
        companies.map(company => (
          <Card
            key={company.id}
            title="Empresa"
            bordered={false}
            style={{ width: 300 }}
            extra={<EditOutlined onClick={() => {
              setIsModalVisible(true)
              handleCompanieId(company.name)
            }} />}
          >
            <Modal
              title="Editar unidade"
              visible={isModalVisible}
              onOk={() => setIsModalVisible(false)}
              onCancel={() => setIsModalVisible(false)}>
              <Form>
                <Form.Item label="Nome">
                  <input
                    style={{ border: '1px solid #d9d9d9', padding: '5px' }}
                    type="text"
                    value={nameForm}
                    name="name"
                    onChange={e => setName(e.target.value)}
                  />
                </Form.Item>
              </Form>
            </Modal>
            <p>{typeof (nameForm) == 'string' ? nameForm : company.name}</p>
          </Card>
        ))
      }
    </>
  )
}