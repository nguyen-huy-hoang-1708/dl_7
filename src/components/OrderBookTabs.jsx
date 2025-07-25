import React from 'react';
import '../style/OrderBookTabs.css';
import checkbox from '../assets/Checkbox.png'; 
import nocheckbox from '../assets/Nocheckbox.png';
import Trash from '../assets/Trash.png'; 
import edit from '../assets/Edit.png';   
import kinhlup from '../assets/Kinhlup.png';
import Funnel from '../assets/Funnel.png';
import full from '../assets/Full.png';

const ordersData = [
  {
    id: 123456,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Long',
    stockCode: 'ABC',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Chờ khớp',
    cancelTime: '--',
    orderKind: 'Lệnh thường',

  },
  {
    id: 265829,
    checked: true,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Long',
    stockCode: 'DGY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Chờ gửi lên Sở',
    cancelTime: '--',
    orderKind: 'Lệnh điều kiện',
  },
  {
    id: 254806,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Short',
    stockCode: 'HDY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp 1 phần',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: true,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Long',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp hết',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Short',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Lệnh đã bị huỷ',
    cancelTime: '03/05/2021, 01:00',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Long',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp hết',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Short',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Lệnh đã bị huỷ',
    cancelTime: '03/05/2021, 01:00',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Long',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp hết',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Short',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Lệnh đã bị huỷ',
    cancelTime: '03/05/2021, 01:00',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Long',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp hết',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 254806,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Short',
    stockCode: 'HDY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp 1 phần',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: true,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Long',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp hết',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 254806,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Short',
    stockCode: 'HDY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp 1 phần',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Long',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Khớp hết',
    cancelTime: '--',
    orderKind: 'Lệnh thường',
  },
  {
    id: 268918,
    checked: false,
    time: '03/05/2021, 00:00',
    clientId: '132592298',
    account: '26959927',
    orderType: 'Short',
    stockCode: 'OXY',
    orderQty: 1000,
    matchedQty: 300,
    price: 10.0,
    status: 'Lệnh đã bị huỷ',
    cancelTime: '03/05/2021, 01:00',
    orderKind: 'Lệnh thường',
  },
];

function OrderBookTabs() {

  function getStatusClass(status) {
  switch (status) {
    case 'Chờ khớp':
      return 'text-yellow';
    case 'Chờ gửi lên Sở':
      return 'text-orange';
    case 'Khớp 1 phần':
      return 'text-blue';
    case 'Khớp hết':
      return 'text-green';
    case 'Lệnh đã bị huỷ':
      return 'text-red';
    default:
      return 'text-white';
  }
}

  return (
    <div className="order-book-tabs">
      <div className="order-tabs">
        <button className="thuong">Danh sách lệnh thường</button>
        <button className="dieukien">Danh sách lệnh điều kiện</button>
        <img src={full} alt="full" className="full" />
      </div>

      <table>
        <thead>
          <tr>
            <th><img src={nocheckbox} alt="tick" className="header-icon" /></th>
            <th>
              <span className="th-with-icon">
                Số hiệu lệnh
                <img src={kinhlup} alt="kinhlup" className="kinhlup" />

              </span>
            </th>
            <th>
              <span className="th-with-icon">
                Thời gian
                <img src={Funnel} alt="funnel" className="funnel" />
              </span>
            </th>
            <th>
              <span className="th-with-icon">
                Client ID
                <img src={kinhlup} alt="kinhlup" className="kinhlup" />
                </span>
            </th>
            <th>
              <span className="th-with-icon">
                Tài khoản
                <img src={kinhlup} alt="kinhlup" className="kinhlup" />
                </span>
            </th>
            <th>Lệnh</th>
            <th>
              <span className="th-with-icon">
                Mã CK
                <img src={kinhlup} alt="kinhlup" className="kinhlup" />
                </span>
            </th>
            <th>KL đặt</th>
            <th>KL khớp</th>
            <th>Giá đặt</th>
            <th>
              <span className="th-with-icon">
                Trạng thái
                <img src={Funnel} alt="funnel" className="funnel" />
              </span>
            </th>
            <th>
              <span className="th-with-icon">
                Thời gian huỷ
                <img src={Funnel} alt="funnel" className="funnel" />
              </span>
            </th>
            <th>Loại lệnh</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
  {ordersData.map((order, index) => (
    <tr key={index}>
      <td>
        <img
          src={order.checked ? checkbox : nocheckbox}
          alt="check"
          className="row-icon"
        />
      </td>
      <td className="highlight-id">{order.id}</td> {/* Số hiệu lệnh */}
      <td className="tta">{order.time}</td>
      <td className="ttb">{order.clientId}</td>
      <td className="ttc">{order.account}</td>
     <td
  className={`order ${
    order.orderType === 'Long' ? 'text-green' : 'text-red'
  }`}
>
  {order.orderType}
</td>

      <td className="ttd">{order.stockCode}</td>
      <td className="tte">{order.orderQty.toLocaleString()}</td>
      <td className="ttf">{order.matchedQty.toLocaleString()}</td>
      <td className="ttg">{order.price.toFixed(2)}</td>
      <td className={getStatusClass(order.status)}>{order.status}</td> {/* Trạng thái */}
      <td className="tth">{order.cancelTime}</td>
      <td className="tti">{order.orderKind}</td>
      <td className="actions-cell">
        <img src={edit} alt="edit" className="action-icon" />
        <img src={Trash} alt="trash" className="action-icon" />
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default OrderBookTabs;