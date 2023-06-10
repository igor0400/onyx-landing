import stat from 'public/icons/stat.svg';
import oborot from 'public/icons/oborot.svg';
import clock from 'public/icons/clock.svg';
import analitic from 'public/icons/analitic.svg';
import eye from 'public/icons/eye.svg';
import settings from 'public/icons/settings.svg';
import arrowCircle from 'public/icons/arrow-circle.svg';
import arrows from 'public/icons/arrows.svg';

export default {
  ru: {
    title: 'Следите, управляйте',
    description:
      'Управляйте заведением в режиме реального времени и отслеживайте всю необходимую информацию, <b>вы получите</b>:',
    cards: [
      {
        iconUrl: stat,
        text: 'Динамику посещения заведения',
      },
      {
        iconUrl: oborot,
        text: 'Статистику оборачиваемости посадочного места',
      },
      {
        iconUrl: clock,
        text: 'Учет времени проведенным за компьютером',
      },
      {
        iconUrl: analitic,
        text: 'Аналитику популярности игр в Вашем заведении',
      },
      {
        iconUrl: eye,
        text: 'Контроль загруженности',
      },
      {
        iconUrl: settings,
        text: 'Настройку тарифных планов',
      },
      {
        iconUrl: arrowCircle,
        text: 'Создание индивидуальных программ лояльности',
      },
      {
        iconUrl: arrows,
        text: 'Оценку эффективности работы персонала',
      },
    ],
  },
  en: {
    title: 'Watch, control',
    description:
      'Manage your facility in real time and keep track of all information you need, <b>you will get</b>:',
    cards: [
      {
        iconUrl: stat,
        text: 'The dynamics of attendance',
      },
      {
        iconUrl: oborot,
        text: 'Seat turnover statistics',
      },
      {
        iconUrl: clock,
        text: 'Accounting for time spent at the computer',
      },
      {
        iconUrl: analitic,
        text: 'Analytics of the popularity of games in your institution',
      },
      {
        iconUrl: eye,
        text: 'Load control',
      },
      {
        iconUrl: settings,
        text: 'Setting up tariff plans',
      },
      {
        iconUrl: arrowCircle,
        text: 'Creation of individual loyalty programs',
      },
      {
        iconUrl: arrows,
        text: 'Personnel performance evaluation',
      },
    ],
  },
};
