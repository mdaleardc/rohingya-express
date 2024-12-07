import waitImg from "../assets/please-wait.gif";

const Card = ({ data }) => {
  console.log(data);
  
  // Handling no data or empty data state
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className="w-3/5 mx-auto text-center">
        <img src={waitImg} className="w-full object-cover text-center" alt="Loading..." />
      </div>
    );
  }

  // Filter data to only include items with valid fields
  const filteredData = data.filter(item => item.author && item.title && item.urlToImage);

  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="mx-2 my-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
      {filteredData.map((item, index) => {
        const apiData = item.publishedAt;
        const trimedDate = apiData ? apiData.split("T")[0] : "No Date Available";
        const imageUrl = item.urlToImage || 'path/to/fallback-image.jpg';  // Add fallback image

        return (
          <div className="border-[2px] rounded-md bg-[#eee]" key={index}>
            <img src={imageUrl} className="rounded-md" alt={item.title} />
            <div className="p-3 mx-auto">
              <a href={item.url} className="hover:underline text-xl font-semibold mx-auto">
                {item.title}
              </a>
              <p className="pt-4">{item.description}</p>
              <p className="font-semibold">{trimedDate}</p>
              <button
                className="border-[1px] border-[#eef] rounded-[4px] bg-[#0092ee] text-white p-2 py-1"
                onClick={() => readMore(item.url)}
              >
                Read More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;