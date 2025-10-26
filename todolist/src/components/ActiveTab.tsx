import React from "react";
import ItemCard from "./ItemCard";

type state = {
  items: string[];
  favorites: string[];
  blocked: string[];
};

const ActiveTab: React.FC<{ activeTab: string; state: state }> = ({
  activeTab,
  state,
}) => {
  console.log(activeTab, state[activeTab as keyof state]);

  return (
    <div className="flex w-[80%] flex-col gap-5 justify-center items-center mt-5 bg-slate-100 m-auto">
      {state[activeTab as keyof state]?.length > 0 &&
        state[activeTab as keyof state].map((item) => (
          <ItemCard key={item} item={item} />
        ))}
    </div>
  );
};

export default ActiveTab;
