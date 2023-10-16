import { flecheProps } from "../../interfaces/interfaces.js";

export const FlecheRetourUrl = ({ color }: flecheProps) => {
  return (
    <svg
      width="24"
      height="17"
      viewBox="0 0 24 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.6548 8.49993L9.32875 8.49993M0.999973 8.49993L7.66299 1.83691M0.999973 8.49993L7.66299 15.163M0.999973 8.49993L9.32875 8.49993M9.32875 8.49993L15.9918 1.83691M9.32875 8.49993L15.9918 15.163"
        stroke={color}
        strokeWidth="1.86565"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
