import React from 'react';
import '../style/MarketSummary.css';
import Up from '../assets/Up.svg';
import Down from '../assets/Down.svg';
import vuong from '../assets/Vuong.svg';

const marketData = [
  {
    name: 'VN-INDEX',
    value: '1,283.26 (15.96 1.26%)',
    shares: '895,786,314 Cổ phần',
    volume: '21,396.060 Tỷ',
    up: Up,
    one: '200',
    two: '(4)',
    vuong:vuong,
    three:59,
    down: Down,
    four:111,
    five: '(0)',
    status: 'Chờ nhận lệnh'
  },
  {
    name: 'VN30',
    value: '1,372.04 (19.79 1.46%)',
    shares: '482,264,152 Cổ phần',
    volume: '13,283.441 Tỷ',
    up: Up,
    one: '27',
    two: '(0)',
    vuong:vuong,
    three:1,
    down: Down,
    four:2,
    five: '(0)',
    status: 'Chờ nhận lệnh'
  },
  {
    name: 'VNXALL',
    value: '0 (0/0%)',
    shares: '905,524,492 Cổ phần',
    volume: '21,524.209 Tỷ',
    up: Up,
    one: '241',
    two: '(0)',
    vuong:vuong,
    three:94,
    down: Down,
    four:123,
    five: '(0)',
    status: 'Chờ nhận lệnh'
  },
  {
    name: 'HNX-INDEX',
    value: '216.04 (1.91 0.89%)',
    shares: '56,598,636 Cổ phần',
    volume: '933.220 Tỷ',
    up: Up,
    one: '104',
    two: '(10)',
    vuong:vuong,
    three:69,
    down: Down,
    four:56,
    five: '(4)',
    status: 'Chờ nhận lệnh'
  },
  {
    name: 'HNX-UPCOMINDEX',
    value: '93.59 (0.19 0.20%)',
    shares: '46,870,777 Cổ phần',
    volume: '1,509.460 Tỷ',
    up: Up,
    one: '192',
    two: '(14)',
    vuong:vuong,
    three:76,
    down: Down,
    four:92,
    five: '(4)',
    status: 'Chờ nhận lệnh'
  }
];

function MarketSummary() {
  return (
    <div className="market-summary">
      {marketData.map((item, index) => (
        <div key={index} className="market-item">
          {/* Hàng 1: name + value */}
          <div className="row row-1">
            <div className="name">{item.name}</div>
            <div className="value" style={{ color: index === 2 ? '#99A1B7' : '#17C653' }}>{item.value}</div>
          </div>

          {/* Hàng 2: shares + volume */}
          <div className="row row-2">
            <div className="shares">{item.shares}</div>
            <div className="volume">{item.volume}</div>
          </div>

          {/* Hàng 3: status */}
         <div className="row row-3">
  <div className="stats-icons">
    <img src={item.up} alt="Up" className="icon" />
    <span style={{ color: '#17C653' }}>{item.one}</span>
    <span style={{ color: '#9E63FF' }}>{item.two}</span>
    <img src={item.vuong} alt="Vuong" className="icon vuong-icon" />
    <span style={{ color: '#F6B100' }}>{item.three}</span>

    <img src={item.down} alt="Down" className="icon" />
    <span style={{ color: '#F8285A' }}>{item.four}</span>
    <span style={{ color: '#00CECE' }}>{item.five}</span>
  </div>
  <div className="status">{item.status}</div>
</div>

        </div>
      ))}
    </div>
  );
}

export default MarketSummary;
