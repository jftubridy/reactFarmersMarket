import React from 'react';

function Header() {
  return (
    <h2><style jsx> {`
    h2 {
      color: black;
    }
    h2:hover {
      color: green;
    }
    `}</style>Farmers Market Schedule</h2>
  );
}

export default Header;