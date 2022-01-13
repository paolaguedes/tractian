import { Card } from 'antd';

import {useState, useEffect} from 'react'
import { api } from '../../../services/api';

interface CompaniesList {
  id: number;
  name: string;
}

export function CompaniesData(){

  const [companies, setCompanies] = useState<CompaniesList[]>([])

  useEffect(() => {
    api.get('/companies')
      .then(response => setCompanies(response.data))
  }, []);

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