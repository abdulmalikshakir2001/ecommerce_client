import React from 'react';
import Menu from './Menu';
import '../styles.css';

const Layout = ({
  title = 'Title',
  description = 'Description',
  className,
  children,
}) => (
  <div style={{marginTop:"64px"}}>
    <Menu />
    
    
    <div className={className}>{children}</div>
  </div>
);

export default Layout;
