import React from "react";
import { IconProps } from "./IconTypes";

const WindIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 42 36"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5002 7.8502L17.5002 7.83935L7.59393 7.83923L17.0964 4.22488L17.0953 4.22191C17.2773 4.17361 17.4656 4.15642 17.653 4.17114C17.6778 4.17308 17.7025 4.17558 17.7272 4.17863L17.7275 4.17868C17.9849 4.21058 18.2323 4.30228 18.4519 4.44715L18.4519 4.44717C18.6715 4.59204 18.8577 4.78646 18.9973 5.01638L18.9975 5.01675C19.1369 5.24668 19.2261 5.50636 19.2586 5.77701L19.2587 5.77753C19.2912 6.0483 19.2661 6.32328 19.1853 6.58258L19.1852 6.58279C19.1043 6.84216 18.9697 7.07936 18.7911 7.27724L18.7909 7.27742C18.6124 7.47522 18.3943 7.62876 18.1525 7.72696L18.152 7.72715C18.1293 7.73638 18.1064 7.7451 18.0833 7.7533C17.8955 7.82017 17.6983 7.8529 17.5002 7.8502ZM0 6.80981V11.5236L17.4642 11.5239C18.1275 11.5317 18.7872 11.4068 19.408 11.1547L19.4084 11.1545C19.8809 10.9626 20.3232 10.7001 20.722 10.3763C20.9344 10.2038 21.1345 10.014 21.3203 9.80813L21.3204 9.80795C21.8551 9.21552 22.2581 8.5054 22.5002 7.72893L22.5003 7.72872C22.7424 6.95225 22.8176 6.12884 22.7204 5.31803L22.7204 5.31751C22.6232 4.50667 22.3561 3.72871 21.9384 3.03987L21.9382 3.03949C21.5204 2.35057 20.9624 1.76803 20.3046 1.33401L20.3045 1.33399C20.0759 1.18316 19.8372 1.05158 19.5907 0.940077C19.1279 0.73072 18.6375 0.592153 18.1344 0.529896L18.1341 0.52985C17.3845 0.437153 16.6251 0.516088 15.9077 0.760927L15.9072 0.759357L15.8535 0.779781L15.8471 0.782025L15.8464 0.782284L15.8465 0.782449L0 6.80981ZM0 22.5938V26.3783L23.1102 35.0327L23.1099 35.0334C23.9463 35.3847 24.8459 35.5374 25.7447 35.4806C26.0903 35.4588 26.4325 35.4062 26.7678 35.324C27.3045 35.1923 27.8234 34.9845 28.3099 34.7051C29.1004 34.2511 29.7861 33.6191 30.318 32.8542C30.85 32.0892 31.2152 31.2101 31.3875 30.2795C31.5599 29.349 31.5351 28.3898 31.3151 27.4704C31.0951 26.5511 30.6851 25.6941 30.1146 24.9607C29.7633 24.5092 29.3566 24.1114 28.9061 23.777C28.6248 23.5682 28.3265 23.3841 28.014 23.2272C27.2026 22.8196 26.3158 22.6053 25.4168 22.5993V22.5938L0 22.5938ZM25.3931 26.2783L10.1764 26.2783L24.4723 31.6319L24.471 31.6357C24.8108 31.7676 25.1732 31.8241 25.5352 31.8013C25.9201 31.777 26.2952 31.6636 26.6337 31.4692C26.9722 31.2748 27.2658 31.0041 27.4936 30.6766C27.7214 30.349 27.8778 29.9725 27.9516 29.5741C28.0254 29.1756 28.0148 28.7648 27.9206 28.3711C27.8264 27.9774 27.6508 27.6105 27.4065 27.2964C27.1621 26.9823 26.855 26.7289 26.507 26.5541C26.1594 26.3795 25.7797 26.2877 25.3946 26.2852L25.393 26.2852L25.393 26.2845L25.3931 26.2783ZM33.2816 8.31763L33.28 8.31855L31.5588 5.11062L31.5569 5.10691L31.5603 5.10487C32.4922 4.55125 33.5323 4.22993 34.6006 4.16565C34.7555 4.15632 34.9105 4.15244 35.0652 4.15396C35.9783 4.16291 36.8825 4.35994 37.7263 4.73565C38.7131 5.17501 39.5909 5.847 40.2922 6.69985C40.9934 7.55271 41.4994 8.56367 41.7711 9.65486C42.0428 10.7461 42.0731 11.8884 41.8595 12.9938C41.6458 14.0992 41.1941 15.1383 40.539 16.0309C39.9789 16.7941 39.2829 17.4329 38.4915 17.9124C38.3574 17.9937 38.2204 18.0705 38.081 18.1424C37.119 18.639 36.0616 18.8963 34.9902 18.8948V18.8942H0V15.21H34.9951L34.9951 15.2061C35.5303 15.2068 36.0585 15.0783 36.5391 14.8302C37.0196 14.5822 37.4397 14.2214 37.7669 13.7755C38.0942 13.3296 38.3198 12.8105 38.4265 12.2583C38.5332 11.7061 38.5181 11.1355 38.3824 10.5904C38.2467 10.0453 37.9939 9.5403 37.6436 9.11427C37.2933 8.68824 36.8548 8.35256 36.3619 8.13309C35.869 7.91361 35.3348 7.8162 34.8005 7.84835C34.2668 7.88047 33.7471 8.04101 33.2816 8.31763Z"
        fill="url(#paint0_linear_63_3694)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_63_3694"
          x1="21"
          y1="0.492187"
          x2="21"
          y2="35.4922"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CED3EA" />
          <stop offset="1" stopColor="#7E83A9" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default WindIcon;
