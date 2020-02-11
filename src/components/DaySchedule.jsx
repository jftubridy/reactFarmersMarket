import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return (
    <div>
      <h3>{props.day} - Location: {props.location}</h3>
      <h3>From {props.hours} at Booth {props.booth}</h3>
      <hr />
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default Schedule;

// MyExampleComponent.propTypes = {
//   exampleArray: PropTypes.array,
//   exampleBoolean: PropTypes.bool,
//   exampleFunction: PropTypes.func,
//   exampleNumber: PropTypes.number,
//   exampleObject: PropTypes.object,
//   exampleString: PropTypes.string,
//   exampleSymbol: PropTypes.symbol,
//   exampleReactElement: PropTypes.element,
// }
// exampleArrayOfNumbers: PropTypes.arrayOf(PropTypes.number),
// exampleArrayOfStrings: PropTypes.arrayOf(PropTypes.string),
// exampleClassTypeProp: PropTypes.instanceOf(ExampleClassName),
// optionalEnum: PropTypes.oneOf(['ExampleClass', 'AnotherExampleClass']),