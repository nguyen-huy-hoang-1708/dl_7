import React from 'react';
import '../style/Bieudo.css';
import Bieu_do from '../assets/Bieu_do.jpg';
import One from '../assets/One.png';
import Two from '../assets/Two.png';
import Three from '../assets/Three.png';
import Four from '../assets/Four.png';
import Five from '../assets/Five.png';
import Six from '../assets/Six.png';
import Quen from '../assets/Quen.png';

function Bieudo() {
  return (
    <div className="bieudo">
      {/* Phần bên trái: Icon + Biểu đồ */}
      <div className="bieudo-left">
        <div className="bieudo-icons-column">
          <img src={One} alt="one" />
          <img src={Quen} alt="quen" />
          <img src={Two} alt="two" />
          <img src={Three} alt="three" />
          <img src={Four} alt="four" />
          <img src={Five} alt="five" />
          <img src={Six} alt="six" />
        </div>
        <div className="bieudo-image">
          <img src={Bieu_do} alt="Biểu đồ" className="size"/>
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
