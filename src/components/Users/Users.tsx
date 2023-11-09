import UsersItem from './UsersItem';
import {User} from '../../types';
import React from 'react';

interface Props {
  users: User [],
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div>
      <h3>List Users</h3>
      {users.map((user) =>
        <UsersItem key={user.id} user={user}/>
      )}
    </div>
  );
};

export default Users;