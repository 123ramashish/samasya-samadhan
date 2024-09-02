import Bannerlogo from "../assets/Bannerlogo.mp4";

export default function Banner() {
  return (
    <>
      <div className="relative flex items-center justify-center h-[500px] border-4 border-green-300">
        <video
          height="1200"
          className="absolute inset-0 w-full h-full object-cover"
          src={Bannerlogo}
          autoPlay
          muted
          loop
        />
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold text-green-400 font-mono">
            Let&apos;s Join and Clean
          </h1>
        </div>
      </div>
    </>
  );
}
