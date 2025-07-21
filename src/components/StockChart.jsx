import React from 'react';
import '../style/StockChart.css';
import Option from '../assets/Option.png';

function StockChart() {
  return (
    <div className="stock-chart">
      <div className="stock-info-grid">
  <div className="layout"> 
    <div className="label">
      Mã CK
      <img src={Option} alt="Option" className="option-icon" />
    </div>
    <div className="price-yellow">VN30F2501</div>
  </div>
  <div className="layout">
    <div className="label">Ngày ĐH</div>
    <div className="white">12-04-2024</div>
  </div>
  <div className="layout">
    <div className="label">Trần</div>
    <div className="purple">1,220.3</div>
  </div>
  <div className="layout">
    <div className="label">Sàn</div>
    <div className="blue">950.0</div>
  </div>
  <div className="layout">
    <div className="label">T/C</div>
    <div className="price-yellow">1,050.0</div>
  </div>
  <div className="layout">
    <div className="label">Giá khớp</div>
    <div className="price-yellow">1,050.0</div>
  </div>
  <div className="layout">
    <div className="label">KL khớp</div>
    <div className="value">--</div>
  </div>
  <div className="layout">
    <div className="label">+/-</div>
    <div className="price-yellơ">0.00</div>
  </div>
  <div className="layout">
    <div className="label">+/-(%)</div>
    <div className="price-yellow">0.00%</div>
  </div>
  <div className="layout">
    <div className="label">Tổng KL</div>
    <div className="value">--</div>
  </div>
  <div className="layout">
    <div className="label">Cao</div>
    <div className="value">--</div>
  </div>
  <div className="layout">
    <div className="label">Thấp</div>
    <div className="value">--</div>
  </div>
  <div className="layout">
    <div className="label">Giá đầu ngày</div>
    <div className="value">--</div>
  </div>
</div>
    </div>
  );
}

export default StockChart;
