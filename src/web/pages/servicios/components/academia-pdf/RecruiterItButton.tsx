import React from 'react';
import { saveAs } from 'file-saver';
import pdfFilePath from '../../../../../assets/academia-programas/reclutamiento-it.pdf'

const RecruiterItButton = () => {
  const handleDownload = () => {
    saveAs(pdfFilePath, 'reclutamiento-it.pdf');
  };

  return (
    <button 
      className="btn btn-warning"
      onClick={handleDownload}>
      Descargar PDF
    </button>
  );
};

export default RecruiterItButton;