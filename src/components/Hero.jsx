import logo from "../assets/logo.svg";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
    <nav className="flex w-full justify-between pt-4 mb-10">
    <img src={logo} alt="logo_img" className="w-28" />
    
    <button className="black_btn" onClick={() => window.open('https://github.com/SANTAZ10')}>
    Github
    </button>
    </nav>
    
    <h1 className="head_text">
    Sumarize Articles with <br  className="max-md:hidden"/>
    <span className="orange_gradient"> OpenAI GPT-4</span>
    </h1>
    <h2 className="desc">
    Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries
    </h2>
    </header>
  );
};

export default Hero;
