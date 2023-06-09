import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  iconUrl: any;
  title: string;
  contact: string;
}

const ContactsCard: FC<Props> = ({ iconUrl, title, contact }) => {
  return (
    <div className="flex gap-8">
      <Image src={iconUrl} alt={title} />

      <div>
        <h6 className="font-bold">{title}</h6>
        <p className="opacity-75 font-light">{contact}</p>
      </div>
    </div>
  );
};

export default ContactsCard;
