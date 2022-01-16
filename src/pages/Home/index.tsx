import { Ativos } from '../../components/Ativos';
import LayoutBase from '../../components/LayoutBase';


function Home() {

    return (
      <LayoutBase to="/" path="Inicial / Ativos ">
        <Ativos/>
      </LayoutBase>
    );
  }

export default Home


