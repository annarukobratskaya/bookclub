function downloadPDF() {
    var doc = new jsPDF();
    doc.text("Чеклист для книги", 10, 10);
    var elements = document.querySelectorAll('#checklist-form label');
    elements.forEach(function(element, index) {
        var text = element.innerText;
        var checked = element.querySelector('input').checked ? '[x]' : '[ ]';
        doc.text(checked + ' ' + text, 10, 20 + (index * 10));
    });
    doc.save('checklist.pdf');
}
