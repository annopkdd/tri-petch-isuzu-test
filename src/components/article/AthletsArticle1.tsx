import ArticleNumber from "./ArticleNumber";

const AthletsArticle1 = (props: { className?: string }) => {
  return (
    <div className={`flex flex-col ${props.className || ""}`}>
      <div className="flex flex-row items-center">
        <ArticleNumber number="01" />
        <span className="w-[239px] text-[28px] md:text-4xl !leading-[33px] md:!leading-[42px] tracking-[1.5px] text-textthird ml-[9px] md:ml-[10px]">
          CONNECTION
        </span>
      </div>
      <span className="text-[15px] md:text-lg xl:text-xl !leading-[18px] md:!leading-[28px] tracking-[0.74px] md:tracking-normal mt-[20px] md:mt-[21px] xl:mt-[31px] pr-[20px]">
        Connect with coaches directly, you can ping coaches to view profile.
      </span>
    </div>
  );
};

export default AthletsArticle1;
