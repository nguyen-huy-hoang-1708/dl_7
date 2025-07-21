import React from 'react';
import '../style/Bieudo.css';
import bieudo from '../assets/bieudo.jpg';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';
import five from '../assets/five.png';
import six from '../assets/six.png';
import quen from '../assets/quen.png';

function Bieudo() {
  return (
    <div className="bieudo">
      {/* Phần bên trái: Icon + Biểu đồ */}
      <div className="bieudo-left">
        <div className="bieudo-icons-column">
          <img src={one} alt="one" />
          <img src={quen} alt="quen" />
          <img src={two} alt="two" />
          <img src={three} alt="three" />
          <img src={four} alt="four" />
          <img src={five} alt="five" />
          <img src={six} alt="six" />
        </div>
        <div className="bieudo-image">
          <img src={bieudo} alt="Biểu đồ" />
        </div>
      </div>
      

      {/* Phần bên phải: Panel thông tin */}
      <div className="bieudo-info-panel">
        <div className="bieudo-tabs">
          <button className="bieudo-tab-active">Tài sản</button>
          <button className="bieudo-tab">10 Giá</button>
          <button className="bieudo-tab">Lịch sử giao dịch</button>
          <button className="bieudo-tab">Mã phái sinh</button>
        </div>

        <div className="bieudo-content">
          <div className="info-row">
            <span>Lãi to</span>
            <div className="xanh">2,046.59</div>
          </div>
          <div className="info-row">
            <span>Sức mua (357007)</span>
            <span>--</span>
          </div>
          <div className="info-row">
            <span>Lãi/Lỗ chưa đóng</span>
            <span>--</span>
          </div>
          <div className="info-row">
            <span>Tổng tài sản</span>
            <span>120,000,0000</span>
          </div>
          <div className="info-row">
            <span>Tiền mặt</span>
            <span>--</span>
          </div>
          <div className="info-row">
            <span>Tiền ký quỹ tại VSD</span>
            <span>--</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bieudo;
