const ItemCard = ({ item }: { item: string }) => {
  return (
    <div>
      <div className="flex gap-10 justify-around items-center bg-slate-50 w-full">
        <div>{item}</div>
        <div className="flex justify-between w-[30%] items-center gap-2 px-5 py-2">
          <button className="bg-slate-200 px-5 py-2 rounded-lg cursor-pointer">
            addTo fav
          </button>
          <button className="bg-slate-200 px-5 py-2 rounded-lg cursor-pointer">
            block
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
