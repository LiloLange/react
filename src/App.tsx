import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TableDisplay from "./components/TableDisplay";
import "./App.css";
import { TodoData, TodoDataWId } from "./interfaces";
function App() {
  const [todo, setTodo] = useState<TodoData>({ title: "", state: "New" });
  const [todoList, setTodoList] = useState<TodoDataWId[]>([]);
  const [filterCat, setFilterCat] = useState<string>("All");
  const [filterList, setFilterList] = useState<TodoDataWId[]>([]);

  const myEditStyle: string =
    "rounded-md bg-slate-400 hover:rounded-lg hover:bg-slate-500 px-3 focus:outline-pink-700 caret-pink-700 w-1/2 h-12 mx-auto";
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const handleClick = (): void => {
    const newData = { ...todo, id: uuidv4() };
    //console.log(newData);
    setTodoList([...todoList, newData]);
  };
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFilterCat(e.target.value);
  };
  useEffect(() => {
    console.log(filterCat);
    setFilterList(
      todoList.filter((item) =>
        filterCat === "All" ? true : item.state === filterCat
      )
    );
  }, [filterCat, todoList]);
  const removeItem = (id: string): void => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  return (
    <div className="container mx-auto p-24 dark:bg-slate-600">
      <div className="flex gap-12 grid-cols-2 p-10 mx-auto">
        <input
          type="text"
          name="title"
          className={myEditStyle}
          value={todo.title}
          onChange={handleChange}
        />
        <select
          className={myEditStyle}
          value={todo.state}
          name="state"
          onChange={handleChange}
        >
          <option>New</option>
          <option>Passed</option>
          <option>Completed</option>
        </select>
        <button
          className="bg-blue-700 hover:opacity-40 w-24 rounded-lg active:bg-blue-900 active:rounded-3xl"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
      <div className="grid-cols-1 mx-auto flex pb-10">
        <select
          className={myEditStyle}
          value={filterCat}
          name="filter"
          onChange={handleFilterChange}
        >
          <option>All</option>
          <option>New</option>
          <option>Passed</option>
          <option>Completed</option>
        </select>
      </div>
      {/* <div className="gap-16 columns-3xs">
        <img src="./1.jfif" className="w-full aspect-auto" />
        <img src="./2.jfif" className="w-full aspect-video" />
        <img src="./3.jfif" className="w-full aspect-square" />
      </div>
      <div className="columns-3xs">
        <img src="./1.jfif" className="w-full aspect-auto" />
        <img src="./2.jfif" className="w-full aspect-video" />
        <img src="./3.jfif" className="w-full aspect-square" />
      </div>
      <div className="columns-3xs">
        <img src="./1.jfif" className="w-full aspect-auto" />
        <img src="./2.jfif" className="w-full aspect-video" />
        <img src="./3.jfif" className="w-full aspect-square" />
      </div> */}
      <TableDisplay todoList={filterList} removeItem={removeItem} />
    </div>
  );
}

export default App;
