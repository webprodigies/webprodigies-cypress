import React, { FC } from 'react';

interface CypressHomeIconProps {}
const CypressHomeIcon: FC<CypressHomeIconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11.3361C2 10.4856 2.36096 9.67515 2.99311 9.10622L9.9931 2.80622C11.134 1.7794 12.866 1.7794 14.0069 2.80622L21.0069 9.10622C21.639 9.67515 22 10.4856 22 11.3361V19C22 20.6569 20.6569 22 19 22H16L15.9944 22H8.00558L8 22H5C3.34315 22 2 20.6569 2 19V11.3361Z"
        className={`dark:fill-[#2B2939] fill-[#D3D3D3] text-xl transition-all group-hover/native:fill-washed-purple-400`}
      />
      <path
        d="M9 16C9 14.8954 9.89543 14 11 14H13C14.1046 14 15 14.8954 15 16V22H9V16Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
    </svg>
  );
};

export default CypressHomeIcon;
