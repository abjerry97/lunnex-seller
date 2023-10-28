import React from "react";

export default function HomeIcon(props: any) {
  const { active, mobile } = props;
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={active && mobile ? "#FF3365" : active ? "#FF3365" : "black"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3349_6271)">
        <path
          d="M10.4996 19.5V14.5H14.4996V19.5C14.4996 20.05 14.9496 20.5 15.4996 20.5H18.4996C19.0496 20.5 19.4996 20.05 19.4996 19.5V12.5H21.1996C21.6596 12.5 21.8796 11.93 21.5296 11.63L13.1696 4.09997C12.7896 3.75997 12.2096 3.75997 11.8296 4.09997L3.46961 11.63C3.12961 11.93 3.33961 12.5 3.79961 12.5H5.49961V19.5C5.49961 20.05 5.94961 20.5 6.49961 20.5H9.49961C10.0496 20.5 10.4996 20.05 10.4996 19.5Z"
          fill={active && mobile ? "#FF3365" : active ? "#FF3365" : "black"}
        />
      </g>
      <defs>
        <clipPath id="clip0_3349_6271">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
