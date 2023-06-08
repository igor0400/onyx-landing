import screen1 from 'public/images/screen-card1.png';
import screen2 from 'public/images/screen-card2.png';
import screen3 from 'public/images/screen-card3.png';
import screen4 from 'public/images/screen-card4.png';
import screen5 from 'public/images/screen-card5.png';

interface ScreenType {
  title: string;
  description: string;
  imageUrl: any;
  float: 'right' | 'left';
}

export const screens: ScreenType[] = [
  {
    title: 'Легкий переход на нашу систему',
    description:
      'Бесплатный переход на нашу систему мы произведем своими силами - перенесем  профиль клиентской базы вашего клуба и все сопуствующие параметры, такие как: баланс, скидка, привелегии',
    imageUrl: screen1,
    float: 'left',
  },
  {
    title: 'Встроенные покупки  в Shell',
    description:
      'Продажи времени, напитков и еды, можно организовать через бесплатынй модуль  ONYX store,  который, позволит вашим клиентам совершать покупки: прямо из под клиентской оболочки',
    imageUrl: screen2,
    float: 'right',
  },
  {
    title: 'Модуль бронирования и онлайн оплаты',
    description:
      'ONYX booking - это бесплатный модуль. Через который можно установить бронь (через мобильное приложение, сайт или звонок администратору). С возможностью бронировать как компьютеры так и приставки',
    imageUrl: screen3,
    float: 'left',
  },
  {
    title: 'Финансы и аналитика',
    description:
      'Владелец или управляющий легко  сможет отследить и проанализировать  информацию по работе своего клуба. В реальном времени он видит динамику  посещения заведения, статистику, на  каких компьютерах пользователи  проводят больше времени и в какие игры охотнее играют. Также можно контролировать  загруженность, настраивать тарифные  планы, создавать индивидуальные  программы лояльности для игроков,  рассчитывать эффективность  работы персонала.',
    imageUrl: screen4,
    float: 'right',
  },
  {
    title: 'Управление консолями',
    description:
      'Благодаря нашей разработке контроллера консолей, администратор может управлять консолью прямо из карты клуба.',
    imageUrl: screen5,
    float: 'left',
  },
];
