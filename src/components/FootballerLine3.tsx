const FootballerLine3 = () => {
  return (
    <div className="flex flex-row bg-[#5E3DB3] md:pt-[30px] xl:pt-[85px] md:pb-[30px] xl:pb-[98px]">
      <div className="flex-[1] " />
      <div className="md:flex-[1.5] xl:flex-[1] flex flex-col">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <span className="text-lg">03</span>
            <div className="bg-white w-[19px] h-[5px] rounded-[2.5px] mt-1" />
          </div>
          <span className="text-4xl tracking-[1.5px] text-textthird ml-[10px]">
            GROWTH
          </span>
        </div>
        <span className="max-w-[717px] md:text-lg xl:text-xl !leading-[28px] md:tracking-[0.837px] xl:tracking-[0.93px] text-white mt-[21px] pr-[30.8px] xl:pr-[0]">
          Resources and tools for you to get better as a student Athelte. Access
          to training classes, tutor sessions, etc 
        </span>
      </div>
    </div>
  );
};

export default FootballerLine3;
