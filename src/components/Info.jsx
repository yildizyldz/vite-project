import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="text-center fs-5">
      <p>Öncelikle sepete bir urun ekleyiniz</p>

      <Link to="/" className="btn btn-primary">
        Ürüne Git
      </Link>
    </div>
  );
};

export default Info;
