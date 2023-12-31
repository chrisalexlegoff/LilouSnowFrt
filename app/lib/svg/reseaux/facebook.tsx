import { loaderProps } from "../../interfaces/interfaces.js";

export const FacebookIcon = ({ color, width, height }: loaderProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7029 0L0 21.9858L12.7029 43.9716H23.3222V30.2639H18.3252V23.6546H23.3222V18.0094C23.3222 13.5733 26.274 9.49958 33.0755 9.49958C35.8293 9.49958 37.8656 9.75602 37.8656 9.75602L37.7052 15.928C37.7052 15.928 35.6285 15.9083 33.3622 15.9083C30.9095 15.9083 30.5166 17.0063 30.5166 18.8286V23.6546H37.9002L37.5789 30.2639H30.5166V43.9716H38.1087L50.8117 21.9858L38.1087 0H12.7029Z"
        fill={color}
      />
    </svg>
  );
};
