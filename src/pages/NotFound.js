import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="display-4">404</h1>
      <p className="lead">ขออภัย! ไม่พบหน้าที่คุณต้องการ</p>
      <Link to="/" className="btn btn-primary">กลับหน้าหลัก</Link>
    </div>
  );
}

export default NotFound;
