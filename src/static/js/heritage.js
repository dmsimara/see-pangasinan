const accordionItems = document.querySelectorAll('.accordion-item');

        accordionItems.forEach(item => {
            item.querySelector('h3').addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                accordionItems.forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });