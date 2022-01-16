import { UsersData } from '../../components/Data/UsersData';
import LayoutBase from '../../components/LayoutBase';

function Users() {

    return (
      <LayoutBase to="/users" path={'Usuários / '}>
        <UsersData/>
      </LayoutBase>
    );
  }

export default Users
