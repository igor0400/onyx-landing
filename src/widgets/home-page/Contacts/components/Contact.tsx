import React, { FC } from 'react';
import Form from '../../../../features/forms/ContactForm';
import Cards from './Cards';
import { useTranslate } from '../../../../features/locale';

import settings from '../model/locale/translate.json';

const ContactForm: FC = () => {
  const { t } = useTranslate(settings);

  return (
    <div
      className="max-w-[1220px] mx-auto py-20 lg:py-36 max-sm:px-5 max-xl:px-10 lg:flex flex-wrap items-center gap-36"
      id="contacts"
    >
      <div className="assent-bg rounded-2xl p-6 sm:p-8 max-w-2xl max-lg:mx-auto">
        <h3 className="uppercase text-2xl sm:text-3xl font-bold text-center">
          {t('title')}
        </h3>
        <Form className="mt-6 sm:mt-10" />
      </div>
      <Cards />
    </div>
  );
};

export default ContactForm;
