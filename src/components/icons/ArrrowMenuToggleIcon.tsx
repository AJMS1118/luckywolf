import * as React from "react";

export const ArrowMenuToggleIcon: React.FC<React.SVGProps<SVGElement>> = (
  props
) => (
  <svg
    style={{
      transform: (props as { isOpen?: boolean }).isOpen
        ? "rotate(0)"
        : "rotate(-180deg)",
      transition: "transform 0.3s ease",
    }}
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="14"
    fill="none"
    viewBox="0 0 22 14"
  >
    <path
      stroke="#919399"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 1h12M1 7h20M9 13h12M5 11 1 7l4-4"
    ></path>
  </svg>
);
