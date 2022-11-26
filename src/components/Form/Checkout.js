import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/firebaseConfig";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerif, setEmailVerif] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [direction, setDirection] = useState("");
  const [city, setCity] = useState("");
  const [cp, setCp] = useState("");
  const [orderId, setOrderId] = useState("");
  const [validateForm, setValidateForm] = useState("");
  const [sending, setSending] = useState(false);

  const { cart, totalPrice } = useContext(CartContext);

  const sendData = (e) => {
    e.preventDefault();
    const order = {
      buyer: {
        name: name,
        lastName: lastName,
        email: email,
        emailVerif: emailVerif,
        phone: phone,
        country: country,
        direction: direction,
        city: city,
        cp: cp,
      },
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "ordenes");

    if (name === "" || lastName === "" || email === "" || emailVerif === "" || phone === "" || country === "" || direction === "" || city === "" || cp === "") {
      setValidateForm("Verfique que todos los campos esten completos");
    } else if (email !== emailVerif) {
      setValidateForm("los correos no coinciden");
    } else {
      setSending(true);
      addDoc(orderCollection, order)
        .then((res) => {
          setOrderId(res.id);
        })
        .catch((error) => {
          console.log("Hubo un error", error);
        })
        .finally(() => {
          setSending(false);
        });
    }
  };

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleEmailVerif = (e) => setEmailVerif(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleDirection = (e) => setDirection(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleCp = (e) => setCp(e.target.value);

  if (orderId) {
    return (
      <div className="container">
        <div className="row">
          <div className="col justify-content-center align-content-center text-center m-5">
            <h5>Muchas gracias por tu compra!</h5>
            <p className="fs-13"> tu número de seguimiento es: {orderId}</p>
            <Link to="/orders" className="btn-text fs-12">
              SEGUIMIENTO DE COMPRA
            </Link>
            <span className="ms-2 me-2">|</span>
            <Link to="/" className="btn-text fs-12">
              VOLVER AL INICIO
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <form action="" onSubmit={sendData}>
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Nombre <span className="accent-red">*</span>
                </label>
                <input type="text" name="name" className="form-control" onChange={handleName} value={name} />
              </div>
              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Apellido <span className="accent-red">*</span>
                </label>
                <input type="text" name="lastName" className="form-control" onChange={handleLastName} value={lastName} />
              </div>
              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Email: <span className="accent-red">*</span>
                </label>
                <input type="text" name="email" className="form-control" onChange={handleEmail} value={email} />
              </div>
              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Verificación Email: <span className="accent-red">*</span>
                </label>
                <input type="text" name="emailVerif" className="form-control" onChange={handleEmailVerif} value={emailVerif} />
              </div>

              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Teléfono <span className="accent-red">*</span>
                </label>
                <input type="text" name="phone" className="form-control" onChange={handlePhone} value={phone} />
              </div>
              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  País: <span className="accent-red">*</span>
                </label>
                <input type="text" name="country" className="form-control" onChange={handleCountry} value={country} />
              </div>
              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Ciudad: <span className="accent-red">*</span>
                </label>
                <input type="text" name="City" className="form-control" onChange={handleCity} value={city} />
              </div>
              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Dirección <span className="accent-red">*</span>
                </label>
                <input type="text" name="direction" className="form-control" onChange={handleDirection} value={direction} />
              </div>
              <div className="col-4">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  CP: <span className="accent-red">*</span>
                </label>
                <input type="text" name="cp" className="form-control" onChange={handleCp} value={cp} />
              </div>
              <div className="col-9 mt-3">
                <Link to="/cart" className="btn btn-secondary me-2">
                  VOLVER
                </Link>
                <button className="btn btn-primary">{sending === true ? "ENVIANDO..." : "FINALIZAR COMPRA"}</button>
                <span className="ms-2 font-semibold fs-13">{validateForm}</span>
              </div>
              <div className="col-3 mt-3 text-end">
                <p className="accent-red fs-11 mt-2">* Estos campos son obligatorios</p>
              </div>
            </div>
          </div>

          <div className="col-3 text-end">
            <div className="resume-cart">
              <p className="font-medium">RESUMEN DE PEDIDO:</p>
              <hr />
              {cart.map((prod) => (
                <div key={prod.id} className="mt-4 product fs-12">
                  <p className="font-semibold mb-0">
                    {prod.name} x {prod.quantity} unid.
                  </p>
                  <p>${(prod.priceOffer !== 0 ? prod.priceOffer : prod.price) * prod.quantity}.-</p>
                </div>
              ))}
              <div className="fs-12">
                <p className="mb-0">Subtotal: ${totalPrice()}.-</p>
                <p className="mb-0">Envío: {totalPrice() > 6000 ? "Gratis" : `$${1200}.-`} </p>
                <hr />
                <p className="font-semibold">TOTAL: ${totalPrice() + (totalPrice() > 6000 ? 0 : 1200)}.-</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
