import bgImage from "../assets/banner.jpg";
import nuts from "../assets/nutrition.png";
const Banner = () => {
  return (
    <div
      class="hero min-h-[600px] mt-16"
      style={{
        backgroundImage: `url(${bgImage})`, // Fixed the incorrect interpolation
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
