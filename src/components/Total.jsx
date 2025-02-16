const Total = ({ basket }) => {
  // dizidekı butun nesnelerın amount degerlerı al
  const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);

  // dızıdekı butun nesneslerı amount * price degerlerını toplam
  const totalPrice = basket.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );
  return (
    <div className="rounded my-5 shadow border p-4 d-flex flex-column justify-content-between">
      <div className="fs-4">
        <p>
          Sepett <span className="text-warning fw-bold">{totalAmount}</span>{" "}
          adet ürün var
        </p>
        <p>
          Toplam fıyat{" "}
          <span className="text-success fw-bold">{totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <button className="btn btn-warning py-2 px-4">Siparişi Onayla</button>
    </div>
  );
};

export default Total;
