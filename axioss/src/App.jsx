import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState();

  const fetchTodos = async () => {
    const { data } = await axios.get("https://reqres.in/api/users?page=2");
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);
  return <div>App</div>;
};

export default App;
