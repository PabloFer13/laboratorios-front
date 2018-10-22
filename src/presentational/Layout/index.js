import React from 'react';

const Layout = ({ children }) => (
  <div className='container-fluid'>
    <div></div>
    <div></div>
    <div>{children}</div>
  </div>
);

export default Layout;