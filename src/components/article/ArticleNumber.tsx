const ArticleNumber = (props: {
  number: "01" | "02" | "03";
  titleClassName?: string;
  lineClassName?: string;
  className?: string;
}) => {
  return (
    <div
      className={`h-[22px] md:h-[30px] flex flex-col items-center ${
        props.className || ""
      }`}
    >
      <span
        className={`xl:w-[21px] text-[14px] md:text-lg !leading-[16px] md:!leading-[21px] tracking-[1.5px] ${
          props.titleClassName || ""
        }`}
      >
        {props.number}
      </span>
      <div
        className={`bg-purple w-[17px] ${
          props.number === "01" ? "md:w-[19px]" : "md:w-[22px]"
        }  h-[5px] rounded-[2.5px] mt-[2px] md:mt-[3px] ${
          props.lineClassName || ""
        }`}
      />
    </div>
  );
};

export default ArticleNumber;
