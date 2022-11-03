const Labels = ({ label }) => {
  if (label.new) {
    return <div className="labels labelNew">NUEVO</div>;
  }
  if (label.discountPorcent !== 0) {
    return <div className="labels labelOff"> {label.discountPorcent}%OFF </div>;
  }
  if (label.stock === 0) {
    return <div className="labels labelOutStock"> SIN STOCK </div>;
  }
};

export default Labels;
