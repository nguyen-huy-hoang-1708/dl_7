import React from 'react';
import TopNavbar from './components_man1/TopNavbar.jsx';
import MarketSummary from './components_man1/MarketSummary.jsx';
import StockChart from './components_man1/StockChart.jsx';
import OrderForm from './components_man1/OrderForm.jsx';
import OrderBookTabs from './components_man1/OrderBookTabs.jsx';
import Bieudo from './components_man1/Bieudo.jsx';
import Footer from './components_man1/Footer.jsx';
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
