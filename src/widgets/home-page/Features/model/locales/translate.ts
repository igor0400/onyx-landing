import screen1 from 'public/images/screen1.png';
import screen2 from 'public/images/screen2.png';
import screen3 from 'public/images/screen3.png';

export default {
  ru: {
    title: 'Функционал и возможности Onyx',
    description: 'Контроль загрузки, расчеты, оплаты 24/7 из любой точки мира',
    cards: [
      {
        title: 'Быстрый и безопасный shell',
        description:
          'Клиентская оболочка не влияет на прозиводительность компьютера. Безопасность клиентской оболочки снижает риски от воздействия на систему из вне',
        imageUrl: screen1,
        float: 'left',
        marginTop: 10,
      },
      {
        title: 'Контроль и управление',
        description:
          'Управление всей системой в любое время из любой точки мира. Вы сможете: Управлять клубом, вносить задачи, сводить отчеты',
        imageUrl: screen2,
        float: 'right',
      },
      {
        title: 'Современный  и простой  интерфейс',
        description:
          'Дизайн был создан на основе опросов клиентов и владельцев клубов. Простой и понятный.',
        imageUrl: screen3,
        float: 'left',
      },
    ],
  },
  en: {
    title: 'Onyx features and functions',
    description:
      'Control of loading, settlement, payment 24/7 from anywhere in the world',
    cards: [
      {
        title: 'Fast and safe shell',
        description:
          'The client shell does not affect the performance of the computer. Client shell security reduces risks from external interference with the system',
        imageUrl: screen1,
        float: 'left',
        marginTop: 10,
      },
      {
        title: 'Control and management',
        description:
          'Manage the entire system at any time from anywhere in the world. You will be able to: Manage the club, enter tasks, summarize reports',
        imageUrl: screen2,
        float: 'right',
      },
      {
        title: 'Modern and simple interface',
        description:
          'The design was created based on surveys of customers and club owners. Simple and understandable.',
        imageUrl: screen3,
        float: 'left',
      },
    ],
  },
};
