import React from "react";

const Top = () => {
  function handlePesan() {
    alert('Halaman Top');
  }

  return (
    <a href='/' onClick={handlePesan}>
      Halaman Top
    </a>
  );
};

export default Top;