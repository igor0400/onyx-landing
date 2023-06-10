import phones from 'public/images/phones.png';
import pcs from 'public/images/pcs.png';

export default {
  ru: {
    title: 'Наши преимущества',
    description:
      'Мы не с кем не конкурируем, мы создаем продукт на который все ровняются',
    cards: [
      {
        title: 'Мобильное приложение',
        description:
          'Мобильное приложение. Клиент регистрируется один раз и играет во всех клубах мира где установлена наша система. 1) Система агрегатора клубов  2) публикация новостей и акций 33) отображдение предустанволенных игр 4) отражение всей тарифной сетки 5) бронирование с возможностью онлайн оплаты как компьюетров так и консолей',
        imageUrl: phones,
        marginTop: -6,
        grow: true,
      },
      {
        title: 'Турнирный модуль',
        description:
          'Посредством данного модуля Вы легко сможете организовать турнир в своем клубе, запустить его на компьютерах по определенной тематике и выявить победителя без лишних усилий.',
      },
      {
        title: 'Таск-менеджер',
        description:
          'Посредством программы будет возможность постановки задач и отслеживание результатов работы администраторов. Также в случае возникновения проблемы у администратора он легко сможет направить свой вопрос управляющему и получит мгновенный отклик на него.',
      },
      {
        title: 'Чат администратор-клиент',
        description:
          'Это ваш помощник. Как клиенту, так и администратору нет необходимости ходить друг к другу и решать мелкие проблемы, они просто и легко могут сделать это обмениваясь сообщениями в чате.',
        imageUrl: pcs,
        marginTop: -0.5,
        grow: true,
      },
    ],
  },
  en: {
    title: 'Our benefits',
    description:
      'We are not competing with anyone, we are creating a product that everyone looks up to',
    cards: [
      {
        title: 'Mobile app',
        description:
          'Mobile application. The client registers once and plays in all clubs of the world where our system is installed. 1) Clubs aggregator system 2) publishing news and promotions 33) displaying pre-installed games 4) reflecting the entire tariff schedule 5) booking with the possibility of online payment for both PCs and consoles',
        imageUrl: phones,
        marginTop: -6,
        grow: true,
      },
      {
        title: 'Tournament module',
        description:
          'Through this module, you can easily organize a tournament in your club, run it on computers on a specific topic and identify the winner without too much effort.',
      },
      {
        title: 'Task Manager',
        description:
          "Through the program it will be possible to set tasks and track the results of administrators' work. Also, if an administrator has a problem, he can easily send his question to the manager and get an instant response.",
      },
      {
        title: 'Chat administrator-client',
        description:
          "It's your assistant. Both the client and the administrator do not need to go to each other and solve minor problems, they can do it simply and easily by exchanging messages in the chat room.",
        imageUrl: pcs,
        marginTop: -0.5,
        grow: true,
      },
    ],
  },
};
