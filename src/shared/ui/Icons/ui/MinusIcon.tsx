import { IconProps } from '../model/types';

const HomeIcon = ({ height = 24, width = 24 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.125 12C4.125 11.5168 4.51675 11.125 5 11.125H19C19.4832 11.125 19.875 11.5168 19.875 12C19.875 12.4832 19.4832 12.875 19 12.875H5C4.51675 12.875 4.125 12.4832 4.125 12Z"
        fill="#181D25"
      />
    </svg>
  );
};

export default HomeIcon;
