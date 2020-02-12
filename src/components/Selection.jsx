import React from 'react';
import PropTypes from 'prop-types';

let hovered = true;

function Selection(props){
  const hideStyle = {
    color: 'red'
  }
  const showStyle = {
    color: 'blue'
  }
  const toggleHover = () => {
    console.log("Hovered: ", hovered);
    hovered = !hovered;
  }
  return(
    <div>
      <h3 onMouseEnter = {toggleHover} style = {hovered ? hideStyle : showStyle}>{props.month}</h3>
      <ul>
        <li><style jsx>{`
        li {
           
           }
        li :hover {
          visibility: visible;
           }
        `}</style>{props.selection} 
        </li>
      </ul>
    </div>
  );
}

Selection.propTypes={
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Selection;

 <style jsx>{`
div {
  font-size: 0;
}
div :hover {
  font-size: 12;
}
`}</style> 