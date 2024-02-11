import { useAuth } from '@hooks/authHooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import useAuthorization from '@hooks/useAuthentication';

const StyledNavBar = styled.nav`
  ul {
    display: flex;
    gap: 2.4rem;
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 1.8rem;
  }

  li:last-child {
    margin-left: auto;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }
`;

const NavBar = () => {
  const { handleLogout } = useAuth();

  const { isAuthorized, isLoading } = useAuthorization();

  if (isLoading) return null;

  return (
    <StyledNavBar>
      <ul>
        <li>
          <StyledNavLink to={isAuthorized ? '/admin-menu' : '/menu'}>
            Menu
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={isAuthorized ? '/admin-orders' : '/orders'}>
            Orders
          </StyledNavLink>
        </li>
        <li>
          <Button size='large' variation='dangerOutline' onClick={handleLogout}>
            Sign Out
          </Button>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
