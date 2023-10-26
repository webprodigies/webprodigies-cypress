import React, { FC } from 'react';

interface CypressTemplateIconProps {}
const CypressTemplateIcon: FC<CypressTemplateIconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.12132 2.87868C5.68393 2.31607 6.44699 2 7.24264 2H16.7574C17.553 2 18.3161 2.31607 18.8787 2.87868L21.2164 5.21639C21.7181 5.71813 22 6.39863 22 7.10819V7.10819C22 7.60072 21.6007 8 21.1082 8H2.89181C2.39928 8 2 7.60072 2 7.10819V7.10819C2 6.39863 2.28187 5.71813 2.78361 5.21639L5.12132 2.87868Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
      <path
        d="M2 7C2 6.44772 2.44772 6 3 6H21C21.5523 6 22 6.44772 22 7V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V7Z"
        className={`dark:fill-[#2B2939] fill-[#D3D3D3] text-xl transition-all group-hover/native:fill-washed-purple-400`}
      />
      <path
        d="M13.002 10.9996C13.002 10.4473 12.5542 9.99957 12.002 9.99957C11.4497 9.99957 11.002 10.4473 11.002 10.9996V15.0859L10.2071 14.291C9.81658 13.9005 9.18342 13.9005 8.79289 14.291C8.40237 14.6816 8.40237 15.3147 8.79289 15.7052L10.5877 17.5C11.3687 18.2811 12.635 18.2811 13.4161 17.5L15.2071 15.709C15.5976 15.3185 15.5976 14.6853 15.2071 14.2948C14.8166 13.9043 14.1834 13.9043 13.7929 14.2948L13.002 15.0858V10.9996Z"
        className={`dark:fill-[#817EB5]  fill-Neutrals/neutrals-7 transition-all group-hover/native:fill-washed-blue-500`}
      />
    </svg>
  );
};

export default CypressTemplateIcon;
