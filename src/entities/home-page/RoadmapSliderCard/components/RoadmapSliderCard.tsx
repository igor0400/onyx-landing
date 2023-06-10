import React, { FC } from 'react';

interface Props {
  text: string;
  index: number;
  isActive: boolean;
}

const RoadmapSliderCard: FC<Props> = ({ text, index, isActive }) => {
  return (
    <div
      className="max-[800px]:w-[240px] max-[800px]:h-[260px] w-[280px] h-[320px] p-6 rounded-2xl flex flex-col justify-between"
      style={{ background: isActive ? '#2F2F41' : '#242431' }}
    >
      <h6 className="opacity-20 text-4xl min-[800px]:text-5xl">{index}</h6>
      <p
        className="opacity-90 min-[800px]:text-lg"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
};

export default RoadmapSliderCard;
