import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/todo-list">Todo List</Link>
    </>
  );
};

export default Navigation;
