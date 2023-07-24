import React from 'react';
import { saveAs } from 'file-saver';
import pdfFilePath from '../../../../../assets/academia-programas/analista-rrhh.pdf'

const AnalystButton = () => {
  const handleDownload = () => {
    saveAs(pdfFilePath, 'analista-rrhh.pdf');
  };

  return (
    <button 
      className="btn btn-warning"
      onClick={handleDownload}>
      Descargar PDF
    </button>
  );
};

export default AnalystButton;