import * as React from "react";

export const SearchIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    width="49"
    height="50"
    fill="none"
    viewBox="0 0 49 50"
  >
    <g id="vuesax/linear/search-normal">
      <g
        id="search-normal"
        stroke="#919399"
        strokeWidth="1.2"
        filter="url(#filter0_d_1_13862)"
      >
        <path
          id="Vector"
          d="M30.9 18.583a7.317 7.317 0 1 1-14.633 0 7.317 7.317 0 0 1 14.634 0Z"
        ></path>
        <path id="Vector_2" d="m32.333 27.333-1.667-1.667"></path>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_1_13862"
        width="48.121"
        height="48.122"
        x="0.152"
        y="0.969"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="5.818"></feOffset>
        <feGaussianBlur stdDeviation="7.758"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_13862"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_13862"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);
