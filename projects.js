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
  {
    title: 'OwlSSH',
    type: 'Десктопное приложение',
    category: 'Приложения',
    description: 'SSH-клиент для Windows, macOS и Linux: быстрый терминал, живая панель серверов, двухпанельный файловый менеджер и встроенный MCP-сервер, через который ИИ-ассистент работает на тех же серверах с подтверждением опасных действий.',
    image: 'assets/owlssh.jpg',
    status: 'app',
    stack: ['Tauri 2', 'Rust', 'Svelte 5', 'TypeScript', 'MCP'],
    demo: 'projects/owlssh/',
    code: 'https://github.com/Deskezz-exe/OwlSSH-with-mcp',
  },
  {
    title: 'Vesper',
    type: 'Контент-завод для бренда',
    category: 'Автоматизация',
    description: 'Панель для производства контента бренда: генерация постов, картинок, видео и каруселей, лента готовых материалов, ресерч тем, база идей, автопостинг на несколько площадок и учёт баланса API. Данные в демо вымышленные, генерация имитируется.',
    image: 'assets/vesper.jpg',
    status: 'demo',
    stack: ['JavaScript', 'HTML', 'CSS'],
    demo: 'projects/vesper/',
  },
];
