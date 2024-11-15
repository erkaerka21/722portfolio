const HeroIntroImg = () => {
  return (
    <div style={{ width: "300px", height: "360px" }} className="pt-14">
      <div
        className="bg-slate-200"
        style={{ position: "relative", width: "260px", height: "300px" }}
      >
        <img
          src="/Erdenesuren.jpg"
          alt="zurag-intro"
          className="object-cover border-solid border-white border-8"
          style={{
            position: "absolute",
            width: "260px",
            height: "300px",
            bottom: "25px",
            right: "25px",
          }}
        />
      </div>
    </div>
  );
};
export default HeroIntroImg;
