import { Menu } from 'antd';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  key: string;
  icon: JSX.Element;
  to: string;
  children: string;
}

export function NavLink({key, icon, to, children}: NavLinkProps) {
  return(
    <Menu.Item key={key} icon={icon} style={{ padding: 10 }}>
    <Link to={to}>   
      {children}
    </Link>
    </Menu.Item>
  )
}