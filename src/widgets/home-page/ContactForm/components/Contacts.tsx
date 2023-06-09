import React, { FC } from 'react';
import { contacts } from '../configs/contacts';
import ContactsCard from '../../../../entities/home-page/ContactsCard';

const Contacts: FC = () => {
  return (
    <div className="flex flex-col gap-14">
      {contacts.map((item) => (
        <ContactsCard {...item} key={item.title} />
      ))}
    </div>
  );
};

export default Contacts;
