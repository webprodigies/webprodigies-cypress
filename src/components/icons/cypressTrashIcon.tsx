import React, { FC } from 'react';

interface CypressTrashIconProps {}
const CypressTrashIcon: FC<CypressTrashIconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7H20V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V7Z"
        className={`dark:fill-[#2B2939] fill-[#D3D3D3] text-xl transition-all group-hover/native:fill-washed-purple-400`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 10C9.55228 10 10 10.4477 10 11V18C10 18.5523 9.55228 19 9 19C8.44772 19 8 18.5523 8 18V11C8 10.4477 8.44772 10 9 10Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 10C15.5523 10 16 10.4477 16 11V18C16 18.5523 15.5523 19 15 19C14.4477 19 14 18.5523 14 18V11C14 10.4477 14.4477 10 15 10Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 5C7 3.34315 8.34315 2 10 2H14C15.6569 2 17 3.34315 17 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H7ZM10 4H14C14.5523 4 15 4.44772 15 5H9C9 4.44772 9.44772 4 10 4Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
    </svg>
  );
};

export default CypressTrashIcon;
