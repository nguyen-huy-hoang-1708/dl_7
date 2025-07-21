import React from 'react';
import '../style/TopNavbar.css';
import logo from '../assets/logo.png';
import Flag from '../assets/Flag.png';
import Option from '../assets/Option.png';
import SignOut from '../assets/SignOut.png';

export default function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="menu-tabs">
          <div className="gradient">Giao dịch phát sinh</div>
          <div>Chuyển tiền</div>
          <div>Sao kê tiền</div>
          <div>Danh mục tài sản</div>
          <div>Thông tin tài khoản</div>
        </div>
      </div>
      <div className="hi">
        <div>Xin chào, sangdd02</div>
      </div>
      <div className="ten">
        <div>0025458 - Do Duy Sang</div>
        <img src={Option} alt="Option" className="Option-icon" />
      </div>
      
      <div className="Flag">
        <img src={Flag} alt="Flag" className="Flags" />
        <div className="vn">VN</div>
        <img src={Option} alt="Option" className="Option-icon" />
      </div>
      <img src={SignOut} alt="SignOut" className="SignOut" />

    </div>
  );
}
