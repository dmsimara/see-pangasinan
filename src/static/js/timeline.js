document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll(".timeline li");

    timelineItems.forEach(item => {
      item.addEventListener("click", function() {
        const dataElement = this.querySelector(".data");

        if (dataElement.classList.contains("show")) {
          dataElement.classList.remove("show");
        } else {
           
          document.querySelectorAll(".data.show").forEach(openItem => {
            openItem.classList.remove("show");
          });

          dataElement.classList.add("show");
        }
      });

      const closeButton = item.querySelector(".data .close");
      closeButton.addEventListener("click", function(event) {
        event.stopPropagation(); 
        const dataElement = this.closest(".data");
        dataElement.classList.remove("show");
      });
    });
  });