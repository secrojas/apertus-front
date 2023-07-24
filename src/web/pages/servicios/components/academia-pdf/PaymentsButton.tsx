import React from 'react';
import { saveAs } from 'file-saver';
import pdfFilePath from '../../../../../assets/academia-programas/liquidacion-sueldos.pdf'

const MarketingButton = () => {
  const handleDownload = () => {
    saveAs(pdfFilePath, 'liquidacion-sueldos.pdf');
  };

  return (
    <button 
      className="btn btn-warning"
      onClick={handleDownload}>
      Descargar PDF
    </button>
  );
};

export default MarketingButton;