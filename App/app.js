
document.addEventListener("DOMContentLoaded", function() {
    const profileOption = document.getElementById("profiles");
    const glassOption = document.getElementById("glass");
    const styleOption = document.getElementById("style");
    const popup = document.getElementById("popup");
    const totalPriceDiv = document.getElementById("total-price");

    // let width = document.getElementById("width").value;
    // let height = document.getElementById("height").value;
    // console.log(height, width);
    // function checkValueEntered(){
    //     if(!height ||  !width) {
    //         prompt("Please enter all values")
    //     }
    // }

    let selectedOptions = {
        "profiles": { price: 0 },
        "glasses": { price: 0 },
        "styles": { price: 0 }
    };

    function showPopup(content) {
      popup.innerHTML = content;
      popup.style.display = "block";
    }
  
    function closePopup() {
      popup.style.display = "none";
    }
  
    window.addEventListener("click", function(event) {
      if (event.target !== popup) {
        closePopup();
      }
    });
  
    function loadOptions(optionType, targetDiv) {
      fetch("options.json")
        .then(response => response.json())
        .then(data => {
        //   checkValueEntered()
          const options = data[optionType];
          console.log(optionType);
          let content
          if(optionType === "profiles"){
            content = `<h2>Избери профил</h2>`;
          } else if(optionType === "glasses"){
            content = `<h2>Избери стакло</h2>`;
          } else {
            content = `<h2>Избери стил</h2>`;

          }
          content += '<div class="popup-grid">';
          options.forEach(option => {
            content += `
              <div class="popup-box" data-image="${option.image}" data-description="${option.description}" data-price="${option.price}">
                <img src="${option.image}" alt="">
                <p>${option.description}</p>
              </div>
            `;
          });
          content += '</div>';
          showPopup(content);
  
          popup.querySelectorAll(".popup-box").forEach(optionBox => {
            optionBox.addEventListener("click", function() {
              const newImageSrc = optionBox.getAttribute("data-image");
              const newDescription = optionBox.getAttribute("data-description");
              const price = parseFloat(optionBox.getAttribute("data-price"));
              targetDiv.querySelector("img").src = newImageSrc;
              targetDiv.querySelector("." + optionType + "-description").textContent = newDescription;
              selectedOptions[optionType] = { price };
              updateTotalPrice();
              closePopup();
            });
          });
        })
        .catch(error => console.error("Error loading options:", error));
    }

    function updateTotalPrice() {
    //   const width = parseFloat(width);
    //   const height = parseFloat(height);
    //   const profilePrice = selectedOptions["profiles"].price;
    //   const glassPrice = selectedOptions["glasses"].price;
    //   const area = width * height;
    //   const totalPrice = (profilePrice + glassPrice) * area;
    //   totalPriceDiv.textContent = totalPrice.toFixed(2);
      let totalPrice = 0;
      for (const optionType in selectedOptions) {
        totalPrice += selectedOptions[optionType].price;
      }
      totalPriceDiv.textContent = totalPrice.toFixed(2);
    }

    profileOption.addEventListener("click", function() {
      loadOptions("profiles", profileOption);
    });
  
    glassOption.addEventListener("click", function() {
      loadOptions("glasses", glassOption);
    });
  
    styleOption.addEventListener("click", function() {
      loadOptions("styles", styleOption);
    });
});
