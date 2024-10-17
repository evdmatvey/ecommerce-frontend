import { IconProps } from '../model/types';

const ArrowDownIcon = ({ height = 24, width = 24 }: IconProps) => {
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
        d="M5.38128 8.38128C5.72299 8.03957 6.27701 8.03957 6.61872 8.38128L12 13.7626L17.3813 8.38128C17.723 8.03957 18.277 8.03957 18.6187 8.38128C18.9604 8.72299 18.9604 9.27701 18.6187 9.61872L12.6187 15.6187C12.277 15.9604 11.723 15.9604 11.3813 15.6187L5.38128 9.61872C5.03957 9.27701 5.03957 8.72299 5.38128 8.38128Z"
        fill="#181D25"
      />
    </svg>
  );
};

export default ArrowDownIcon;
