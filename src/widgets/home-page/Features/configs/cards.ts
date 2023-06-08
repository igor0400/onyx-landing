import screen1 from 'public/images/screen1.png';
import screen2 from 'public/images/screen2.png';
import screen3 from 'public/images/screen3.png';

interface CardType {
  title: string;
  description: string;
  imageUrl: any;
  float: 'left' | 'right';
}

export const cards: CardType[] = [
  {
    title: 'Быстрый и безопасный shell',
    description:
      'Клиентская оболочка не влияет на прозиводительность компьютера. Безопасность клиентской оболочки снижает риски от воздействия на систему из вне',
    imageUrl: screen1,
    float: 'left',
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
];
