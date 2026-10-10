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
