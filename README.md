Dashboard (панель управления)

-Фронт на React
-Store Redux toolkit
-БД postgreSQL
-Express



ОПИСАНИЕ ЗАДАЧИ

1. Главное окно программы и управление функционалом
Главное окно программы должно содержать следующие сведения:
боковое меню для перехода по всем функциональным блокам программы;
основная область главного окна, содержащая структуру задач, краткую информацию о программе, блоки основных функции, статистику и различные справочные сведения о программе (схематично без проработки). Должен присутствовать блок Планирование поставок.

2. БЛОК «ПЛАНИРОВАНИЕ ПОСТАВОК»
Состоит из функций: 
2.1. Функция «Ведение возможностей поставок»
Функция должна быть представлена в соответствующем окне, которое открывается из главного окна
Окно должно содержать следующие сведения:
боковое меню для перехода по всем функциональным блокам программы;
основная область главного окна, содержащая перечень субъектов РФ и возможности данного субъекта по поставкам.
Перечень субъектов РФ должен быть заранее определен и быть заполнен. При выборе субъекта РФ справа должна показываться таблица, в которой можно вводить данные (изменять, удалять, добавлять строки). Также над списком субъектов и таблицей со списком подведомственных организаций должна быть возможность поиска для ускорения просмотра данных, а также иметься кнопки для загрузки таблицы о возможностях из документа формата MS Word и вывода в MS Word для печати.
В качестве поставок выберем – поставки крови.
Макет окна с таблицей для заполнения приведен на рис. ниже

Таблицы организовать с помощью компонента ExtReact Grid
Ячейки таблицы должны редактироваться. Записи добавляться, удаляться и все это заноситься в таблицы БД