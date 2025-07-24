import React from 'react';
import TopNavbar from './components/TopNavbar';
import MarketSummary from './components/MarketSummary';
import StockChart from './components/StockChart';
import OrderForm from './components/OrderForm';
import OrderBookTabs from './components/OrderBookTabs';
import Bieudo from './components/Bieudo';
import Footer from './components/Footer';
import './index.css';
/*import './style/Responsive.css';*/
function App() {
  return (
    <div className="app-container">
      <TopNavbar />
<div style={{ padding: 2 }}>
  <MarketSummary />
</div>
<div style={{ padding: 2 }}>
  <StockChart />
</div>
      <div className="main-content">
        <div className="left-column">
          <Bieudo />
          <OrderBookTabs />
        </div>
        <div className="right-column">
          <OrderForm />
        </div>
      </div>
       <Footer />
    </div>
  );
}


export default App;
