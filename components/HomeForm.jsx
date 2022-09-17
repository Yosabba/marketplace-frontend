const HomeForm = () => {
  const formInputStyle =
    "border-slate-200 border-2 rounded-xl w-72 my-2 py-1 indent-2 w-1/4";
  return (
    <>
      <form className="flex flex-col ml-2">
        <label>hbbhvf</label>
        <input className={formInputStyle} type="text" />
        <input className={formInputStyle} type="text" />
        <label for="points">Price Range</label>
        <input
          className="w-40 "
          type="range"
          id="points"
          name="points"
          min="0"
          max="10"
        />
        <label htmlFor="">Bedroom</label>
        <input
          className={formInputStyle}
          type="number"
          name="bedroom"
          id="bedroom"
          min={1}
        />
        <label htmlFor="">Bathroom</label>
        <input
          className={formInputStyle}
          type="number"
          name="bathroom"
          id="bathroom"
          min={1}
          max={44}
        />
        <label htmlFor="">Bathrooms</label>
        <select className={formInputStyle} name="bedroom" id="bedroom">
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label for="default-toggle">Furnished</label>

        <label
          for="default-toggle"
          className="inline-flex relative items-center mb-4 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-slate-200 dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </form>
    </>
  );
};

export default HomeForm;
