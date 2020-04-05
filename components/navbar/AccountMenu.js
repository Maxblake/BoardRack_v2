import { Menu, Avatar } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

import { DEAUTH_USER } from '../../actions/types';
import navDrawerLinks from '../../constants/navDrawerLinks';
import logoutModal from '../logout';

const A = styled.a`
  padding: 0 0.5rem;
  transition: all 0.2s ease-in-out;
  ${({ active, theme }) =>
    active &&
    `background-color: ${theme.backgroundBlueMenu}; 
    border-left: 2px solid ${theme.primaryBlue}; 
    padding: 1rem;`}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    border-left: 2px solid ${({ theme }) => theme.primaryBlue};
    color: ${({ theme }) => theme.primaryBlue};
    padding-left: 1rem;
  }
`;

const AccountMenu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isLogout = useSelector(state => state.overlays.isLogout);
  const router = useRouter();

  //sort nav items depending on if user is authenticated
  const navItems = navDrawerLinks.filter(
    navitem => navitem.protected === isAuth
  );

  const handleLogout = () => {
    dispatch({ type: DEAUTH_USER });
  };

  return (
    <Menu style={{ boxShadow: '0 0 11px rgba(83, 68, 68, 0.2)' }}>
      <Menu.Item
        key="account"
        style={{
          minHeight: '11rem',
          minWidth: '15rem',
          textAlign: 'center',
          paddingTop: '1rem'
        }}
      >
        <Avatar
          size={150}
          icon={<UserOutlined style={{ fontSize: '6rem' }} />}
        />
      </Menu.Item>

      {navItems.map((item, index) => {
        return (
          <Menu.Item key={index} style={{ padding: 0, margin: 0 }}>
            <Link href={item.href}>
              <A href="/">
                {item.icon} {item.title}
              </A>
            </Link>
          </Menu.Item>
        );
      })}
      <Menu.Divider />
      <Menu.Item
        key="logout"
        onClick={() => {
          logoutModal(handleLogout);
        }}
        style={{ color: 'red' }}
      >
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );
};

export default AccountMenu;