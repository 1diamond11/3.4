import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from '../components/UserList';

type User = {
  id: number;
  name: string;
};

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
};

export default HomePage;
