import React from 'react';
import Header from './Header';
import MarketSchedule from './MarketSchedule';
import MonthlyProduce from './AvailableProduce';
import Month from './Month';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <hr/>
      <Switch>
        <Route exact path='/' component={MarketSchedule} />
        <Route exact path='/Month' component={Month} />
      <hr/>
      {/* <Month /> */}
      </Switch>
      
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