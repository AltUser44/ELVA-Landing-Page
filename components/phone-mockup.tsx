import { ElvaLogo } from "./elva-logo"
import { WavingCharacter } from "./waving-character"

export function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[560px] bg-black rounded-[40px] p-3 shadow-xl animate-float">
      {/* Phone frame */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[30px] bg-black rounded-b-[16px] z-10 flex justify-center items-start">
        <div className="w-[10px] h-[10px] bg-gray-700 rounded-full mt-2"></div>
      </div>

      {/* Phone screen */}
      <div className="w-full h-full bg-purple-400 rounded-[32px] overflow-hidden flex flex-col items-center pt-12 px-4">
        <h2 className="text-xl font-bold text-[#2D2A54]">Welcome to</h2>
        <img src="/slogan.png" alt="Elva Slogan" className="w-28 h-auto my-2" />

        {/* Inner phone mockup */}
        <div className="mt-0 w-[160px] h-[280px] bg-blue-200 rounded-[24px] border-2 border-gray-600 overflow-hidden flex flex-col items-center p-4">
          <ElvaLogo className="w-30 h-30" />

          {/* 3D Male Character */}
          <WavingCharacter />

          <button className="mt-auto mb-4 bg-purple-400 text-white text-xs py-1 px-3 rounded-full">Get Started</button>
        </div>
      </div>
    </div>
  )
}
