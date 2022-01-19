import { Avatar, Card, Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Button } from '../../components/Button';
import { UsersList } from '../../components/Data/UsersData';
import { api } from '../../services/api';
import LayoutBase from './../../components/LayoutBase/index';


export default function UserForm() {

  const { pathname } = useLocation()

  const [users, setUsers] = useState<UsersList>({
    id: 0,
    email: '',
    name: '',
    unityId: 0,
    companyId: 0
  })

  useEffect(() => {
    api.get(`${pathname}`)
      .then(response => {
        setUsers(response.data)
        reset(response.data)
      })
  }, [])

  const { register, handleSubmit, reset } = useForm<UsersList>()

  const onSubmit: SubmitHandler<UsersList> = data => api.put(`${pathname}`, setUsers(data))

  return (
    <LayoutBase to="/users" path={'Usuários / ' + users.name}>
      <Card
        title={<p><Avatar size={30} icon={<UserOutlined />} /> {users.name}</p>}
        bordered
        style={{ margin: '0 10px 10px 0', maxWidth: '300px', width: '100%' }}
      >
        <p>{users.name}</p>
        <p>{users.email}</p>
      </Card>

      <Card
        title="Editar usuário"
        bordered
        style={{ margin: '0 10px 10px 0', maxWidth: '300px', width: '100%' }}
      >
        <Form
          onFinish={handleSubmit(onSubmit)}
        >
          <Form.Item label="Nome">
            <input
              style={{ border: '1px solid #d9d9d9', padding: '5px' }}
              type="text" {...register("name")} />
          </Form.Item>
          <Form.Item label="Email">
            <input
              style={{ border: '1px solid #d9d9d9', padding: '5px' }}
              type="text"
              {...register("email")} />
          </Form.Item>
          <Button
            onClick={() => ''}
            text="Alterar"
            type="submit"
          />
        </Form>
      </Card>

    </LayoutBase>
  )
}