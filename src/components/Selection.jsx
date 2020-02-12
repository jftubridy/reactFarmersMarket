import React from 'react';
import PropTypes from 'prop-types';

// let hovered = true;

// function Selection(props){
//   const hideStyle = {
//     color: 'red'
//   }
//   const showStyle = {
//     color: 'blue'
//   }
//   const toggleHover = () => {
//     console.log("Hovered: ", hovered);
//     hovered = !hovered;
//   }
//   return(
//     <div>
//       <h3 onMouseEnter = {toggleHover} style = {hovered ? hideStyle : showStyle}>{props.month}</h3>
//       <ul>
//         <li><style jsx>{`
//         li {
           
//            }
//         li :hover {
//           visibility: visible;
//            }
//         `}</style>{props.selection} 
//         </li>
//       </ul>
//     </div>
//   );
// }
// ---------This commented out code is the one that actually toggles when hovering the Months, however hiding/showing it not functional yet

function Selection(props){
  return(
    <div>
      <h3>{props.month}</h3>
      <ul>
        <li><style jsx>{`
        li{
          color: white
        }
        li:hover {
          color: black
        }
      `}</style>{props.selection}</li>
      </ul>
    </div>
  );
}
//       {/* -------This code is faking hidden */}

// function Selection(props){
//   return(
//     <div>
//       <h3 id="a"><style jsx>{`
//         ~#b {
//           visibility: hidden
//         }
//         #a:hover ~#b {
//           visibility: visible
//         }
//       `}</style>{props.month}</h3>
//       <ul>
//         <li id="b">{props.selection}</li>
//       </ul>
//     </div>
//   );
// }  
// ------This code is trying to use general sibling selector (~) to use h3 to effect li, unsuccessful.

Selection.propTypes={
  month: PropTypes.string.isRequired,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Selection;


