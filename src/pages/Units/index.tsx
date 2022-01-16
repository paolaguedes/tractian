import { UnitsData } from '../../components/Data/UnitsData';
import LayoutBase from '../../components/LayoutBase';

function Units() {

    return (
      <LayoutBase to="/units" path={'Unidades / '}>
        <UnitsData/>
      </LayoutBase>
    );
  }

export default Units
