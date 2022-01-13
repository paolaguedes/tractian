import { Card } from 'antd';
import {useState, useEffect} from 'react'
import { api } from '../../../services/api';

interface UnitsDataList {
  id: number;
  name: string;
  companyId: number;
}

export function UnitsData(){

  const [units, setUnits] = useState<UnitsDataList[]>([])


  useEffect(() => {
    api.get('/units')
    .then(response => setUnits(response.data))
  },[])

  return(
    <>
    {
      units.map(unit => (
        <Card
        key={unit.id}
        title="Unidade" 
        bordered={false} 
        style={{ width: 300, margin: '0 10px 10px 0'}}
      >
        <p>{unit.name}</p>
      </Card>
      ))
    }
    </>
  )
}