import { flecheProps } from "../../interfaces/interfaces.js";

export const Fleche = ({ color, width, height, classname }: flecheProps) => {
  return (
    <svg
      className={classname}
      width={width}
      height={height}
      viewBox="0 0 21 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1429 1V13.1905M10.1429 65L19.2857 55.8571M10.1429 65L1 55.8571M10.1429 65V52.8095M10.1429 52.8095L1 42.1429M10.1429 52.8095L19.2857 42.1429M10.1429 52.8095V42.1429M10.1429 42.1429L14.7143 33L10.1429 23.8571M10.1429 42.1429V23.8571M10.1429 42.1429L5.57143 33L10.1429 23.8571M10.1429 23.8571V20.8095M10.1429 20.8095L4.04762 14.7143M10.1429 20.8095L16.2381 14.7143M10.1429 20.8095V13.1905M10.1429 13.1905L4.04762 7.09524M10.1429 13.1905L16.2381 7.09524"
        stroke={color}
        strokeWidth="1.70667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
