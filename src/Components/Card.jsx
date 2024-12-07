import waitImg from "../assets/please-wait.gif"


const Card = ({data}) => {
   console.log(data);
   if(!data || !Array.isArray(data)) {
     console.error("Invalid data", data);
     return <div className='w-3/5 mx-auto text-center'><img src={waitImg} className='w-full object-cover text-center'/></div>
   }
  
  const filteredData = data.filter(item => {
     return item.author !== null; 
  })
  
  const readMore = (url) => {
    window.open(url);
  }
  
  return (
    <div className="mx-2 my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
     {
       filteredData.map((item, index) => {
         
         const apiData = item.publishedAt;
         const trimedDate = apiData.split("T")[0];
         
         return (
         <div className='border-[2px] rounded-md bg-[#eee]' key={index}>
         <img src={item.urlToImage} className='rounded-md'/>
         <div className='p-3 mx-auto'>
         <a href={item.url} className='hover:underline text-xl font-semibold mx-auto'>{item.title}</a>
         <p className='pt-4'>{item.description}</p>
         <p className='font-semibold'>{trimedDate}</p>
         <button className='border-[1px] border-[#eef] rounded-[4px] bg-[#0092ee] text-white p-2 py-1' onClick={()=>readMore(item.url)}>Read More</button>
         </div>
         </div>
         )
       })
     }
    </div>
    )
}

export default Card;