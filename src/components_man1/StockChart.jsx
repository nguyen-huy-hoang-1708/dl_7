import React from 'react';
import styles from '../style/StockChart.module.scss';
import Option from '../assets/Option.svg';

function StockChart() {
  return (
    <div className={styles.stockChart}>
      <div className={styles.stockRowScroll}>
        <div className={styles.stockItem}>
          <div className={styles.label}>
            Mã CK
            <img src={Option} alt="Option" className={styles.optionIcon} />
          </div>
          <div className={`${styles.value} ${styles.yellow}`}>VN30F2501</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>Ngày ĐH</div>
          <div className={`${styles.value} ${styles.white}`}>12 - 04 - 2024</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>Trần</div>
          <div className={`${styles.value} ${styles.purple}`}>1,220.3</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>Sàn</div>
          <div className={`${styles.value} ${styles.blue}`}>950.0</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>T/C</div>
          <div className={`${styles.value} ${styles.yellow}`}>1,050.0</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>Giá khớp</div>
          <div className={`${styles.value} ${styles.yellow}`}>1,050.0</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>KL khớp</div>
          <div className={styles.value}>--</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>+/-</div>
          <div className={`${styles.value} ${styles.yellow}`}>0.00</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>+/- (%)</div>
          <div className={`${styles.value} ${styles.yellow}`}>0.00%</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>Tổng KL</div>
          <div className={styles.value}>--</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>Cao</div>
          <div className={styles.value}>--</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>Thấp</div>
          <div className={styles.value}>--</div>
        </div>

        <div className={styles.stockItem}>
          <div className={styles.label}>Giá đầu ngày</div>
          <div className={styles.value}>--</div>
        </div>
      </div>
    </div>
  );
}

export default StockChart;
