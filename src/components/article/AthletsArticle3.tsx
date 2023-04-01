import ArticleNumber from "./ArticleNumber";

const AthletsArticle3 = (props: { className?: string }) => {
  return (
    <div className={`flex flex-col ${props.className || ""}`}>
      <div className="flex flex-row items-center">
        <ArticleNumber number="03" lineClassName="bg-purple md:bg-white" />
        <span className="text-[28px] md:text-4xl !leading-[33px] md:!leading-[42px] tracking-[1.5px] text-textthird ml-[9px] md:ml-[10px]">
          GROWTH
        </span>
      </div>
      <span className="max-w-[717px] text-[15px] md:text-lg xl:text-xl !leading-[18px] md:!leading-[28px] tracking-[0.74px] md:tracking-[0.837px] xl:tracking-[0.93px] text-primary md:text-white mt-[20px] md:mt-[21px] pr-[0] pr-[30.8px] xl:pr-[0]">
        Resources and tools for you to get better as a student Athelte. Access
        to training classes, tutor sessions, etc 
      </span>
    </div>
  );
};

export default AthletsArticle3;
