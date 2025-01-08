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
      if (file.type.startsWith("image/")) {
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
        document.getElementById("GRYFFINDOR-IMG").src = photo
          ? photo
          : "https://res.cloudinary.com/dpvacdjua/image/upload/v1736302847/hermoine_nay2jr.jpg";

        break;

      case "SLYTHERIN":
        document.getElementById("SLYTHERIN").style.display = "flex";
        document.getElementById("SLYTHERIN-NAME").innerHTML = name;
        document.getElementById("SLYTHERIN-DOB").innerHTML = dob;
        document.getElementById("SLYTHERIN-GENDER").innerHTML = gender;
        document.getElementById("SLYTHERIN-IMG").src = photo
          ? photo
          : "https://res.cloudinary.com/dpvacdjua/image/upload/v1736302848/draco_pdl7ea.jpg";
        break;

      case "RAVENCLAW":
        document.getElementById("RAVENCLAW").style.display = "flex";
        document.getElementById("RAVENCLAW-NAME").innerHTML = name;
        document.getElementById("RAVENCLAW-DOB").innerHTML = dob;
        document.getElementById("RAVENCLAW-GENDER").innerHTML = gender;
        document.getElementById("RAVENCLAW-IMG").src = photo
          ? photo
          : "https://res.cloudinary.com/dpvacdjua/image/upload/v1736302846/cedric_udrs3n.jpg";

        break;

      case "HUFFLEPUFF":
        document.getElementById("HUFFLEPUFF").style.display = "flex";
        document.getElementById("HUFFLEPUFF-NAME").innerHTML = name;
        document.getElementById("HUFFLEPUFF-DOB").innerHTML = dob;
        document.getElementById("HUFFLEPUFF-GENDER").innerHTML = gender;
        document.getElementById("HUFFLEPUFF-IMG").src = photo
          ? photo
          : "https://res.cloudinary.com/dpvacdjua/image/upload/v1736302847/luna_hhbmzo.webp";

        break;

      default:
        console.log("INVALID HOUSE");
    }

    const targetDiv = document.getElementById("cards");

    // Scroll to the div
    targetDiv.scrollIntoView({
      behavior: "smooth", // Smooth scrolling animation
      block: "start", // Scroll to the top of the element
    });

    document.getElementById("download-pdf").style.display = "block";
  });

});
