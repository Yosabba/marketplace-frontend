const CreateHouse = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col justify-center items-center">
        <label>Bedrooms</label>
        <input
          className="border-2 border-slate-100 rounded-lg"
          type="number"
          name="price"
        />
        <label>Bathrooms</label>
        <input
          className="border-2 border-slate-100 rounded-lg"
          type="text"
          name="price"
        />
        <label>Price</label>
        <input
          className="border-2 border-slate-100 rounded-lg"
          type="text"
          name="price"
        />
        <label>Address</label>
        <input
          className="border-2 border-slate-100 rounded-lg"
          type="text"
          name="price"
        />
        <label>Furnished</label>
        <input
          className="border-2 border-slate-100 rounded-lg"
          type="text"
          name="price"
        />
        
      </form>
    </div>
  );
};

export default CreateHouse;
