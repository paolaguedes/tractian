import { Card } from 'antd';

import {useState, useEffect} from 'react'

interface CompaniesList {
  id: number;
  name: string;
}

export function CompaniesData(){

  const [companies, setCompanies] = useState<CompaniesList[]>([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/tractian/fake-api/companies')
    .then(response => response.json())
    .then(data => setCompanies(data))
  },[])

  return(
    <>
    {
      companies.map(company => (
      <Card
        key={company.id}
        title="Empresa" 
        bordered={false} 
        style={{ width: 300}}
      >
        <p>{company.name}</p>
      </Card>
      ))
    }
    </>
  )
}