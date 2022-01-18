import { Card} from 'antd';
import { EditOutlined } from '@ant-design/icons';

import {useState, useEffect} from 'react'
import { api } from '../../../services/api';
import { Link } from 'react-router-dom';
export interface UsersList {
  id: number;
  email: string;
  name: string;
  unityId: number;
  companyId: number;
}

export function UsersData(){

  const [users, setUsers] = useState<UsersList[]>([])

  useEffect(() => {
    api.get('/users')
    .then(response => {
      setUsers(response.data)
    })
  },[])

  return(
    <>
    {
      users.map(user => (
      <Card
        key={user.id}
        title={user.name} 
        bordered={false} 
        style={{ width: 300, margin: '0 10px 10px 0'}}
        extra={<Link to={`users/${user.id}`}><EditOutlined/></Link>}
      >

        <p>{user.email}</p>
      </Card>
      ))
    }
    </>
  )
}