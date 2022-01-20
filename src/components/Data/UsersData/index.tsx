import { Avatar, Card} from 'antd';
import { EditOutlined, UserOutlined } from '@ant-design/icons';

import {useState, useEffect} from 'react'
import { api } from '../../../services/api';
import { Link } from 'react-router-dom';
import { CompaniesList } from '../CompaniesData';
import { UnitsDataList } from '../UnitsData';
export interface UsersList {
  id: number;
  email: string;
  name: string;
  unitId: number;
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

  const [companies, setCompanies] = useState<CompaniesList[]>([])

  useEffect(() => {
    api.get('/companies')
    .then(response => {
      setCompanies(response.data)
    })
  },[])

  const [units, setUnits] = useState<UnitsDataList[]>([])

  useEffect(() => {
    api.get('/units')
    .then(response => {
      setUnits(response.data)
    })
  },[])

  return(
    <>
    {
      users.map(user => (
      <Card
        key={user.id}
        title={<p><Avatar size={30} icon={<UserOutlined/>}/> {user.name}</p>}
        bordered={false} 
        style={{ width: 300, margin: '0 10px 10px 0'}}
        extra={<Link to={`users/${user.id}`}><EditOutlined/></Link>}
      >
        <p>{user.email}</p>
        <p>{companies.map(company => company.name)}</p>
        {
          units.map(unit => (
          <p key={unit.id}>
            {unit.id == user.unitId ? unit.name : ''}
          </p>
          ))
        }
       
      </Card>
      ))
    }
    </>
  )
}