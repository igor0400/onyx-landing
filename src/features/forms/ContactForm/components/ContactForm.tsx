import React, { FC } from 'react';
import { Button, Input } from '../../../../shared';
import classNames from 'classnames';
import Link from 'next/link';

interface Props {
  className?: string;
}

const ContactForm: FC<Props> = ({ className }) => {
  return (
    <form
      className={classNames('flex flex-col gap-6', {
        [className ?? '']: className,
      })}
    >
      <div className="flex max-sm:flex-col gap-6">
        <Input placeholder="Введите имя" className="w-full sm:min-w-[240px]" />
        <Input
          placeholder="Введите город"
          className="w-full sm:min-w-[240px]"
        />
      </div>
      <div className="flex max-sm:flex-col gap-6">
        <Input
          placeholder="Введите Email"
          type="email"
          className="w-full sm:min-w-[240px]"
        />
        <Input
          placeholder="Введите номер телефона"
          type="phone"
          className="w-full sm:min-w-[240px]"
        />
      </div>
      <Input placeholder="Введите название клуба" className="w-full" />
      <div className="flex max-sm:flex-col gap-6">
        <Input
          placeholder="Введите количество клубов"
          type="number"
          className="w-full sm:min-w-[240px]"
        />
        <Input
          placeholder="Введите количество ПК"
          type="number"
          className="w-full sm:min-w-[240px]"
        />
      </div>
      <Input placeholder="Коментарий" className="w-full" />

      <div className="text-center">
        <p className="opacity-70">Отправляя форму, вы принимаете правила</p>
        <div style={{ color: 'rgba(239, 63, 84, 1)' }}>
          <Link href="/" className="underline">
            Политики использования
          </Link>{' '}
          и{' '}
          <Link href="/" className="underline">
            Лицензионного соглашения
          </Link>
        </div>
      </div>

      <Button bgColor="#EF3F54" type="submit">
        Отправить
      </Button>
    </form>
  );
};

export default ContactForm;
