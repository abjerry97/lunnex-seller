import React from "react";

export default function PlusIcon(props:any) {
  const { active, mobile } = props;
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 15 15" 
      fill={active & mobile ? "#FF3365" : active ? "#FF3365" : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.46875 8.625H0.21875V7.125H6.46875V0.875H7.96875V7.125H14.2188V8.625H7.96875V14.875H6.46875V8.625Z"
     fill={active & mobile ? "#FF3365" : active ? "#FF3365" : "#0B0B16"}
      />
    </svg>
  );
}
