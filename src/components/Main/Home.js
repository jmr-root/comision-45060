import Banner from "../../../src/images/banner.jpg";
import NewItemListContainer from "../Product/NewItemListContainer";

const Home = () => {
  return (
    <div className="container">
      <div className="row g-0">
        <div className="col-12">
          <img src={Banner} alt="" className="banner-home" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h4 className="mt-5">PRODUCTOS NUEVOS</h4>
        </div>
        <NewItemListContainer />
      </div>
    </div>
  );
};

export default Home;
