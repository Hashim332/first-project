import ContentDisplay from "./ContentDisplay";

const Home = () => {
  return (
    <div>
      <div className="text-4xl font-red-hat pt-6 font-bold bg-gradient-to-r from-red-600 via-blue-600 to-green-600 text-transparent bg-clip-text animate-gradient bg-300%">
        Hi, I'm Hashim
      </div>

      <div className="text-xl text-white font-red-hat p-8">
        I'm a Physics graduate interested in working in tech
      </div>

      <div className="text-lg text-white font-red-hat pb-8">
        Below is a little bit about me and my links are in the footer :)
      </div>

      <div>
        <ContentDisplay />
      </div>

      <div className="m-8">
        <a
          href="./Hashim_Rafiq_CV.pdf"
          download
          className="p-4 bg-secondary-900 hover:bg-red-900  text-white shadow-xl rounded-md font-red-hat"
        >
          <button className="w-1/12 p-2">📎 My CV</button>
        </a>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
