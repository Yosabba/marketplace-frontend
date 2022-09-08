const CreateHouse = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>Create House</h1>
      <form className="flex flex-col justify-center items-center">
        <label>Address</label>
        <input type="text" name="address" />
        <label>Price</label>
        <input type="text" name="price" />
      </form>
    </div>
  );
};

export default CreateHouse;
