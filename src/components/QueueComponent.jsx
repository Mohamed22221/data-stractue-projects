import React, { useState } from "react";
import ClassQueue from "./ClassQueue";

function QueueComponent() {
  let newEnque = new ClassQueue();
  const [queue, setQueue] = useState(newEnque);
  const [size, setSize] = useState(0);
  const [peek, setPeek] = useState();
  const [input, setInput] = useState("");

  const pushToQueue = () => {
    if (input.length > 0) {
      setQueue(queue);
      queue.enqueue(input);
      setSize(queue.size());
      setPeek(queue.peek());
      setInput("");
    }
  };
  const deleteToQueue = () => {
    queue.dequeue();
    setPeek(queue.peek());
    setSize(queue.size());
  };

  const handelChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="md:flex flex-col  items-center">
      <h1 className="text-3xl text-indigo-500 m-10 font-bold text-center">
        Queue Data Structure
      </h1>
      <input
        type="text"
        onChange={handelChange}
        value={input}
        placeholder="Enter a value"
        className="border-2 border-black rounded-lg px-4 py-2"
      />
      <div className="flex flex-row space-x-4 space-y-4 items-center justify-center mb-10">
        <button
          className="mt-4 border-2 border-black z-10 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-[#bbfdd8] flex-shrink-0"
          onClick={pushToQueue}
        >
          Push
        </button>
        <button
          className="mt-4 border-2 border-black z-10 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-4 py-2 hover:shadow transition duration-200 bg-[#f8e1ee] flex-shrink-0"
          onClick={deleteToQueue}
        >
          Pop
        </button>
      </div>
      <h3 className="text-2xl text-black font-bold text-center mb-5">
        Queue Properties
      </h3>
      <div className="mt-4 flex flex-col border-2 font-thin border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0)] px-10 py-2 ">
        <span>Top Element: {peek} </span>
        <span>Queue Size: {size} </span>
      </div>

      <div className="flex flex-col m-10 items-center justify-center">
        <h3 className="text-2xl text-red-400 font-bold text-center mb-5">
          Queue Elements
        </h3>
        <div className="flex flex-row space-x-4 m-5">
          <div className="text-center flex flex-row-reverse  ">
            {queue.items.map((item) => {
              return <p color="space-x-3 ">{item}</p>;
            }).reverse()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueComponent;
