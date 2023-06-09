import classNames from 'classnames';
import React, { FC } from 'react';

interface Props {
  text: string;
  index: number;
  isActive: boolean;
}

const RoadmapSliderCard: FC<Props> = ({ text, index, isActive }) => {
  return (
    <div
      className="w-[280px] h-[320px] p-6 rounded-2xl flex flex-col justify-between"
      style={{ background: isActive ? '#2F2F41' : '#242431' }}
    >
      <h6 className="opacity-20 text-5xl">{index}</h6>
      <p
        className="opacity-90 text-lg"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
};

export default RoadmapSliderCard;
