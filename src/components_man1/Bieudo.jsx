import React from 'react';
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
  return (
    <div className={styles.bieudo}>
      {/* Phần bên trái: Icon + Biểu đồ */}
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
          <img src={Kinhlup} alt="" className={styles.Row}/>
          AAPL
          <img src={Row_one} alt="" className={styles.Row}/>
          <img src={Row} alt="" className={styles.Row}/>
         </div>
          <img src={Row_two} alt="" className={styles.Row}/>
          <img src={Row} alt="" className={styles.Row}/>
          <img src={Row_three} alt="" className={styles.Row}/>
          <img src={Row} alt="" className={styles.Row}/>
         <div className={styles.RowTwo}>
          <img src={Row_four} alt="" className={styles.Row}/>
          Indicators
          <img src={Row_five} alt="" className={styles.Row}/>
         </div>
          <img src={Row} alt="" className={styles.Row}/>
         <div className={styles.RowThfree}>
           <span className={styles.item}>
            <img src={Row_six} alt="" className={styles.Row}/>
            <span>Alert</span>
           </span>
          <span className={styles.item}>
             <img src={Row_seven} alt="" className={styles.Row}/>
             <span>Replay</span>
          </span>
         </div>

          <img src={Row} alt="" className={styles.Row}/>
          <img src={Row_eight} alt="" className={styles.Row}/>
          <img src={Row_nine} alt="" className={styles.Rows}/>
          <img src={Row_ten} alt="" className={styles.Row}/>
          Unnamed 
          <img src={Option} alt="" className={styles.option}/>
          <img src={Row} alt="" className={styles.Row}/>
          <div className={styles.RowEnd}>
           <img src={Row_eleven} alt="" className={styles.Row}/>
           <img src={Row_twelve} alt="" className={styles.Row}/>
           <img src={Row_thirdteen} alt="" className={styles.Row}/>
           <img src={Row_fourteen} alt="" className={styles.Row}/>
          </div>
         </div>
            <div className={styles.bieudoImage}>
            <img src={Bieu_do} alt="Biểu đồ" className={styles.size} />
           </div>
        </div>
      </div>
      
      {/* Phần bên phải: Panel thông tin */}
      <div className={styles.bieudoInfoPanel}>
        <div className={styles.bieudoTabs}>
          <button className={styles.bieudoTabActive}>Tài sản</button>
          <button className={styles.bieudoTabOne}>10 Giá</button>
          <button className={styles.bieudoTabTwo}>Lịch sử giao dịch</button>
          <button className={styles.bieudoTabThree}>Mã phái sinh</button>
        </div>

        <div className={styles.bieudoContent}>
          <div className={styles.infoRow}>
            <span>Tổng lợi nhuận</span>
            <span>10,046.59</span>
          </div>
          <div className={styles.infoRow}>
            <span>Mã hợp đồng</span>
            <span>VN30F2501</span>
          </div>
          <div className={styles.infoRow}>
            <span>Vị thế</span>
            <span>--</span>
          </div>
          <div className={styles.infoRow}>
            <span>Lãi lỗ</span>
            <div className={styles.xanh}>2,046.59</div>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infos}>
            <span>Sức mua (357007)</span>
            <img src={Info} alt="" className={styles.info} />
            </div>
            <span>--</span>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infos}>
            <span>Lãi/lỗ chưa đóng</span>
            <img src={Info} alt="" className={styles.info} />
            </div>
            <span>--</span>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infos}>
            <span>Tổng tài sản</span>
            <img src={Info} alt="" className={styles.info} />
            </div>
            <span>120,000,0000</span>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infos}>
            <span>Tiền mặt</span>
            <img src={Info} alt="" className={styles.info} />
            </div>
            <span>--</span>
          </div>
          <div className={styles.infoRow}>
            <div className={styles.infos}>
            <span>Tiền ký quỹ tại SVD</span>
            <img src={Info} alt="" className={styles.info} />
            </div>
            <span>--</span>
          </div>
          <div className={styles.infoRow}>
            <span>Ký quỹ ban đầu</span>
            <span>--</span>
          </div>
          <div className={styles.infoRow}>
            <span>Phí giao dịch + thuế</span>
            <span>--</span>
          </div>
          <div className={styles.infoRow}>
            <span>Tỷ lệ sử dụng TSKQ</span>
            <span>--</span>
          </div>
          <div className={styles.infoRow}>
            <span>Tỷ lệ an toàn</span>
            <span>100%</span>
          </div>
          <div className={styles.infoRow}>
            <span>Phí trả SVD</span>
            <span>500.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bieudo;
