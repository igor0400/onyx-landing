import screen1 from 'public/images/screen-card1.png';
import screen2 from 'public/images/screen-card2.png';
import screen3 from 'public/images/screen-card3.png';
import screen4 from 'public/images/screen-card4.png';
import screen5 from 'public/images/screen-card5.png';

export default {
  ru: {
    screens: [
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
    ],
  },
  en: {
    screens: [
      {
        title: 'Easy transition to our system',
        description:
          'Free migration to our system we will make by ourselves - we will transfer the profile of the client base of your club and all related parameters, such as balance, discount, privileges',
        imageUrl: screen1,
        float: 'left',
      },
      {
        title: 'Built-in shopping in Shell',
        description:
          'Sales of time, drinks and food can be organized through a free module ONYX store, which will allow your customers to shop: directly from within the client shell',
        imageUrl: screen2,
        float: 'right',
      },
      {
        title: 'Booking and online payment module',
        description:
          'ONYX booking is a free module. Through which you can set up a reservation (via mobile app, website or call the administrator). With the ability to book both computers and set-top boxes',
        imageUrl: screen3,
        float: 'left',
      },
      {
        title: 'Finance and analytics',
        description:
          'The owner or manager can easily track and analyze information on the work of his club. In real time, he can see the dynamics of visits to the institution, statistics, on which computers users spend more time and which games they play more willingly. It is also possible to control workload, customize pricing plans, create individual loyalty programs for players, and calculate staff efficiency.',
        imageUrl: screen4,
        float: 'right',
      },
      {
        title: 'Console management',
        description:
          'Thanks to our development of the console controller, the administrator can control the console directly from the club card.',
        imageUrl: screen5,
        float: 'left',
      },
    ],
  },
};
