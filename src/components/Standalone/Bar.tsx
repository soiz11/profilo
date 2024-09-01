import React from "react";

const Bar = ({
  widthAmount,
  title = "",
}: {
  widthAmount: Number;
  title?: string;
}) => {
  return (
    <div className="flex flex-col justify-center w-[100%]">
      {title && (
        <div className="xs:text-[20px] text-[16px] font-[500] pb-[1px] pt-0 translate-y-[-2px]">
          {title}
        </div>
      )}
      <div className="flex bg-[#939393] xxs:h-[4px] h-[3px]">
        <div
          className="flex bg-[#333333]"
          style={{ width: `${widthAmount}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
