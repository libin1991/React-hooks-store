import React,{ useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
// 使用 useContext
// 1. 使用 createContext 创建上下文
const UserContext = new createContext();

// 2. 创建 Provider
const UserProvider = props => {
  let [username, handleChangeUsername] = useState('');
  return (
    <UserContext.Provider value={{ username, handleChangeUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};

const Pannel = () => {
  const { username, handleChangeUsername } = useContext(UserContext); // 3. 使用 Context
  return (
    <div>
      <div>user: {username}</div>
      <input onChange={e => handleChangeUsername(e.target.value)} />
    </div>
  );
};

const Form = () => <Pannel />;

const App = () => (
  <div>
    <UserProvider>
      <Form />
    </UserProvider>
  </div>
);



export default App;
 