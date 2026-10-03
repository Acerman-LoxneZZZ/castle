# Castle — Камень и время

Кинематографический сайт о замках: первый экран с разъезжающимися башнями, галерея с перекрытием фотографий при прокрутке и соответствующими фоновыми изображениями.

## Запуск

Сайт написан на HTML, CSS и JavaScript. Установка зависимостей и сборка не нужны.

Из корня репозитория запустите:

```sh
python -m http.server 8000 --directory dist
```

Откройте http://localhost:8000. Для статического хостинга используйте содержимое папки `dist`.

## Файлы

- `dist/index.html` — разметка и содержание.
- `dist/styles.css` — оформление, адаптивное кадрирование замка и мобильная версия.
- `dist/script.js` — анимация прокрутки и управление галереей.
- `dist/assets/` — фотографии, прозрачный слой замка, иконка и сведения об источниках.
- `DESIGN.md` и `PRODUCT.md` — описание дизайна и требований.

Галереей можно управлять прокруткой, кнопками, клавишами со стрелками и горизонтальным свайпом. Учитывается настройка уменьшения движения.

## Изображения

Первый экран использует предоставленную пользователем фотографию. Для широких экранов ImageGen расширил её по бокам: панорама заполняет экран без размытых краёв и сохраняет видимую арку целиком. Прозрачные слои замка подготовлены с помощью ImageGen для анимации башен. На узких экранах используется исходная фотография. Фотографии галереи имеют отдельные лицензии:

- [Нойшванштайн — Softeis](https://commons.wikimedia.org/wiki/File:Castle_Neuschwanstein.jpg), [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
- [Эйлен-Донан — Rodaxx](https://commons.wikimedia.org/wiki/File:Eilean_Donan_Castle_bridge_view.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
- [Шильон — Giles Laurent, gileslaurent.com](https://commons.wikimedia.org/wiki/File:001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Авторство и ссылки на лицензии также показаны на сайте. Подробности находятся в `dist/assets/sources.json`.
