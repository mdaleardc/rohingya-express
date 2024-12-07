import Card from "./Card";
import { useState, useEffect } from "react";


const Newsapp = () => {
  
  const ApiKey = "e9c0d4139e984700a9999722c72b34b0";
  
  const [search, setSearch] = useState("Rohingya");
  const [newsData, setNewsData] = useState();
  
  const handleInput = (e) => {
    setSearch(e.target.value);
  }
  
  const getData = async () => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${ApiKey}`);
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
    setSearch("");
  }
  
  useEffect(()=> {
    getData();
  }, []);
  
  
  const userInput = (e) => {
    setSearch(e.target.value);
  }
  
  return (
    <div>
    <div className='bg-gray-800 w-full tracking-wider fixed top-0 z-1'>
    <nav className='w-full sm:max-w-3xl py-[1rem] mx-auto text-white text-xl px-3 font-normal grid sm:flex sm:flex-rows justify-between items-center'>
    <div className='flex flex-rows gap-x-4'>
    <div>Trendy News</div>
    <ul className='flex flex-rows gap-4'>
    <a>All News</a>
    <a>Trending</a>
    </ul>
    </div>
    <div className='flex flex-rows gap-x-2'>
    <input
    type="text"
    placeholder='Search News'
    className='outline-none pl-2 rounded-md text-black caret-red-500 w-4/6'
    onChange={handleInput} value={search}/>
    <button
    className='border-[2xl] rounded-md bg-[#26c] py-1 px-3'
    onClick={getData}>Search</button>
    </div>
    </nav>
    </div>
    <p className='pt-[4rem] sm:pt-9 text-center text-white font-semibold tracking-widest'>Stay Updated with Trending News</p>
    <div className='w-full sm:w-4/6 mx-auto px-2 grid grid-cols-2 sm:flex flex-rows gap-2 justify-between items-center text-md font-semibold py-5'>
    <button onClick={userInput}
    className='border-[1px] rounded-md text-white bg-[#c44] px-3 py-1 hover:text-[#c44] hover:bg-[#0ef]'
    value="sport">Sport</button>
    <button onClick={userInput}
    className='border-[1px] rounded-md text-white bg-[#c44] px-3 py-1 hover:text-[#c44] hover:bg-[#0ef]'
    value="entertainment">Entertainment</button>
    <button onClick={userInput}
    className='border-[1px] rounded-md text-white bg-[#c44] px-3 py-1 hover:text-[#c44] hover:bg-[#0ef]'
    value="health">Health</button>
    <button onClick={userInput}
    className='border-[1px] rounded-md text-white bg-[#c44] px-3 py-1 hover:text-[#c44] hover:bg-[#0ef]'
    value="rohingya">Rohingya</button>
    <button onClick={userInput}
    className='border-[1px] rounded-md text-white bg-[#c44] px-3 py-1 hover:text-[#c44] hover:bg-[#0ef]'
    value="politics">Politics</button>
    </div>
    
    <div>
    </div>
    <Card data={newsData}/>
    </div>
    )
}

export default Newsapp;