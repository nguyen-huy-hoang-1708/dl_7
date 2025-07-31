import React  from 'react';
import '../style/OrderForm.css';
import Option from '../assets/Option.svg';

function OrderForm() {
  return (
    <div className="order-form">
      <div className="setup">
        <h3 className="gradient" >Giao dịch</h3>
        <h3 className="padding">Cài đặt</h3>
      </div>

      <label className="title">Mã chứng khoán</label>
      <button className="option">
        VN30F2501
        <img src={Option} alt="option" className="op" />
      </button>

      <div className="order-type">
        <button className="Lenh">Lệnh thường</button>
        <button className="lenh">
          Lệnh điều kiện
          <img src={Option} alt="option" className="ok" />
        </button>
      </div>

      <label className="Loailenh">Loại lệnh</label>
      <div className="order-mode">
        <button className="mode-active">ATO</button>
        <button className="mode">ATC</button>
        <button className="mode">MOK</button>
        <button className="mode">MTL</button>
        <button className="mode">MAK</button>
      </div>

      <div className="input-group">
        <label className="input-label">Giá đặt</label>
        <div className="input-control">
          <button className="btn">−</button>  {/* Dấu trừ dài đúng */}
          <span type="number" className="input-field" >
          1,220.3
          </span>
          <button className="btn">+</button>
        </div>

        <label className="input-label">Khối lượng</label>
        <div className="input-control">
          <button className="btn"> −  </button>
          <span type="number" className="input-field" >
          1,000.0
          </span>
          <button className="btn">+</button>
        </div>

        <div className="position-buttons">
          <button className="btn-long">Long</button>
          <button className="btn-short">Short</button>
        </div>
      </div>
    </div>
  );
}




export default OrderForm;
