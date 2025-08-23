import React, { useState, useMemo, useRef, useEffect } from 'react';
import styles from '../style/Bieudo.module.scss';

import Bieu_do from '../assets/Frame.svg';
import Row_one from '../assets/Row_one.svg';
import Row_two from '../assets/Row_two.svg';
import Row_three from '../assets/Row_three.svg';
import Row_four from '../assets/Row_four.svg';
import Row_five from '../assets/Row_five.svg';
import Row_six from '../assets/Row_six.svg';
import Row_seven from '../assets/Row_seven.svg';
import Row_eight from '../assets/Row_eight.svg';
import Row_nine from '../assets/Row_nine.svg';
import Row_ten from '../assets/Row_ten.svg';
import Row_eleven from '../assets/Row_eleven.svg';
import Row_twelve from '../assets/Row_twelve.svg';
import Row_thirdteen from '../assets/Row_thirdteen.svg';
import Row_fourteen from '../assets/Row_fourteen.svg';
import Kinhlup from '../assets/Kinhlupi.svg';
import Row from '../assets/Row.svg';

import Col_one from '../assets/Col_one.svg';
import Col_two from '../assets/Col_two.svg';
import Col_three from '../assets/Col_three.svg';
import Col_four from '../assets/Col_four.svg';
import Col_five from '../assets/Col_five.svg';
import Col_six from '../assets/Col_six.svg';
import Col_seven from '../assets/Col_seven.svg';
import Col_eight from '../assets/Col_eight.svg';
import Col_nine from '../assets/Col_nine.svg';
import Col_ten from '../assets/Col_ten.svg';
import Col_eleven from '../assets/Col_eleven.svg';
import Col_twelve from '../assets/Col_twelve.svg';
import Col_thirdteen from '../assets/Col_thirdteen.svg';
import Col_fourteen from '../assets/Col_fourteen.svg';
import Col_fifteen from '../assets/Col_fifteen.svg';

import Option from '../assets/Options.svg';
import Info from '../assets/Info.svg';


function Bieudo() {
  const [tab, setTab] = useState('assets'); // assets | tenGia | history | derivatives

  // ===== Data 10 Giá (raw) =====
  const rawTenGiaData = [
    { bidVol: 27,  bidPrice: 1415.10, askPrice: 1415.40, askVol: 11, bidColor: '#F8285A', askColor: '#17C653' },
    { bidVol: 128, bidPrice: 1415.10, askPrice: 1415.50, askVol: 52, bidColor: '#24253C', askColor: '#17C653' },
    { bidVol: 14,  bidPrice: 1414.90, askPrice: 1415.60, askVol: 17, bidColor: '#24253C', askColor: '#F8285A' },
    { bidVol: 49,  bidPrice: 1414.80, askPrice: 1415.70, askVol: 5, bidColor: '#24253C', askColor: '#17C653'  },
    { bidVol: 31,  bidPrice: 1414.70, askPrice: 1415.80, askVol: 50, bidColor: '#17C653', askColor: '#17C653' },
    { bidVol: 69,  bidPrice: 1414.60, askPrice: 1415.90, askVol: 37, bidColor: '#24253C', askColor: '#F8285A' },
    { bidVol: 123, bidPrice: 1414.50, askPrice: 1416.00, askVol: 30, bidColor: '#24253C', askColor: '#F8285A' },
    { bidVol: 3,  bidPrice: 1414.40, askPrice: 1416.10, askVol: 29, bidColor: '#24253C', askColor: '#F8285A' },
    { bidVol: 10,  bidPrice: 1414.30, askPrice: 1416.20, askVol: 39, bidColor: '#F8285A', askColor: '#17C653' },
    { bidVol: 6,   bidPrice: 1414.20, askPrice: 1416.30, askVol: 37, bidColor: '#24253C', askColor: '#F8285A' },
    { bidVol: 23,  bidPrice: 1414.10, askPrice: 1416.40, askVol: 156, bidColor: '#24253C', askColor: '#17C653'},
    { bidVol: 121,  bidPrice: 1413.90, askPrice: 1416.50, askVol: 23, bidColor: '#24253C', askColor: '#17C653' },
    { bidVol: 12,  bidPrice: 1413.80, askPrice: 1416.60, askVol: 37, bidColor: '#24253C', askColor: '#F8285A' },
    { bidVol: 35,  bidPrice: 1413.70, askPrice: 1416.70, askVol: 13, bidColor: '#24253C', askColor: '#F8285A' },
  ];

  // Tính độ sâu theo volume để vẽ dải nâu ở mép mỗi ô
  /*const tenGiaData = useMemo(() => {
    const maxVol = Math.max(
      ...rawTenGiaData.map(r => Math.max(r.bidVol, r.askVol))
    ) || 1;
    return rawTenGiaData.map(r => ({
      ...r,
      bidDepth: Math.round((r.bidVol / maxVol) * 100),
      askDepth: Math.round((r.askVol / maxVol) * 100),
    }));
  }, [rawTenGiaData]);*/



  const spreads = rawTenGiaData.map(r => Math.max(0, r.askPrice - r.bidPrice));
const maxSpread = Math.max(1e-6, ...spreads);
const spreadWidthPct = r => Math.round(((r.askPrice - r.bidPrice) / maxSpread) * 100);

  const tenGiaData = useMemo(() => {
  const vols = (rawTenGiaData ?? []).map(r =>
    Math.max(Number(r?.bidVol) || 0, Number(r?.askVol) || 0)
  );
  const maxVol = Math.max(1, ...vols); // luôn ≥ 1, an toàn khi mảng rỗng

  const pct = (v: number) =>
    Math.min(100, Math.max(0, Math.round(((Number(v) || 0) / maxVol) * 100)));

  return (rawTenGiaData ?? []).map(r => ({
    ...r,
    bidDepth: pct(r.bidVol),
    askDepth: pct(r.askVol),
  }));
}, [rawTenGiaData]);





  return (
    <div className={styles.bieudo}>
      {/* LEFT: cột icon + thanh công cụ + ảnh */}
      <div className={styles.bieudoLeft}>
        <div className={styles.bieudoIconColumn}>
          <img src={Col_one} alt="" className={styles.Col} />
          <img src={Col_two} alt="" className={styles.Col} />
          <img src={Col_three} alt="" className={styles.Col} />
          <img src={Col_four} alt="" className={styles.Col} />
          <img src={Col_five} alt="" className={styles.Col} />
          <img src={Col_six} alt="" className={styles.Col} />
          <img src={Col_seven} alt="" className={styles.Col} />
          <img src={Col_eight} alt="" className={styles.Col} />
          <img src={Col_nine} alt="" className={styles.Col} />
          <img src={Col_ten} alt="" className={styles.Col} />
          <img src={Col_eleven} alt="" className={styles.Col} />
          <img src={Col_twelve} alt="" className={styles.Col} />
          <img src={Col_thirdteen} alt="" className={styles.Col} />
          <img src={Col_fourteen} alt="" className={styles.Col} />
          <img src={Col_fifteen} alt="" className={styles.Col} />
        </div>

        <div className={styles.image}>
          <div className={styles.bieudoIconRow}>
            <div className={styles.RowOne}>
              <img src={Kinhlup} alt="" className={styles.Row} />
              AAPL
              <img src={Row_one} alt="" className={styles.Row} />
              <img src={Row} alt="" className={styles.Row} />
            </div>

            <img src={Row_two} alt="" className={styles.Row} />
            <img src={Row} alt="" className={styles.Row} />
            <img src={Row_three} alt="" className={styles.Row} />
            <img src={Row} alt="" className={styles.Row} />

            <div className={styles.RowTwo}>
              <img src={Row_four} alt="" className={styles.Row} />
              Indicators
              <img src={Row_five} alt="" className={styles.Row} />
            </div>

            <img src={Row} alt="" className={styles.Row} />

            <div className={styles.RowThfree}>
              <span className={styles.item}>
                <img src={Row_six} alt="" className={styles.Row} />
                <span>Alert</span>
              </span>
              <span className={styles.item}>
                <img src={Row_seven} alt="" className={styles.Row} />
                <span>Replay</span>
              </span>
            </div>

            <img src={Row} alt="" className={styles.Row} />
            <img src={Row_eight} alt="" className={styles.Row} />
            <img src={Row_nine} alt="" className={styles.Rows} />
            <img src={Row_ten} alt="" className={styles.Row} />
            Unnamed
            <img src={Option} alt="" className={styles.option} />
            <img src={Row} alt="" className={styles.Row} />

            <div className={styles.RowEnd}>
              <img src={Row_eleven} alt="" className={styles.Row} />
              <img src={Row_twelve} alt="" className={styles.Row} />
              <img src={Row_thirdteen} alt="" className={styles.Row} />
              <img src={Row_fourteen} alt="" className={styles.Row} />
            </div>
          </div>

          <div className={styles.bieudoImage}>
            <img src={Bieu_do} alt="Biểu đồ" className={styles.size} />
          </div>
        </div>
      </div>

      {/* RIGHT: tabs + content */}
      <div className={styles.bieudoInfoPanel}>
        <div className={styles.bieudoTabs}>
          <button
            className={tab === 'assets' ? styles.bieudoTabActiveOne : styles.bieudoTabOne}
            onClick={() => setTab('assets')}
          >
            Tài sản
          </button>
          <button
            className={tab === 'tenGia' ? styles.bieudoTabActiveTwo : styles.bieudoTabOne}
            onClick={() => setTab('tenGia')}
          >
            10 Giá
          </button>
          <button
            className={tab === 'history' ? styles.bieudoTabActiveThree : styles.bieudoTabTwo}
            onClick={() => setTab('history')}
          >
            Lịch sử giao dịch
          </button>
          <button
            className={tab === 'derivatives' ? styles.bieudoTabActiveFour : styles.bieudoTabThree}
            onClick={() => setTab('derivatives')}
          >
            Mã phái sinh
          </button>
        </div>
    

        {tab === 'assets' && (
          <div className={styles.bieudoContent}>
            <div className={styles.infoRow}><span>Tổng lợi nhuận</span><span>10,046.59</span></div>
            <div className={styles.infoRow}><span>Mã hợp đồng</span><span>VN30F2501</span></div>
            <div className={styles.infoRow}><span>Vị thế</span><span>--</span></div>
            <div className={styles.infoRow}><span>Lãi lỗ</span><div className={styles.xanh}>2,046.59</div></div>
            <div className={styles.infoRow}>
              <div className={styles.infos}><span>Sức mua (357007)</span><img src={Info} alt="" className={styles.info} /></div>
              <span>--</span>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infos}><span>Lãi/lỗ chưa đóng</span><img src={Info} alt="" className={styles.info} /></div>
              <span>--</span>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infos}><span>Tổng tài sản</span><img src={Info} alt="" className={styles.info} /></div>
              <span>120,000,0000</span>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infos}><span>Tiền mặt</span><img src={Info} alt="" className={styles.info} /></div>
              <span>--</span>
            </div>
            <div className={styles.infoRow}>
              <div className={styles.infos}><span>Tiền ký quỹ tại VSD</span><img src={Info} alt="" className={styles.info} /></div>
              <span>--</span>
            </div>
            <div className={styles.infoRow}><span>Ký quỹ ban đầu</span><span>--</span></div>
            <div className={styles.infoRow}><span>Phí giao dịch + thuế</span><span>--</span></div>
            <div className={styles.infoRow}><span>Tỷ lệ sử dụng TSKQ</span><span>--</span></div>
            <div className={styles.infoRow}><span>Tỷ lệ an toàn</span><span>100%</span></div>
            <div className={styles.infoRow}><span>Phí trả VSD</span><span>500.00</span></div>
          </div>
        )}

        {tab === 'tenGia' && (
          <div className={styles.tenGiaWrap}>
            <div className={styles.tenGiadiv}>
                <div className={styles.title}>
                  <div className={styles.titleOne}>Bid volume</div>
                  <div className={styles.titleTwo}>Bid price</div>
                  <div className={styles.titleTwo}>Ask price</div>
                  <div className={styles.titleOne}>Ask volume</div>
                </div>
              <div>
  {tenGiaData.map((r, i) => (
    <div key={i}>
      <div className={styles.bidVol}>
        <div className={styles.data} style={{ backgroundColor: r.bidColor }}>{r.bidVol}</div>
      </div>

      {/* Dải nâu ở lề phải ô Bid price */}
      <div
        className={styles.bidPrice}
        style={{ '--bidw': `${r.bidDepth ?? r.depth}%` }}
      >
        <div>{r.bidPrice.toFixed(2)}</div>
      </div>

      {/* Dải nâu ở lề trái ô Ask price */}
      <div
        className={styles.askPrice}
        style={{ '--askw': `${r.askDepth ?? r.depth}%` }}
      >
        <div>{r.askPrice.toFixed(2)}</div>
      </div>

      <div className={styles.askVol}>
        <div className={styles.data} style={{ backgroundColor: r.askColor }}>{r.askVol}</div>
      </div>
    </div>
  ))}
</div>

            </div>
          </div>
        )}

        {tab === 'history' && (
          <div className={styles.bieudoContent}>
            <div>10:02 • Khớp Long 1 HĐ @ 1323.5</div>
            <div>09:58 • Đặt Short 1 HĐ @ 1325.0</div>
          </div>
        )}

        {tab === 'derivatives' && (
          <div className={styles.bieudoContent}>
            <div className={styles.infoRow}><span>Mã</span><span>VN30F2501</span></div>
            <div className={styles.infoRow}><span>Ngày ĐH</span><span>12-04-2024</span></div>
            <div className={styles.infoRow}><span>Bước giá</span><span>0.1</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Bieudo;
