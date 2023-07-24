import React from 'react';
import { saveAs } from 'file-saver';
import pdfFilePath from '../../../../../assets/academia-programas/marketing-emprendedores.pdf'

const PaymentsButton = () => {
  const handleDownload = () => {
    saveAs(pdfFilePath, 'marketing-emprendedores.pdf');
  };

  return (
    <button 
      className="btn btn-warning"
      onClick={handleDownload}>
      Descargar PDF
    </button>
  );
};

export default PaymentsButton;