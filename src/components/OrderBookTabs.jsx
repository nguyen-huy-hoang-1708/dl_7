import React from 'react';
import styles from '../style/OrderBookTabs.module.scss';
import checkbox from '../assets/Checkbox.svg'; 
import nocheckbox from '../assets/Nocheckbox.svg';
import Trash from '../assets/Trash.svg'; 
import edit from '../assets/Edit.svg';   
import kinhlup from '../assets/Kinhlup.svg';
import Funnel from '../assets/Funnel.svg';
import full from '../assets/Full.svg';

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
    id: 268919,
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
        return styles.textYellow;
      case 'Chờ gửi lên Sở':
        return styles.textOrange;
      case 'Khớp 1 phần':
        return styles.textBlue;
      case 'Khớp hết':
        return styles.textGreen;
      case 'Lệnh đã bị huỷ':
        return styles.textRed;
      default:
        return styles.textWhite;
    }
  }

  return (
    <div className={styles.orderBookTabs}>
      <div className={styles.orderTabs}>
       <div className={styles.title}>
        <div className={styles.thuong}>
          Danh sách lệnh thường
        </div>
        <div className={styles.dieukien}>Danh sách lệnh điều kiện</div>
       </div>
        <img src={full} alt="full" className={styles.full} />
      </div>

      <div className={styles.divider}></div>

      <div className={styles.hidden}>
        <span> SUMMARY TABLE </span>
      </div>

      <table>
        <thead>
          <tr className={styles.tr}>
            <th><img src={nocheckbox} alt="tick" className={styles.headerIcon} /></th>
            <th>
              <span className={styles.thWithIcon}>
                Số hiệu lệnh
                <img src={kinhlup} alt="kinhlup" className={styles.kinhlup} />
              </span>
            </th>
            <th>
              <span className={styles.thWithIcon}>
                Thời gian
                <img src={Funnel} alt="funnel" className={styles.funnel} />
              </span>
            </th>
            <th>
              <span className={styles.thWithIcon}>
                Client ID
                <img src={kinhlup} alt="kinhlup" className={styles.kinhlup} />
              </span>
            </th>
            <th>
              <span className={styles.thWithIcon}>
                Tài khoản
                <img src={kinhlup} alt="kinhlup" className={styles.kinhlup} />
              </span>
            </th>
            <th>Lệnh</th>
            <th>
              <span className={styles.thWithIcon}>
                Mã CK
                <img src={kinhlup} alt="kinhlup" className={styles.kinhlup} />
              </span>
            </th>
            <th>KL đặt</th>
            <th>KL khớp</th>
            <th>Giá đặt</th>
            <th>
              <span className={styles.thWithIcon}>
                Trạng thái
                <img src={Funnel} alt="funnel" className={styles.funnel} />
              </span>
            </th>
            <th>
              <span className={styles.thWithIcon}>
                Thời gian huỷ
                <img src={Funnel} alt="funnel" className={styles.funnel} />
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
                  className={styles.rowIcon}
                />
              </td>
              <td className={styles.highlightId}>{order.id}</td>
              <td className={styles.tta}>{order.time}</td>
              <td className={styles.ttb}>{order.clientId}</td>
              <td className={styles.ttc}>{order.account}</td>
              <td className={order.orderType === 'Long' ? styles.textGreen : styles.textRed}>
                {order.orderType}
              </td>
              <td className={styles.ttd}>{order.stockCode}</td>
              <td className={styles.tte}>{order.orderQty.toLocaleString()}</td>
              <td className={styles.ttf}>{order.matchedQty.toLocaleString()}</td>
              <td className={styles.ttg}>{order.price.toFixed(2)}</td>
              <td className={getStatusClass(order.status)}>{order.status}</td>
              <td className={styles.tth}>{order.cancelTime}</td>
              <td className={styles.tti}>{order.orderKind}</td>
              <td className={styles.actionsCell}>
                <img src={edit} alt="edit" className={styles.actionIcon} />
                <img src={Trash} alt="trash" className={styles.actionIcon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderBookTabs;
