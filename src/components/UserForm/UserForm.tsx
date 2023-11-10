import {User, UserMutation} from '../../types';
import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void,
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    isActiveYes: false,
    isActiveNo: false,
    role: '',
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUser((prevState) => {
      const {name, value} = e.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Number(Math.random().toString()),
      ...user,
    });

    setUser((prevState) => ({
      ...prevState,
      name: '',
      email: '',
      isActiveYes: false,
      isActiveNo: false,
      role: '',
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
      <div className="mt-2 mb-2">
        <strong>Active</strong>
      </div>
      <div className="d-flex col">
        <div className="mb-3 form-check">
          <label className="form-check-label" htmlFor="isActiveYes">Yes</label>
          <input type="checkbox"
                 name="isActiveYes"
                 checked={user.isActiveYes}
                 onChange={changeUser}
                 value="Yes"
                 className="form-check-input"
                 id="isActiveYes"/>
        </div>
        <div className="mb-3 form-check ms-3">
          <label htmlFor="isActiveNo">No</label>
          <input type="checkbox"
                 name="isActiveNo"
                 value="No"
                 checked={user.isActiveNo}
                 onChange={changeUser}
                 className="form-check-input"
                 id="isActiveNo"/>
        </div>
      </div>

      <select className="form-select" name='role' onChange={changeUser} value={user.role}>
        <option value="">Choose role</option>
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