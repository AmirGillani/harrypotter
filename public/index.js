

document.addEventListener("DOMContentLoaded", function () {

  // Get the link element
  const form = document.getElementById("form");

  const selectBox = document.getElementById("house");

  const img = document.getElementById("photo");

  const downloadPdf = document.getElementById("download-pdf");

  let house;

  let photo;

  selectBox.addEventListener("change", (e) => {
    house = e.target.value;
  });

  img.addEventListener("change", (e) => {
    const file = e.target.files[0]; // Correct way to access the file

    if (file) {
        // Check if the file is an image
        if (file.type.startsWith('image/')) {
            const reader = new FileReader(); // Create a new FileReader instance

            // Ensure onload function is correctly defined
            reader.onload = function (event) {
                console.log("File is loaded");
                photo = event.target.result; // Get the data URL from FileReader result
                
            };

            reader.onerror = function (error) {
                console.error("Error reading file:", error);
            };

            reader.readAsDataURL(file); // Read the file as a data URL
        } else {
            alert("Please select a valid image file.");
        }
    }
  });

  // Add an event listener for the 'click' event
  form.addEventListener("submit", function (e) {
    // Prevent the link from navigating to the URL (default behavior)
    e.preventDefault();

    const name = document.getElementById("name").value;

    const dob = document.getElementById("dob").value;

    const gender = document.getElementById("gender").value;

    switch (house) {
      case "GRYFFINDOR":
        document.getElementById("GRYFFINDOR").style.display = "flex";
        document.getElementById("GRYFFINDOR-NAME").innerHTML = name;
        document.getElementById("GRYFFINDOR-DOB").innerHTML = dob;
        document.getElementById("GRYFFINDOR-GENDER").innerHTML = gender;
        document.getElementById("GRYFFINDOR-IMG").src = photo ? photo : "https://i.pinimg.com/564x/8b/84/90/8b84902086769fdb555c50dc88ce83d3.jpg";

        break;

      case "SLYTHERIN":
        document.getElementById("SLYTHERIN").style.display = "flex";
        document.getElementById("SLYTHERIN-NAME").innerHTML = name;
        document.getElementById("SLYTHERIN-DOB").innerHTML = dob;
        document.getElementById("SLYTHERIN-GENDER").innerHTML = gender;
        document.getElementById("SLYTHERIN-IMG").src = photo ? photo : "https://media.harrypotterfanzone.com/draco-malfoy-order-of-the-phoenix-portrait-3.jpg";
        break;

      case "RAVENCLAW":
        document.getElementById("RAVENCLAW").style.display = "flex";
        document.getElementById("RAVENCLAW-NAME").innerHTML = name;
        document.getElementById("RAVENCLAW-DOB").innerHTML = dob;
        document.getElementById("RAVENCLAW-GENDER").innerHTML = gender;
        document.getElementById("RAVENCLAW-IMG").src = photo ? photo : "https://i.namu.wiki/i/MROJTzx_vKYuAX2c2Y0Tn9IdYIir_vQDGEsgOqqjgiG4qFHASXCDT1Tt5e1kVUGnRk8SIxJLjLqEHl7meTHk3Q.webp";

        break;

      case "HUFFLEPUFF":
        document.getElementById("HUFFLEPUFF").style.display = "flex";
        document.getElementById("HUFFLEPUFF-NAME").innerHTML = name;
        document.getElementById("HUFFLEPUFF-DOB").innerHTML = dob;
        document.getElementById("HUFFLEPUFF-GENDER").innerHTML = gender;
        document.getElementById("HUFFLEPUFF-IMG").src = photo ? photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IwhN0mgZDX11RrhuSEQc3_BHMnn4rA72Kg&s";

        break;

      default:
        console.log("INVALID HOUSE");
    }

    const targetDiv = document.getElementById("cards");

    // Scroll to the div
    targetDiv.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling animation
        block: 'start' // Scroll to the top of the element
    });

    document.getElementById("download-pdf").style.display="block"

  });

  downloadPdf.addEventListener("click",()=>{
    alert("reached");

    const div = document.getElementById('cards'); // Get the div to be captured as PDF
    
    // Check if div exists
    if (div) {
        // Save the current scroll position
        const scrollPosition = window.scrollY;
    
        // Use html2canvas to render the div into a canvas
        html2canvas(div, {
            useCORS: true,  // Allow loading of external images
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
    
            // Restore the previous scroll position
            window.scrollTo(0, scrollPosition);
        }).catch(function (error) {
            console.error('Error generating the PDF:', error);
        });
    } else {
        console.error("Element with id 'cards' not found.");
    }
    
  })
});
