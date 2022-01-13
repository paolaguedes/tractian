import { Card } from 'antd';
import {useState, useEffect} from 'react'

interface UnitsDataList {
  id: number;
  name: string;
  companyId: number;
}

export function UnitsData(){

  const [units, setUnits] = useState<UnitsDataList[]>([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/tractian/fake-api/units')
    .then(response => response.json())
    .then(data => setUnits(data))

    console.log(units)
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