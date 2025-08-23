import React from 'react';
import TopNavbar from './components/TopNavbar.jsx';
import MarketSummary from './components/MarketSummary.jsx';
import StockChart from './components/StockChart.jsx';
import OrderForm from './components/OrderForm.jsx';
import OrderBookTabs from './components/OrderBookTabs.jsx';
import Bieudo from './components/Bieudo.jsx';
import Footer from './components/Footer.jsx';
import './index.scss';
import './style/Fonts.module.scss';

function App() {
  return (
    <div className="app-container">
      {/* Thanh top */}
      <TopNavbar />

      {/* Thanh Market Summary */}
      <div className="MarketSummary">
        <MarketSummary />
      </div>

      <div className="StockChart">
        <StockChart />
      </div>

      {/* Nội dung chính */}
      <div className="main-content">
        {/* Cột trái: Bieudo + OrderBook */}
        <div className="left-column">
          <Bieudo />
          <OrderBookTabs />
        </div>

        {/* Cột phải: OrderForm */}
        <div className="right-column">
          <OrderForm />
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
