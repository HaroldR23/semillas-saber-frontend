/* eslint-disable @next/next/no-img-element */
const Logo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="overflow-hidden shrink-0"
        style={{ width: 100, height: 80 }}
      >
        <img
          src="/logo_semillas_saber.png"
          alt="Semillas del Saber"
          style={{ width: 100, height: 100  }}
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`text-2xl font-bold bg-linear-to-r from-[#2563eb] to-[#10b981] text-transparent bg-clip-text`}
        >
          Semillas
        </span>
        <span
          className={`text-xl font-medium text-gray-500 tracking-wide -mt-0.5`}
        >
          del Saber
        </span>
      </div>
    </div>
  );
}

export default Logo;
