import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import MonthlyProduce from './AvailableProduce';
import Month from './Month';

function App() {
  return (
    <div>
      <Header />
      <hr/>
      <MarketSchedule />
      <hr/>
      <Month />
      
    </div>
  );
}

export default App;


{/* <style jsx>{`
    div {
      visibility: hidden;
    }
    div :hover {
      visibility: visible;
    }
  `}</style> */}