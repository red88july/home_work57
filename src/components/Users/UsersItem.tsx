import {User} from '../../types';
import React from 'react';

interface Props {
  user: User;
}

const UsersItem: React.FC<Props> = ({user}) => {
  return (
    <div>
      <div className="card mb-2 w-75">
        <div className="row no-gutters">
          <div className="col-sm-8">
            <div className="card-body">
              <h5 className="card-title">Username: {user.name} </h5>
              <p className="card-text small">Email: {user.email}</p>
              <p className="card-text">Active: {user.isActive}</p>
              <p className="card-text">Role: {user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersItem;