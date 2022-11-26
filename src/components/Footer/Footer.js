import NavBar from "../Header/NavBar";

const Footer = () => {
  return (
    <div className="container text-center mt-5 mb-5">
      <div className="row d-flex mb-4">
        <NavBar className="fs-11" />
      </div>
      <div className="row">
        <p className="fs-11">
          Copyright 2022 | CODERHOUSE by Juan Manuel Reina Developer & design. Todos los derechos reservados.
          <br /> Defensa de las y los consumidores. Para reclamos <strong>ingrese aquí</strong>
        </p>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Footer;
