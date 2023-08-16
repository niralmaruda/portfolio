import React, { useState } from 'react';

interface IToDo {
  id: number;
  task: string;
  isComplete: boolean;
}

function ToDo() {
  const [val, setVal] = useState('');
  const [toDoList, setToDoList] = useState<IToDo[]>([]);

  const handleClick = () => {
    if (val === '') return;
    setToDoList([
      ...toDoList,
      { id: Date.now(), task: val, isComplete: false },
    ]);
    setVal('');
  };

  const handleDelete = (id: number) => {
    setToDoList(toDoList.filter((x) => x.id !== id));
  };

  return (
    <>
      <section className="bg-gray-900 m-3 rounded-lg overflow-hidden">
        <div className="text-white text-3xl p-3 font-bold bg-gray-950">
          To Do App
        </div>
        <hr></hr>
        <div className="flex justify-center m-5">
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="rounded-l-md w-80 bg-gray-700 text-teal-400 scale-y-150 p-1 my-2"
          ></input>
          <button
            onClick={handleClick}
            className="bg-cyan-500 rounded-r-md hover:cursor-pointer hover:bg-cyan-400 p-2 font-medium"
          >
            Add
          </button>
        </div>
        <div>
          {toDoList.map((list) => (
            <div key={list.id} className="flex justify-center p-1">
              <h1 className="text-teal-500 bg-gray-300 justify-start rounded-l-md w-80 text-2xl font-semibold">
                {list.task}
              </h1>
              <button
                onClick={() => handleDelete(list.id)}
                className="bg-red-700 justify-end rounded-r-md hover:cursor-pointer hover:bg-red-600 p-2 font-medium"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ToDo;
