// Функция для отображения описания книги при клике на кнопку
document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Получаем атрибут data-book для определения книги
        const book = button.getAttribute('data-book');
        // Симулируем данные для книг
        const bookDetails = getBookDetails(book);
        // Заполняем поля в разделе book-details
        document.getElementById('book-title').textContent = bookDetails.title;
        document.getElementById('book-title-input').value = bookDetails.title; // Новое: Заполняем поле ввода названия книги
        document.getElementById('book-image').value = bookDetails.image;
        document.getElementById('book-author').value = bookDetails.author;
        document.getElementById('read-date').value = bookDetails.readDate;
        document.getElementById('quote-ani').value = bookDetails.quoteAni;
        document.getElementById('quote-dasha').value = bookDetails.quoteDasha;
        document.getElementById('checklist-link').value = bookDetails.checklistLink;

        // Показываем раздел с описанием книги
        document.getElementById('book-details').classList.remove('hidden');
    });
});

// Функция для сохранения изменений (в данном случае просто выводим значения в консоль)
function saveChanges() {
    const bookTitle = document.getElementById('book-title-input').value; // Изменено: Получаем значение из поля ввода названия книги
    const bookImage = document.getElementById('book-image').value;
    const bookAuthor = document.getElementById('book-author').value;
    const readDate = document.getElementById('read-date').value;
    const quoteAni = document.getElementById('quote-ani').value;
    const quoteDasha = document.getElementById('quote-dasha').value;
    const checklistLink = document.getElementById('checklist-link').value;

    console.log(`Сохранены изменения для книги: ${bookTitle}`);
    console.log(`Картинка: ${bookImage}`);
    console.log(`Автор: ${bookAuthor}`);
    console.log(`Дата прочтения: ${readDate}`);
    console.log(`Любимая цитата Ани: ${quoteAni}`);
    console.log(`Любимая цитата Даши: ${quoteDasha}`);
    console.log(`Ссылка на чеклист: ${checklistLink}`);
}

// Функция для получения данных о книге (заглушка, может быть заменена на подключение к базе данных или другой источник данных)
function getBookDetails(book) {
    // Здесь можно заменить на реальные данные для каждой книги
    switch (book) {
        case 'book1':
            return {
                title: 'Книга 1',
                image: 'https://example.com/book1.jpg',
                author: 'Автор Книги 1',
                readDate: '2024-06-27',
                quoteAni: 'Цитата от Ани из Книги 1',
                quoteDasha: 'Цитата от Даши из Книги 1',
                checklistLink: 'https://example.com/checklist1.html'
            };
        case 'book2':
            return {
                title: 'Книга 2',
                image: 'https://example.com/book2.jpg',
                author: 'Автор Книги 2',
                readDate: '2024-06-28',
                quoteAni: 'Цитата от Ани из Книги 2',
                quoteDasha: 'Цитата от Даши из Книги 2',
                checklistLink: 'https://example.com/checklist2.html'
            };
        case 'book3':
            return {
                title: 'Книга 3',
                image: 'https://example.com/book3.jpg',
                author: 'Автор Книги 3',
                readDate: '2024-06-29',
                quoteAni: 'Цитата от Ани из Книги 3',
                quoteDasha: 'Цитата от Даши из Книги 3',
                checklistLink: 'https://example.com/checklist3.html'
            };
        default:
            return {
                title: 'Название книги',
                image: '',
                author: '',
                readDate: '',
                quoteAni: '',
                quoteDasha: '',
                checklistLink: ''
            };
    }
}
