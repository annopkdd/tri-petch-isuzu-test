import ArticleNumber from "./ArticleNumber";

const PlayerArticle1 = (props: { className?: string }) => {
  return (
    <div className={`flex flex-col ${props.className || ""}`}>
      <div className="flex flex-row items-center">
        <ArticleNumber number="01" />
        <span className="text-[28px] md:text-4xl !leading-[33px] md:!leading-[42px] tracking-[1.5px] text-textthird ml-[9px] md:ml-[10px]">
          CONNECTION
        </span>
      </div>
      <span className="md:max-w-[432px] xl:max-w-[571px] block text-[15px] md:text-lg xl:text-xl !leading-[18px] md:!leading-[28px] mt-[20px] md:mt-[21px]">
        Connect with talented athlete directly, you can watch their skills
        through video showreels directly from Surface 1.
      </span>
    </div>
  );
};

export default PlayerArticle1;
