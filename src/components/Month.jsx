import React from 'react';
import Selection from './Selection';

var monthSelection = [
  {month: 'January'},
  {month: 'February'},
  {month: 'March'},
  {month: 'April'},
  {month: 'May'},
  {month: 'June'},
  {month: 'July'},
  {month: 'August'},
  {month: 'September'},
  {month: 'October'},
  {month: 'November'},
  {month: 'December'}
];

function Month(){
  return(
    <div>
      {monthSelection.map((selection, index) =>
        <Selection month={selection.month}
          key={index}/>
      )}
    </div>
  );
}

export default Month;