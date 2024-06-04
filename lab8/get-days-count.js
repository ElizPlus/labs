function showDaysCount() {
    let today = new Date();
    let inputDate = document.getElementById('input-date').value;
    if (inputDate) {
        let birthday = new Date(inputDate);
        let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
        daysCount = Math.floor(daysCount);
        let resultDiv = document.getElementById('days-count-result');
        resultDiv.innerHTML = `Количество дней с даты: ${daysCount}`;
    } else {
        alert('Пожалуйста, введите дату.');
    }
}

function clearFields() {
    document.getElementById('input-date').value = '';
    document.getElementById('days-count-result').innerHTML = '';
}