function loadDoc(doc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("drinkDetails").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", doc , true);
  xhttp.send();
}

document.addEventListener('DOMContentLoaded', () => {
    const drinkMenu = document.getElementById('drinkMenu');
    const drinkDetails = document.getElementById('drinkDetails');

    // Funktion til at indlæse drinks fra JSON
    async function loadDrinks() {
        try {
            const response = await fetch('data/drinks.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const drinks = await response.json();
            renderMenu(drinks);
            // Vis den første drink automatisk, hvis der er nogen
            // if (drinks.length > 0) {
            //     displayDrink(drinks[0]);
            // }
        } catch (error) {
            console.error('Kunne ikke indlæse drinks:', error);
            drinkDetails.innerHTML = '<div class="col-12"><p class="text-danger">Kunne ikke indlæse drinks. Prøv igen senere.</p></div>';
        }
    }

    // Funktion til at opbygge menuen
    function renderMenu(drinks) {
        drinkMenu.innerHTML = ''; // Ryd eksisterende menu

        const spiritsMap = new Map(); // Brug Map til at holde styr på unikke spiritustyper og deres drinks

        drinks.forEach(drink => {
            drink.spirits.forEach(spirit => {
                if (!spiritsMap.has(spirit)) {
                    spiritsMap.set(spirit, []);
                }
                spiritsMap.get(spirit).push(drink);
            });
        });

        // Sorter spiritustyper alfabetisk
        const sortedSpirits = Array.from(spiritsMap.keys()).sort();

        sortedSpirits.forEach(spirit => {
            const dropdownItem = document.createElement('li');
            dropdownItem.classList.add('nav-item', 'dropdown');

            const dropdownLink = document.createElement('a');
            dropdownLink.classList.add('nav-link', 'dropdown-toggle');
            dropdownLink.href = '#';
            dropdownLink.id = `navbarDropdown-${spirit.replace(/\s/g, '')}`;
            dropdownLink.setAttribute('role', 'button');
            dropdownLink.setAttribute('data-bs-toggle', 'dropdown');
            dropdownLink.setAttribute('aria-expanded', 'false');
            dropdownLink.textContent = spirit;
            dropdownItem.appendChild(dropdownLink);

            const dropdownMenu = document.createElement('ul');
            dropdownMenu.classList.add('dropdown-menu','border-0');
            dropdownMenu.setAttribute('aria-labelledby', `navbarDropdown-${spirit.replace(/\s/g, '')}`);

            // Sorter drinks alfabetisk inden for hver kategori
            const sortedDrinksInSpirit = spiritsMap.get(spirit).sort((a, b) => a.name.localeCompare(b.name));

            sortedDrinksInSpirit.forEach(drink => {
                const menuItem = document.createElement('li');
                const menuLink = document.createElement('a');
                menuLink.classList.add('dropdown-item');
                menuLink.href = '#';
                menuLink.textContent = drink.name;
                menuLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    displayDrink(drink);
                    // Luk offcanvas-menuen efter valg på små skærme
                    const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
                    if (offcanvas) {
                        offcanvas.hide();
                    }
                });
                menuItem.appendChild(menuLink);
                dropdownMenu.appendChild(menuItem);
            });

            dropdownItem.appendChild(dropdownMenu);
            drinkMenu.appendChild(dropdownItem);
        });
    }

    // Funktion til at vise detaljer om en drink
    function displayDrink(drink) {
        drinkDetails.innerHTML = `
            <div class="container-md">

                        <h2>${drink.name}</h2>
                        <p>${drink.history}</p>
                        <h3>Du skal bruge</h3>
                        <ul class="list-group list-group-flush">
                            ${drink.ingredients.map(item => `<li class="list-group-item">${item}</li>`).join('')}
                        </ul>
                        <h3>Sådan gør du</h3>
                        <div class="d-flex img_box">
                        ${drink.action.map(item => `<img class="m-2" src="img/${item}.svg" alt="${item}">`).join('')}
                        <img class="m-2"  src="img/${drink.glass}.svg" alt="${drink.glass}">
                        </div>
                        <ul class="list-group list-group-flush">
                            ${drink.preparation.map(item => `<li class="list-group-item">${item}</li>`).join('')}
                        </ul>

                        <div class="text-center mt-4">
                            
                        </div>

            </div>
        `;
    }

    // Kald funktionen for at indlæse drinks, når siden er klar
    loadDrinks();
});