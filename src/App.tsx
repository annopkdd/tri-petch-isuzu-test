import React from "react";

function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="relative grid grid-cols-2 gap-x-0 pt-6">
        {/* Line 1 */}
        <div className="bg-white flex flex-row justify-center">
          <img
            src="/images/footballer_1.png"
            width={678}
            height={950}
            className="absolute top-[35px]"
          />
        </div>
        <div className="bg-white flex flex-col pb-[56px]">
          <span className="text-[90px] leading-[1.17] text-textsecondary">
            ATHLETS
          </span>
          <div className="flex flex-row items-center mt-[59px]">
            <div className="flex flex-col">
              <span className="text-lg">01</span>
              <div className="bg-purple w-[19px] h-[5px] rounded-[2.5px] mt-1" />
            </div>
            <span className="text-4xl text-textthird ml-[10px]">
              CONNECTION
            </span>
          </div>
          <span className="text-xl mt-[31px]">
            Connect with coaches directly, you can ping coaches to view profile.
          </span>
        </div>

        {/* Line 2 */}
        <div className="bg-[#F5F4F9]" />
        <div className="bg-[#F5F4F9] flex flex-col pt-[53px] pb-[51px]">
          <div className="flex flex-row items-center">
            <div className="flex flex-col">
              <span className="text-lg">02</span>
              <div className="bg-purple w-[19px] h-[5px] rounded-[2.5px] mt-1" />
            </div>
            <span className="text-4xl text-textthird ml-[10px]">
              COLLABORATION
            </span>
          </div>
          <span className="text-xl mt-[21px]">
            Work with other student athletes to  increase visability. When you
            share and like other players videos it will increase your visability
            as a player. This is the team work aspect to Surface 1.
          </span>
        </div>

        {/* Line 3 */}
        <div className="bg-[#5E3DB3]" />
        <div className="bg-[#5E3DB3] flex flex-col pt-[85px] pb-[98px]">
          <div className="flex flex-row items-center">
            <div className="flex flex-col">
              <span className="text-lg">02</span>
              <div className="bg-white w-[19px] h-[5px] rounded-[2.5px] mt-1" />
            </div>
            <span className="text-4xl text-textthird ml-[10px]">GROWTH</span>
          </div>
          <span className="text-xl text-white mt-[21px]">
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc 
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
