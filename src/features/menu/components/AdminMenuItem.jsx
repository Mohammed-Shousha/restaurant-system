import Modal from '@components/Modal';
import { deleteMenuItem } from '@services/menuServices';

import UpdateMenuItemModal from './UpdateMenuItemModal';
import DeleteMenuItemModal from './DeleteMenuItemModal';

import Button from '@components/Button';
import Item from '@components/Item';

import styled from 'styled-components';

const StyledAdminMenuItem = styled(Item)`
  & span {
    width: 20%;
  }

  & div {
    display: flex;
    gap: 1.2rem;
  }
`;

const AdminMenuItem = ({ item }) => {
  const { id, name, price, description } = item;

  const handleDelete = async () => {
    await deleteMenuItem(id);
  };

  return (
    <StyledAdminMenuItem>
      <span>{name}</span>
      <span>{price}</span>
      <span>{description}</span>

      <Modal>
        <div>
          <Modal.Open opens='edit'>
            <Button>Edit</Button>
          </Modal.Open>
          <Modal.Open opens='delete'>
            <Button variation='danger'>Delete</Button>
          </Modal.Open>
        </div>

        <Modal.Window name='edit'>
          <UpdateMenuItemModal menuItem={item} />
        </Modal.Window>
        <Modal.Window name='delete'>
          <DeleteMenuItemModal onConfirm={handleDelete} />
        </Modal.Window>
      </Modal>
    </StyledAdminMenuItem>
  );
};

export default AdminMenuItem;
