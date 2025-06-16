// src/components/Loading.js
import React from 'react';
import loadingGif from '../assets/LoadingCat.gif'; // เปลี่ยนชื่อไฟล์ตามของคุณ

function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '80vh' }}
    >
      <img src={loadingGif} alt="Loading..." style={{ width: '100px' }} />
    </div>
  );
}

export default Loading;
