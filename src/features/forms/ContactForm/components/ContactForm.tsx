import React, { FC } from 'react';
import { Button, Input } from '../../../../shared';
import classNames from 'classnames';
import Link from 'next/link';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTranslate } from '../../../locale';
import { contactsSettings } from '../../../../widgets/home-page/Contacts';

interface Props {
  className?: string;
}

const ContactForm: FC<Props> = ({ className }) => {
  const isLargerThan1024 = useMediaQuery('(min-width: 1024px)');
  const isLargerThan350 = useMediaQuery('(min-width: 350px)');
  const { t } = useTranslate(contactsSettings);

  return (
    <form
      className={classNames('flex flex-col gap-6', {
        [className ?? '']: className,
      })}
    >
      <div
        className={
          isLargerThan1024
            ? 'flex justify-between max-sm:flex-col gap-6'
            : 'grid gap-6'
        }
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${
            isLargerThan350 ? '240px' : '1fr'
          }, 1fr))`,
        }}
      >
        <Input
          placeholder={t('inputs').name}
          className="w-full sm:min-w-[240px]"
        />
        <Input
          placeholder={t('inputs').city}
          className="w-full sm:min-w-[240px]"
        />
      </div>
      <div
        className={
          isLargerThan1024
            ? 'flex justify-between max-sm:flex-col gap-6'
            : 'grid gap-6'
        }
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${
            isLargerThan350 ? '240px' : '1fr'
          }, 1fr))`,
        }}
      >
        <Input
          placeholder={t('inputs').email}
          type="email"
          className="w-full sm:min-w-[240px]"
        />
        <Input
          placeholder={t('inputs').phone}
          type="phone"
          className="w-full sm:min-w-[240px]"
        />
      </div>

      <Input placeholder={t('inputs').clubName} className="w-full" />

      <div
        className={
          isLargerThan1024
            ? 'flex justify-between max-sm:flex-col gap-6'
            : 'grid gap-6'
        }
        style={{
          gridTemplateColumns: `repeat(auto-fit, minmax(${
            isLargerThan350 ? '240px' : '1fr'
          }, 1fr))`,
        }}
      >
        <Input
          placeholder={t('inputs').clubsCount}
          type="number"
          className="w-full sm:min-w-[240px]"
        />
        <Input
          placeholder={t('inputs').pcsCount}
          type="number"
          className="w-full sm:min-w-[240px]"
        />
      </div>

      <Input placeholder={t('inputs').comment} className="w-full" />

      <div className="text-center">
        <p className="opacity-70">{t('info')}</p>
        <div style={{ color: 'rgba(239, 63, 84, 1)' }}>
          <Link href="/" className="underline">
            {t('rools1')}
          </Link>{' '}
          {t('and')}{' '}
          <Link href="/" className="underline">
            {t('rools2')}
          </Link>
        </div>
      </div>

      <Button bgColor="#EF3F54" type="submit">
        {t('button')}
      </Button>
    </form>
  );
};

export default ContactForm;
