const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-tr from-[#123d] to-[#321d] h-[3rem] sm:h-[2.5rem] text-white px-2 flex items-center fixed bottom-0 z-10">
      <div className="ml-auto mr-[0.5rem] sm:mr-[2rem]">
        <span>Copyright © NewsAPI. All rights reserved 2024. Developed by</span>
        <a
          href="https://ismaildevcode.netlify.app/"
          className="hover:text-[#0ef] hover:underline text-[orange] ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mohammed Ismail
        </a>
      </div>
    </footer>
  );
};

export default Footer;