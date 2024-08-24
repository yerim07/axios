// Get
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [todos, setTodos] = useState();

//   const fetchTodos = async () => {
//     const { data } = await axios.get("https://reqres.in/api/users?page=2");
//     setTodos(data);
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   console.log(todos);
//   return <div>App</div>;
// };

// export default App;

//Post
import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [todo, setTodo] = useState({
    title: "",
  });

  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("https://reqres.in/api/users");
    setTodos(data);
  };

  const onSubmitHandler = (todo) => {
    axios.post("https://reqres.in/api/users", todo);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(todo);
        }}
      >
        <input
          type="text"
          onChange={(ev) => {
            const { value } = ev.target;
            setTodo({
              ...todo,
              title: value,
            });
          }}
        />
        <button>추가하기</button>
      </form>
      <div>
        {todos?.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </div>
    </>
  );
};

export default App;
