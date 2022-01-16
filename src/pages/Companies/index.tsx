import { Layout } from 'antd';

import LayoutBase from '../../components/LayoutBase'

import { CompaniesData } from '../../components/Data/CompaniesData';


function Companies() {

    return (
      <LayoutBase to="/companies" path={'Empresas / '}>
        <CompaniesData/>
      </LayoutBase>
    );
  }

export default Companies
