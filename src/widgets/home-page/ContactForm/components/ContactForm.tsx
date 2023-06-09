import React, { FC } from 'react';
import Form from '../../../../features/forms/ContactForm';
import Contacts from './Contacts';

const ContactForm: FC = () => {
  return (
    <div className="max-w-[1220px] mx-auto pb-36 max-xl:px-10 flex flex-wrap items-center gap-36">
      <div className="assent-bg rounded-2xl p-8 max-w-2xl">
        <h3 className="uppercase text-3xl font-bold text-center">
          Оставить заявку
        </h3>
        <Form className="mt-10" />
      </div>
      <Contacts />
    </div>
  );
};

export default ContactForm;
