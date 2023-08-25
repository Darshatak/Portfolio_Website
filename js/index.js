let currentPage = 1;
const itemsPerPage = 3;
const containers = document.querySelectorAll('.ag-courses_item');
const nextButton = document.getElementById('nextButton');
const backButton = document.getElementById('backButton');
showItems();
        document.addEventListener('contextmenu', function (e) {
                e.preventDefault();
            });

        nextButton.addEventListener('click', () => {
            currentPage++;
            showItems();
        });

        backButton.addEventListener('click', () => {

            if (currentPage == 1) {
                backButton.classList.toggle("disabled")
                backButton.style.display = "none"

            } else {
                currentPage--;
                showItems();
            }
        });
        function showItems() {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            containers.forEach((container, index) => {
                if (index >= startIndex && index < endIndex) {
                    container.style.display = 'block';
                } else {
                    container.style.display = 'none';
                }
            });

            nextButton.style.display = endIndex < containers.length ? 'block' : 'none';
            backButton.style.display = currentPage > 1 ? 'block' : 'none';
        }



