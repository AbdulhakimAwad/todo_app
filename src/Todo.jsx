import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
const style = {
  li: `flex justify-between p-4 my-2 capitalize bg-slate-200 transition-all`,
  liComplete: `flex justify-between p-4 my-2 capitalize bg-slate-400 transition-all`,
  row: `flex `,
  text: `ml-2 cursor-pointer transition-all`,
  textComplete: `ml-2 cursor-pointer line-through transition-all`,
  button: `flex items-center cursor-pointer`,
};
function Todo({ data, toggleComplete, deleteTodo }) {
  return (
    <li className={data.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(data)}
          type="checkbox"
          checked={data.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(data)}
          className={data.completed ? style.textComplete : style.text}
        >
          {data.text}
        </p>
      </div>
      <button
        className=" hover:bg-red-600 hover:text-white rounded-md p-2 transition-colors"
        onClick={() => deleteTodo(data.id)}
      >
        {<FaRegTrashAlt />}
      </button>
    </li>
  );
}

export default Todo;
