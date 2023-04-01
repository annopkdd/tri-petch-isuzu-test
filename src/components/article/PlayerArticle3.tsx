const PlayerArticle3 = (props: { className?: string }) => {
  return (
    <div className={props.className}>
      <div className="flex flex-row items-center">
        <div className="flex flex-col items-center">
          <span className="xl:w-[21px] text-primary md:text-[#8F6BE8] text-[14px] md:text-lg !leading-[16px] xl:!leading-[21px] xl:tracking-[1.5px]">
            03
          </span>
          <div className="bg-purple md:bg-white w-[22px] h-[5px] rounded-[2.5px] mt-[1px] md:mt-1" />
        </div>
        <span className="text-[28px] md:text-4xl !leading-[33px] md:!leading-[42px] tracking-[1.5px] text-textthird ml-[9px] md:ml-[10px]">
          GROWTH
        </span>
      </div>
      <span className="md:max-w-[432px] xl:max-w-[717px] block text-[15px] md:text-lg xl:text-xl text-primary md:text-white !leading-[18px] md:!leading-[28px] xl:!leading-[23px] md:tracking-[0.93px] xl:tracking-[0.65px] mt-[20px] md:mt-[21px]">
        Save your time, recruit proper athlets for your team.
      </span>
    </div>
  );
};

export default PlayerArticle3;
