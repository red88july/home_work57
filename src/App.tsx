import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {useState} from 'react';
import {User} from './types';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevState) => [...prevState, user]);
  };

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container-fluid">
        <div className="row mt-5">
          <div className="col-4">
            <UserForm onSubmit={addUser} />
          </div>
          <div className="col-4">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
