import React from 'react';


export const Arrow = ({ fill = '#F5F5DC', ...props }) => {
  return (
    <svg {...props} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line */}
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46181 5.70301L9.01167 2.15315L7.34142 0.48291L0.940658 6.88368L7.34142 13.2844L9.01167 11.6142L5.46181 8.06434H13.7422V5.70301H5.46181Z" fill={fill}/>
    </svg>

  );
};
