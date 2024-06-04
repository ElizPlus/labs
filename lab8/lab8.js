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
}