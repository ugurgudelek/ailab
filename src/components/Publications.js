import React from 'react';
import '../css/styles.css';
import Paper from './Paper';
import Pdf from './pdfs/sample.pdf';
import PdfPrev from '../assets/img/pdf_preview/pdfsample.png';
import PdfPrev2 from '../assets/img/pdf_preview/pdfsample2.png';
 
const Publications = () => {
    return (
        <section className="page-section bg-light mt-4 pb-0">
            <h3 className="text-center bg-dark-2 text-light pt-4 pb-4 mt-0 mb-5">PUBLICATIONS</h3>
            <Paper name="Paper1" date="mm.dd.yy" link={Pdf} pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}/>
            <Paper name="Paper2" date="mm.dd.yy" link={Pdf} pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}/>
            <Paper name="Paper3" date="mm.dd.yy" link={Pdf} pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}/>
            <Paper name="Paper4" date="mm.dd.yy" link={Pdf} pdflink={PdfPrev} pdflink2={PdfPrev2} pdflink3={PdfPrev} pdflink4={PdfPrev2}/>
        </section>
    );
}

export default Publications;