export const textClasses = {
  "2xl": "text-6xl text-black md:text-8xl xl:text-8xl w-fit",
  xl: "text-5xl text-black md:text-6xl xl:text-7xl w-fit",
  lg: "text-2xl text-black md:text-3xl xl:text-4xl w-fit",
  md: "text-lg text-black md:text-xl xl:text-2xl w-fit",
  sm: "text-base text-black xl:text-lg w-fit",
  xs: "text-sm text-black md:text-base w-fit",
  xxs: "text-xs text-black md:text-sm w-fit",
};
// Define your gradients as a const assertion
export const gradientClasses = [
  "bg-[linear-gradient(111.33deg,_#0003A9_6.4%,_#FF8686_64.2%,_#EA75B7_115.46%)]",
  "bg-[linear-gradient(88.57deg,_#FB8D8D_-20.09%,_#5B00FF_110.21%)]",
  "bg-[linear-gradient(105.89deg,_#0003A9_-13.92%,_#EA75B7_97.27%,_#FF8686_45.01%)]",
  "bg-[linear-gradient(73.05deg,_#0003A9_-51.66%,_#FF8686_20%,_#EA75B7_89.86%)]",
  "bg-[linear-gradient(107.68deg,_#140062_2.27%,_#120116_103.93%)]",
  "bg-[linear-gradient(107.21deg,_#A4C3FF_0.01%,_#FFFFFF_100.46%)]",
  "bg-[linear-gradient(116.34deg,_#8E0088_2.05%,_#000000_77.06%)]",
  "bg-[linear-gradient(110.67deg,_#FFFFFF_-1.11%,_#F800FD_90.05%)]",
  "bg-[linear-gradient(89.54deg,_#FF8686_0.57%,_#EA75B7_82.68%)]",
  "bg-[linear-gradient(340.39deg, #FF8686_8.6%, #EA75B7_84.43%, #2326A3_161.52%)]",
];
export const buttonClasses = {
  xxs: "p-1 text-xs gap-1",
  xs: "p-2 text-sm gap-1",
  sm: "px-3 py-2 text-base gap-2",
  md: "px-5 py-3 text-lg gap-2",
  lg: "px-5 py-3 text-xl gap-4",
  xl: "px-6 py-4 text-2xl xl:text-3xl gap-4",
  "2xl": "px-6 py-5 text-3xl xl:text-5xl gap-5",
};
export const iconLinkClasses = {
  sm: "px-3 py-1 xl:px-3.5",
  md: "px-3 md:px-3.5 xl:px-4 py-2 xl:py-2.5",
  lg: "px-3.5 py-3 md:py-3.5 xl:p-4 text-xl gap-5",
};

// Convert gradientClasses to an object with keys formatted as "gradient-0", "gradient-1", etc.
export const customGradients = Object.fromEntries(
  gradientClasses.map((item, index) => [`gradient-${index}`, item])
);

export const buyPredictionDialogClasses =
  "rounded-2xl max-w-[calc(100vw-1.5rem)] sm:max-w-md bg-white md:max-w-screen-md lg:max-w-screen-lg 3xl:max-w-screen-xl close:hidden hide-scrollbar";
