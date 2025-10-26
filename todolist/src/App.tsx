import React, { useRef, useState } from "react";
import Options from "./components/Options";
import { useReducer } from "react";
import ActiveTab from "./components/ActiveTab";

type state = {
  items: string[];
  favorites: string[];
  blocked: string[];
};

type action =
  | { type: "add"; payload: string }
  | { type: "favorite"; payload: string }
  | { type: "block"; payload: string };

const initialState: state = { items: [], favorites: [], blocked: [] };

const reducerFun: React.Reducer<state, action> = (
  state: state,
  action: action
) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "favorite":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "block":
      return {
        ...state,
        blocked: [...state.blocked, action.payload],
      };
    default:
      return state;
  }
};
const App = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<string>("All");

  const [reducerState, dispatch] = useReducer(reducerFun, initialState);
  console.log(reducerState);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "Enter" &&
      inputRef.current &&
      inputRef.current.value !== ""
    ) {
      dispatch({ type: "add", payload: inputRef.current.value });
      inputRef.current.value = "";
    }
  };
  return (
    <div className="flex m-auto mt-10 flex-col w-screen">
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        placeholder="Add new Item"
        className="w-[150px] ring ring-blue-400 rounded-md outline-none ml-10 px-5 py-3"
      />
      <Options setActiveTab={setActiveTab} />
      <ActiveTab activeTab={activeTab} state={reducerState} />
    </div>
  );
};

export default App;
