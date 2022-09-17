const HomeForm = () => {
  const formInputStyle =
    "border-slate-200 border-2 rounded-xl w-72 my-2 py-2 indent-2";
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

        <input
          className={formInputStyle}
          type="number"
          name="bedroom"
          id="bedroom"
        />
      </form>
    </>
  );
};

export default HomeForm;
