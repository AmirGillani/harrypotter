import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

function saveDivAsPDF() {
    alert("reached")
    const div = document.getElementById('cards'); // Get the div to be captured as PDF
    
    // Use html2canvas to render the div into a canvas
    html2canvas(div, {
        useCORS: true,  // Allow loading of external images
        scrollX: 0,
        scrollY: -window.scrollY,
        logging: true,  // Enable for debugging
        backgroundColor: null,  // Transparent background
    }).then(function (canvas) {
        const pdf = new jsPDF();

        // Convert canvas to image data
        const imgData = canvas.toDataURL('image/png');

        // Calculate scaling to fit PDF page
        const pageWidth = pdf.internal.pageSize.width;
        const pageHeight = pdf.internal.pageSize.height;
        const scaleX = pageWidth / canvas.width;
        const scaleY = pageHeight / canvas.height;
        const scaleFactor = Math.min(scaleX, scaleY);

        const imgWidth = canvas.width * scaleFactor;
        const imgHeight = canvas.height * scaleFactor;

        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

        // Save the PDF
        pdf.save('myDiv.pdf');
    }).catch(function (error) {
        console.error('Error generating the PDF:', error);
    });
}
