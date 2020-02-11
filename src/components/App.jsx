import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import MonthlyProduce from './AvailableProduce';

function App() {
  return (
    <div>
      <Header />
      <hr/>
      <MarketSchedule />
      <hr/>
      <MonthlyProduce />
    </div>
  );
}

export default App;
