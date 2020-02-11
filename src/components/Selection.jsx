import React from 'react';
import PropTypes from 'prop-types';

function Selection(props){
  return(
    <div>
      <h3>{props.month}</h3>
      <ul>
        <li>{props.selection}</li>
      </ul>
    </div>
  );
}

Selection.propTypes={
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Selection;

{/* <style jsx>{`
div {
  font-size: 0;
}
div :hover {
  font-size: 12;
}
`}</style> */}