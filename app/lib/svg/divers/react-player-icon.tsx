import { reactPlayerButtonProps } from "../../interfaces/interfaces.js";

export const ReactPlayerIcon = ({
  color,
  classname,
}: reactPlayerButtonProps) => {
  return (
    <div className={classname}>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="bi:play-circle" clipPath="url(#clip0_194_4005)">
          <g id="Group">
            <path
              id="Vector"
              d="M30 56.25C23.0381 56.25 16.3613 53.4844 11.4384 48.5616C6.51562 43.6387 3.75 36.9619 3.75 30C3.75 23.0381 6.51562 16.3613 11.4384 11.4384C16.3613 6.51562 23.0381 3.75 30 3.75C36.9619 3.75 43.6387 6.51562 48.5616 11.4384C53.4844 16.3613 56.25 23.0381 56.25 30C56.25 36.9619 53.4844 43.6387 48.5616 48.5616C43.6387 53.4844 36.9619 56.25 30 56.25ZM30 60C37.9565 60 45.5871 56.8393 51.2132 51.2132C56.8393 45.5871 60 37.9565 60 30C60 22.0435 56.8393 14.4129 51.2132 8.7868C45.5871 3.16071 37.9565 0 30 0C22.0435 0 14.4129 3.16071 8.7868 8.7868C3.16071 14.4129 0 22.0435 0 30C0 37.9565 3.16071 45.5871 8.7868 51.2132C14.4129 56.8393 22.0435 60 30 60Z"
              fill="white"
            />
            <path
              id="Vector_2"
              d="M23.5163 18.9561C23.8229 18.7981 24.1673 18.7279 24.5113 18.753C24.8553 18.7782 25.1858 18.8977 25.4663 19.0986L38.5913 28.4736C38.8343 28.647 39.0324 28.876 39.1691 29.1415C39.3058 29.4069 39.3771 29.7012 39.3771 29.9998C39.3771 30.2984 39.3058 30.5927 39.1691 30.8582C39.0324 31.1236 38.8343 31.3526 38.5913 31.5261L25.4663 40.9011C25.1859 41.1017 24.8556 41.2212 24.5117 41.2464C24.1679 41.2715 23.8237 41.2013 23.5171 41.0436C23.2106 40.8858 22.9534 40.6466 22.774 40.3522C22.5945 40.0578 22.4997 39.7196 22.5 39.3748V20.6248C22.4996 20.2801 22.5943 19.942 22.7736 19.6476C22.9529 19.3532 23.2098 19.1139 23.5163 18.9561Z"
              fill={color}
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_194_4005">
            <rect width="60" height="60" fill={color} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};