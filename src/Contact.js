const Contact = () => {
  return (
    <div>
      <div className="text-3xl text-white font-red-hat m-4">Contact 📩</div>

      <div className="text-xl text-white font-red-hat m-4">
        You can reach me via:
      </div>

      <div>
        <a
          className="text-white font-red-hat hover:underline"
          href="mailto:hashim.rafiq332@gmail.com"
        >
          hashim.rafiq332@gmail.com
        </a>
        <br />
        <a
          className="text-white font-red-hat hover:underline"
          href="https://www.linkedin.com/in/hashim-rafiq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
