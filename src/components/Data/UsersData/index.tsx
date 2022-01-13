import { Card } from 'antd';

import {useState, useEffect} from 'react'

interface UsersList {
  id: number;
  email: string;
  name: string;
  unityId: number;
  companyId: number;
}

export function UsersData(){

  const [users, setUsers] = useState<UsersList[]>([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/tractian/fake-api/users')
    .then(response => response.json())
    .then(data => setUsers(data))
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
      >
        <p>{user.email}</p>
      </Card>
      ))
    }
    </>
  )
}