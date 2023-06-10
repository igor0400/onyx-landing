import React, { FC } from 'react';
import { contacts } from '../configs/contacts';
import ContactsCard from '../../../../entities/home-page/ContactsCard';

const Cards: FC = () => {
  return (
    <div className="flex lg:flex-col max-lg:flex-wrap max-lg:justify-center gap-14 mt-10">
      {contacts.map((item) => (
        <ContactsCard {...item} key={item.title} />
      ))}
    </div>
  );
};

export default Cards;
