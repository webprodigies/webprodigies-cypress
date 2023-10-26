import React, { FC } from 'react';

interface CypressMarketPlaceIconProps {}
const CypressMarketPlaceIcon: FC<CypressMarketPlaceIconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.67151 8.6279C3.85917 7.12661 5.13538 6 6.64835 6H17.3517C18.8646 6 20.1408 7.12661 20.3285 8.6279L21.5785 18.6279C21.8023 20.4185 20.4061 22 18.6017 22H5.39835C3.59385 22 2.19769 20.4185 2.42151 18.6279L3.67151 8.6279Z"
        className={`dark:fill-[#2B2939] fill-[#D3D3D3] text-xl transition-all group-hover/native:fill-washed-purple-400`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6C8 3.79086 9.79086 2 12 2C14.2091 2 16 3.79086 16 6V8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8V6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6V8C10 8.55228 9.55228 9 9 9C8.44772 9 8 8.55228 8 8V6Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
    </svg>
  );
};

export default CypressMarketPlaceIcon;
