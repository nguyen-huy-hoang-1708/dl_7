/*import React from 'react';
import styles from '../style/OrderForm.module.scss';
import Option from '../assets/Option.svg';

function OrderForm() {
  return (
    <div className={styles.orderForm}>
      <div className={styles.setup}>
        <h3 className={styles.gradient}>Giao dịch</h3>
        <h3 className={styles.padding}>Cài đặt</h3>
      </div>

      <div className={styles.divider}></div>

      <label className={styles.title}>Mã chứng khoán</label>
      <button className={styles.option}>
        VN30F2501
        <img src={Option} alt="option" className={styles.op} />
      </button>

      <div className={styles.orderType}>
        <button className={styles.lenhThuong}>Lệnh thường</button>
        <button className={styles.lenhDieuKien}>
          Lệnh điều kiện
          <img src={Option} alt="option" className={styles.ok} />
        </button>
      </div>

      <label className={styles.loaiLenh}>Loại lệnh</label>
      <div className={styles.orderMode}>
        <button className={styles.modeActive}>ATO</button>
        <button className={styles.mode}>ATC</button>
        <button className={styles.mode}>MOK</button>
        <button className={styles.mode}>MTL</button>
        <button className={styles.mode}>MAK</button>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Giá đặt</label>
        <div className={styles.inputControl}>
          <button className={styles.btn}>−</button>
          <span type="number" className={styles.inputField}>
            1,220.3
          </span>
          <button className={styles.btn}>+</button>
        </div>

        <label className={styles.inputLabel}>Khối lượng</label>
        <div className={styles.inputControl}>
          <button className={styles.btn}>−</button>
          <span type="number" className={styles.inputField}>
            1,000.0
          </span>
          <button className={styles.btn}>+</button>
        </div>

        <div className={styles.positionButtons}>
          <button className={styles.btnLong}>Long</button>
          <button className={styles.btnShort}>Short</button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
*/

import React  from 'react';
import styles from '../style/OrderForm.module.scss';
import Option from '../assets/Option.svg';

function OrderForm() {
  return (
    <div className={styles.orderForm}>
      <div className={styles.setup}>
        <h3 className={styles.gradient} >Giao dịch</h3>
        <h3 className={styles.padding}>Cài đặt</h3>
      </div>

      <div className={styles.divider}></div>

      <label className={styles.title}>Mã chứng khoán</label>
      <button className={styles.option}>
        VN30F2501
        <img src={Option} alt="option" className={styles.op} />
      </button>

      <div className={styles.orderType}>
        <button className={styles.Lenh}>Lệnh thường</button>
        <button className={styles.lenh}>
          <span>Lệnh điều kiện</span>
          <img src={Option} alt="option" className={styles.ok} />
        </button>
      </div>

      <label className={styles.Loailenh}>Loại lệnh</label>
      <div className={styles.orderMode}>
        <button className={styles.modeActive}>ATO</button>
        <button className={styles.mode}>ATC</button>
        <button className={styles.mode}>MOK</button>
        <button className={styles.mode}>MTL</button>
        <button className={styles.mode}>MAK</button>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.inputLabel}>Giá đặt</label>
        <div className={styles.inputControl}>
          <button className={styles.btn}>−</button> 
          <span type="number" className={styles.inputField} >
          1,220.3
          </span>
          <button className={styles.btn}>+</button>
        </div>

        <label className={styles.inputLabel}>Khối lượng</label>
        <div className={styles.inputControl}>
          <button className={styles.btn}> −  </button>
          <span type="number" className={styles.inputField} >
          1,000.0
          </span>
          <button className={styles.btn}>+</button>
        </div>

        <div className={styles.positionButtons}>
          <button className={styles.btnLong}>Long</button>
          <button className={styles.btnShort}>Short</button>
        </div>
      </div>
    </div>
  );
}




export default OrderForm;