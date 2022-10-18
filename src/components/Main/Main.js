import ItemListContainer from "./ItemListContainer";

const Main = () => {
  return (
    <main>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <ItemListContainer greetings="Bienvenidos a mi tienda" />
        </div>
      </div>
    </main>
  );
};

export default Main;
