// Каталог проектов. Чтобы добавить проект, добавьте объект в массив.
//
// {
//   title: 'Nomu',                         // название
//   type: 'Интернет-магазин',              // подпись над названием
//   category: 'Сайты',                     // для фильтра (Сайты, Боты, Приложения, Автоматизация...)
//   description: 'Короткое описание.',
//   image: 'assets/nomu.jpg',              // превью 16:10, можно не указывать
//   status: 'demo',                        // 'demo' или 'live' (работает у клиента)
//   stack: ['Next.js', 'TypeScript'],
//   demo: 'projects/nomu/',                // демо в папке projects/ или ссылка на сайт
//   code: 'https://github.com/...',        // ссылка на код, можно не указывать
// }

window.PROJECTS = [
  {
    title: 'Cargo1090',
    type: 'Сайт компании',
    category: 'Сайты',
    description: 'Сайт карго-компании по доставке грузов из Китая: направления, тарифы, отзывы, ответы на частые вопросы и форма заявки. Дизайн предоставлен заказчиком, вёрстка и разработка мои.',
    image: 'assets/cargo1090.jpg',
    status: 'live',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    demo: 'https://cargo1090.com/',
  },
  {
    title: 'Nomu',
    type: 'Интернет-магазин',
    category: 'Сайты',
    description: 'Магазин кофе в зёрнах: каталог с фильтрами и поиском, корзина, промокоды, оформление заказа и история заказов.',
    image: 'assets/nomu.jpg',
    status: 'demo',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demo: 'projects/nomu/',
  },
];
