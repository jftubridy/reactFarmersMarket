import React from 'react';
import PropTypes from 'prop-types';

function Selection(props){
  return(
    <div>
      <ul>
        <li>{props.selection}</li>
      </ul>
    </div>
  );
}

Selection.propTypes={
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Selection;