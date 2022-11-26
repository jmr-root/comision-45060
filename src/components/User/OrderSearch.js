import { useState } from "react";
import { collectionOrders } from "../../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import OrderDetail from "./OrderDetail";

export const Orders = () => {
  const [orderId, setorderId] = useState("");
  const [orders, setOrders] = useState([]);
  const [buyer, setBuyer] = useState([]);
  const [searching, setSearching] = useState(false);
  const [validateSearch, setValidateSearch] = useState("");

  const handleOrder = (e) => setorderId(e.target.value);

  const searchOrder = (e) => {
    e.preventDefault();
    if (orderId.length < 1) {
      return setValidateSearch("Debe ingresar un número de orden");
    }
    const ref = doc(collectionOrders, orderId);

    getDoc(ref)
      .then((res) => {
        setOrders([...res.data().items]);
        setBuyer({ id: res.id, buyer: res.data().buyer });
        setSearching(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        if (orderId !== buyer.id) {
          return setValidateSearch("No existe orden de compra con el número ingresado");
        }
      });
  };

  if (orders.length > 0) {
    return (
      <div className="container text-center">
        <div className="row mt-5">
          <div className="col-12">
            <h3 className="">MIS ORDENES</h3>
            <hr className="w-25 m-auto mt-2 mb-5" />
          </div>
          <div className="col-4">
            <strong>Orden Id:</strong> {orderId}
          </div>
          <div className="col-4">
            <strong>Cliente:</strong> {buyer.buyer.name} {buyer.buyer.lastName}
          </div>
          <div className="col-4">
            <strong>Estado:</strong> <span className="colorVioleta">En procesamiento</span>
          </div>
          <div className="col-12 mt-5">
            <OrderDetail order={orders} />
          </div>
          <div className="col-12 fs-11 mt-4 mb-2">
            Los pedidos se despachan dentro de las 24 horas de confirmada la compra. A partir del momento en que el servicio de correos se hace cargo del paquete, puede conocer en todo momento su evolución gracias al n° de seguimiento del pedido enviado por correo electrónico con la confirmación del pedido. En caso de encontrarse ausente, el servicio de correos pasará al día siguiente en distinto horario. Una vez que el sistema te confirma que tu pedido fue enviado, los tiempos estimados son
            entre 48 y 72 horas hábiles.
          </div>
        </div>
      </div>
    );
  }

  if (!searching) {
    return (
      <div className="container text-center">
        <div className="row mt-5">
          <h3 className="">MIS ORDENES</h3>
          <hr className="w-25 m-auto mt-2 mb-5" />
          <form onSubmit={searchOrder}>
            <p className="font-medium">Ingresa el Número de Órden:</p>
            <input type="text" placeholder="" name="order" onChange={handleOrder} value={orderId} className="form-label-order m-auto" />
            <button className="btn btn-primary">BUSCAR ÓRDEN</button>
            <p className="fs-12 mt-2">{validateSearch}</p>
          </form>
        </div>
      </div>
    );
  }
};

export default Orders;
