var cardCount = {}; // To store the count of cards in each column

        function addCard(column) {
            var cardContainer = document.querySelector("." + column + " .column");
            
            // Increment the card count for the column
            if (!cardCount[column]) {
                cardCount[column] = 1;
            } else {
                cardCount[column]++;
            }
            
            var newCard = document.createElement("div");
            newCard.classList.add("card", "text-white", "bg-secondary", "mb-3");
            newCard.style.maxWidth = "18rem";
            newCard.id = column + "-card-" + cardCount[column]; // Generate a unique ID
            
            var cardHeader = document.createElement("div");
            cardHeader.classList.add("card-header");
            cardHeader.textContent = "Header";

            var cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            var cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = "Secondary card title";

            var cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content.";

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);

            newCard.appendChild(cardHeader);
            newCard.appendChild(cardBody);

            cardContainer.appendChild(newCard);
        }