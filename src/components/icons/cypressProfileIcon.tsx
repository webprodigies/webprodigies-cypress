import React, { FC } from 'react';

interface CypressProfileIconProps {}
const CypressProfileIcon: FC<CypressProfileIconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="7"
        r="5"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
      <path
        d="M3 19V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V19C21 16.2386 18.7614 14 16 14H8C5.23858 14 3 16.2386 3 19Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
        fillOpacity="0.827451"
      />
    </svg>
  );
};

export default CypressProfileIcon;
