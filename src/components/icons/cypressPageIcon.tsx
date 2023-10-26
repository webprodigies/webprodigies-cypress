import React, { FC } from 'react';

interface CypressPageIconProps {}
const CypressPageIcon: FC<CypressPageIconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 5C3 3.34315 4.34315 2 6 2H15.7574C16.553 2 17.3161 2.31607 17.8787 2.87868L20.1213 5.12132C20.6839 5.68393 21 6.44699 21 7.24264V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5Z"
        className={`dark:fill-[#2B2939] fill-[#D3D3D3] text-xl transition-all group-hover/native:fill-washed-purple-400`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 11C7 10.4477 7.44772 10 8 10H16C16.5523 10 17 10.4477 17 11C17 11.5523 16.5523 12 16 12H8C7.44772 12 7 11.5523 7 11Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15C7 14.4477 7.44772 14 8 14H12C12.5523 14 13 14.4477 13 15C13 15.5523 12.5523 16 12 16H8C7.44772 16 7 15.5523 7 15Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
      <path
        d="M17.7071 2.70711L20.2929 5.29289C20.7456 5.74565 21 6.35971 21 7H18C16.8954 7 16 6.10457 16 5V2C16.6403 2 17.2544 2.25435 17.7071 2.70711Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
    </svg>
  );
};

export default CypressPageIcon;
