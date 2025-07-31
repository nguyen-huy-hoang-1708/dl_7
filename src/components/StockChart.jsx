import React from 'react';
import '../style/StockChart.css';
import Option from '../assets/Option.svg';

function StockChart() {
  return (
    <div className="stock-chart">
      <div className="stock-row-scroll">
        <div className="stock-item">
          <div className="label">
            Mã CK
            <img src={Option} alt="Option" className="option-icon" />
          </div>
          <div className="value yellow">VN30F2501</div>
        </div>
        <div className="stock-item">
          <div className="label">Ngày ĐH</div>
          <div className="value white">12 - 04 - 2024</div>
        </div>
        <div className="stock-item">
          <div className="label">Trần</div>
          <div className="value purple">1,220.3</div>
        </div>
        <div className="stock-item">
          <div className="label">Sàn</div>
          <div className="value blue">950.0</div>
        </div>
        <div className="stock-item">
          <div className="label">T/C</div>
          <div className="value yellow">1,050.0</div>
        </div>
        <div className="stock-item">
          <div className="label">Giá khớp</div>
          <div className="value yellow">1,050.0</div>
        </div>
        <div className="stock-item">
          <div className="label">KL khớp</div>
          <div className="value">--</div>
        </div>
        <div className="stock-item">
          <div className="label">+/-</div>
          <div className="value yellow">0.00</div>
        </div>
        <div className="stock-item">
          <div className="label">+/- (%)</div>
          <div className="value yellow">0.00%</div>
        </div>
        <div className="stock-item">
          <div className="label">Tổng KL</div>
          <div className="value">--</div>
        </div>
        <div className="stock-item">
          <div className="label">Cao</div>
          <div className="value">--</div>
        </div>
        <div className="stock-item">
          <div className="label">Thấp</div>
          <div className="value">--</div>
        </div>
        <div className="stock-item">
          <div className="label">Giá đầu ngày</div>
          <div className="value">--</div>
        </div>
      </div>
    </div>
  );
}

export default StockChart;
