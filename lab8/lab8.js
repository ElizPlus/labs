function showDate () {  // функция выводит текущую дату на страницу внутрь тега с id 'current-date'
    let out = document.getElementById('current-date');   
    let today = new Date();  //Текущую дату можно определить с помощью встроенного объекта Date
     //полученную дату записали в тег, метод преобразует строку с датой-временем в текущую локаль
    out.innerHTML = `Дата и время России: ${today.toLocaleString('ru-RU')}`;

    let locales = {
        "Германии": 'de-DE',
        "Америки": 'en-US',
        "Кореи": 'ko-KR',
        "Китая": 'zh-HK',
        "Японии": 'ja-JP',
    }

    let localeDates = document.getElementById('locale-dates');
    for (let [country, locale] of Object.entries(locales)) {
        localeDates.innerHTML += `Дата и время ${country}: ${today.toLocaleString(locale)}<br>`;
    }

    let additionalInfo = document.getElementById('additional-info');
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    additionalInfo.innerHTML = `
        Текущий год: ${today.getFullYear()}<br>
        Текущий месяц: ${today.toLocaleString('ru-RU', { month: 'long' })}<br>
        Текущая дата: ${today.getDate()}<br>
        День недели: ${daysOfWeek[today.getDay()]}`;
}

function showDayOfWeek() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value - 1;
    let year = document.getElementById('input-year').value;
    let date = new Date(year, month, day);
    let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let dayOfWeek = daysOfWeek[date.getDay()];
    let resultDiv = document.getElementById('day-of-week-result');
    resultDiv.innerHTML = `День недели: ${dayOfWeek}`;
}