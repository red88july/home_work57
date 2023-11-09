import {User, UserMutation} from '../../types';
import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void,
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActive: false,
    role: '',
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      role: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Number(Math.random().toString()),
      ...user,
    });

    setUser((prevState) => ({
      ...prevState,
      isActive: false,
    }));
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3">
        <label htmlFor="username-input">Username</label>
        <input type="text"
               name="name"
               id="username-input"
               value={user.name}
               onChange={changeUser}
               className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="email-input">Email address</label>
        <input type="email"
               name="email"
               value={user.email}
               onChange={changeUser}
               className="form-control"
               id="email-input"/>
      </div>
      <div className="mb-3 form-check">
        <label className="form-check-label" htmlFor="isActive">Active</label>
        <input type="checkbox"
               name="isActive"
               checked={user.isActive}
               onChange={changeUser}
               className="form-check-input"
               id="isActive"/>

      </div>
      <select className="form-select" onChange={changeUser} value={user.role}>
        <option selected>Choose role</option>
        <option value="User">User</option>
        <option value="Editor">Editor</option>
        <option value="Admin">Admin</option>
      </select>
      <div>
        <button className="btn btn-primary d-block m-0 m-auto mt-3 w-100" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default UserForm;