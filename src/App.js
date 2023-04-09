// import logo from "./logo.svg";
// import "./App.css";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";
const style = {
  bg: ` h-screen w-screen p-4 bg-gradient-to-r from-[#2f80ed] to-[#1cb5e0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2 `,
  form: `flex justify-between `,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 sm:mt-0 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};
function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //read from firebase
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsbscribe = onSnapshot(q, (querysnapshot) => {
      let todoArr = [];
      querysnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoArr);
    });
    return () => unsbscribe();
  }, []);
  //update
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };
  // console.log(input);
  //create
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("please enter todo");
      return;
    } else {
      await addDoc(collection(db, "todos"), {
        text: input,
        completed: false,
      });
      setInput("");
    }
  };

  //delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}> ToDo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add ToDo"
            className={style.input}
          />
          <button className={style.button}>
            {<AiOutlinePlus size={30} />}
          </button>
        </form>
        <ul>
          {todos.map((cur, ind) => (
            <Todo
              key={ind}
              data={cur}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <p className={style.count}> You've {todos.length} Todos </p>
      </div>
    </div>
  );
}

export default App;
