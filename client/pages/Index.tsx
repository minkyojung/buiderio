import { useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Index() {
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-[620px]">
        <div className="relative backdrop-blur-[13.8px]">
          {/* Main card container */}
          <div className="rounded-[25px] border border-[#D3D3D3] bg-[#F4F4F4] shadow-[0_4px_25px_rgba(160,160,160,0.05)] p-1.5">
            {/* Header with icon and text */}
            <div className="px-5 py-3.5 flex items-center gap-[10px]">
              <GridIcon />
              <span className="text-[13px] font-medium text-[#717171]">
                Check plan from notion...
              </span>
            </div>

            {/* Input area */}
            <div className="rounded-[22px] border border-[#F3F3F3] bg-[#F9F9F9] shadow-[0_4px_25px_rgba(160,160,160,0.05)] px-[22px] py-4 min-h-[120px] relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Make something wonderful..."
                className="w-full bg-transparent border-none outline-none resize-none text-[15px] font-normal text-foreground placeholder:text-[#BBB] min-h-[40px]"
                rows={3}
              />

              {/* Bottom controls */}
              <div className="flex items-center justify-between mt-2">
                {/* Button group */}
                <div className="flex items-center gap-2">
                  <button className="h-7 px-3.5 rounded-[9px] border border-[#E8E8E8] bg-[#F3F3F3] text-[#626262] text-[13px] font-medium tracking-[-0.39px] hover:bg-[#ECECEC] transition-colors">
                    Sonnet
                  </button>
                  <button className="h-7 px-2.5 rounded-[9px] border border-[#E8E8E8] bg-[#F3F3F3] text-[#626262] text-[13px] font-medium tracking-[-0.39px] hover:bg-[#ECECEC] transition-colors flex items-center gap-1.5">
                    <ThinkIcon />
                    <span>Think</span>
                  </button>
                  <button className="h-7 px-2 rounded-[9px] border border-[#E8E8E8] bg-[#F3F3F3] text-[#626262] text-[13px] font-medium tracking-[-0.39px] hover:bg-[#ECECEC] transition-colors flex items-center gap-1">
                    <svg
                      width="14"
                      height="13"
                      viewBox="0 0 16 15"
                      fill="none"
                      className="w-3.5 h-[13px]"
                    >
                      <path
                        d="M7.60156 3.33704V0.599609H4.80156M9.70156 6.75883V8.12755M0.601562 7.44319H2.00156M13.2016 7.44319H14.6016M5.50156 6.75883V8.12755M13.2016 10.1806C13.2016 10.5436 13.0541 10.8918 12.7915 11.1484C12.529 11.4051 12.1729 11.5493 11.8016 11.5493H5.38116C5.00989 11.5494 4.65385 11.6937 4.39136 11.9504L2.84996 13.4573C2.78046 13.5253 2.6919 13.5715 2.5955 13.5903C2.4991 13.609 2.39918 13.5994 2.30838 13.5626C2.21757 13.5259 2.13995 13.4636 2.08534 13.3837C2.03073 13.3038 2.00158 13.2099 2.00156 13.1138V4.70576C2.00156 4.34275 2.14906 3.99461 2.41161 3.73793C2.67416 3.48124 3.03026 3.33704 3.40156 3.33704H11.8016C12.1729 3.33704 12.529 3.48124 12.7915 3.73793C13.0541 3.99461 13.2016 4.34275 13.2016 4.70576V10.1806Z"
                        stroke="#626262"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>Agent</span>
                  </button>
                </div>

                {/* Submit button */}
                <button className="w-[30px] h-[30px] rounded-full bg-[#F46D33] flex items-center justify-center hover:bg-[#E55D23] transition-colors">
                  <ArrowUp
                    className="w-[15px] h-[15px] text-white"
                    strokeWidth={1.5}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridIcon() {
  return (
    <div className="w-3 h-3 flex gap-[1px] flex-shrink-0">
      <div className="flex flex-col gap-[1.714px] w-0.5">
        <div className="h-[1.714px] bg-[#E5462A]" />
        <div className="h-[1.714px] bg-[#FB0000]" />
        <div className="h-[1.714px] bg-[#FB0000]" />
        <div className="h-[1.714px] bg-[#E5462A]" />
      </div>
      <div className="flex flex-col gap-[1.714px] w-0.5">
        <div className="h-[1.714px] bg-[#FB0000]" />
        <div className="h-[1.714px] bg-[rgba(170,100,2,0.5)]" />
        <div className="h-[1.714px] bg-[rgba(170,100,2,0.5)]" />
        <div className="h-[1.714px] bg-[#FB0000]" />
      </div>
      <div className="flex flex-col gap-[1.714px] w-0.5">
        <div className="h-[1.714px] bg-[#FB0000]" />
        <div className="h-[1.714px] bg-[rgba(170,100,2,0.5)]" />
        <div className="h-[1.714px] bg-[rgba(170,100,2,0.5)]" />
        <div className="h-[1.714px] bg-[#FB0000]" />
      </div>
      <div className="flex flex-col gap-[1.714px] w-0.5">
        <div className="h-[1.714px] bg-[#E5462A]" />
        <div className="h-[1.714px] bg-[#FB0000]" />
        <div className="h-[1.714px] bg-[#FB0000]" />
        <div className="h-[1.714px] bg-[#E5462A]" />
      </div>
    </div>
  );
}

function ThinkIcon() {
  return (
    <div className="w-3 h-3 flex gap-[1px] flex-shrink-0">
      <div className="flex flex-col gap-[1.714px] w-0.5">
        <div className="h-[1.714px] bg-[rgba(0,0,0,0.3)]" />
        <div className="h-[1.714px] bg-[#454545]" />
        <div className="h-[1.714px] bg-[#454545]" />
        <div className="h-[1.714px] bg-[rgba(0,0,0,0.3)]" />
      </div>
      <div className="flex flex-col gap-[1.714px] w-0.5">
        <div className="h-[1.714px] bg-[#454545]" />
        <div className="h-[1.714px] bg-[rgba(0,0,0,0.5)]" />
        <div className="h-[1.714px] bg-[rgba(0,0,0,0.5)]" />
        <div className="h-[1.714px] bg-[#454545]" />
      </div>
      <div className="flex flex-col gap-[1.714px] w-0.5">
        <div className="h-[1.714px] bg-[#454545]" />
        <div className="h-[1.714px] bg-[rgba(0,0,0,0.5)]" />
        <div className="h-[1.714px] bg-[rgba(0,0,0,0.5)]" />
        <div className="h-[1.714px] bg-[#454545]" />
      </div>
      <div className="flex flex-col gap-[1.714px] w-0.5">
        <div className="h-[1.714px] bg-[rgba(0,0,0,0.3)]" />
        <div className="h-[1.714px] bg-[#454545]" />
        <div className="h-[1.714px] bg-[#454545]" />
        <div className="h-[1.714px] bg-[rgba(0,0,0,0.3)]" />
      </div>
    </div>
  );
}
