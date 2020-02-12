import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

    <h2><style jsx> {`
    h2 {
      color: black;
    }
    h2:hover {
      color: green;
    }
    `}</style>Farmers Market Schedule</h2>
    <Link to='/'>Home</Link> | <Link to='/Month'>Monthly Available Produce</Link>
    </div>
  );
}

export default Header;