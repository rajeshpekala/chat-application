import Header from "./Header";

function Starter() {
  return (
    <div className="bg-orange-100 min-h-screen">
      <Header />
      <div className="flex justify-center mt-40">
        <div className="flex justify-center items-center p-6 border border-black bg-blue-500 rounded-3xl mt-24 mb-16 mx-2 p-1/2 w-full ">
          <h1 className="text-2xl font-bold text-white flex flex-col">
            <span className="text-6xl">Message</span>
            <span className="text-6xl mb-3">privately</span>
            <span>Simple, Reliable, private messaging...</span>
            <span>all over the world</span>
          </h1>
          <img
            src="https://freepngimg.com/download/chat/97434-logo-pic-chat-free-transparent-image-hq.png"
            className="w-1/5 ml-4"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center items-center p-6 border border-black bg-blue-300 rounded-3xl m-2 p-1/2 w-full">
          <h1 className="text-2xl font-bold text-white flex flex-col">
            <span className="text-6xl">Keep</span>
            <span className="text-6xl mb-3">the conversation going...</span>
            <span>play with Emojis</span>
            <span>😀😀😂😍🥰</span>
          </h1>
          <img
            src="https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-phone-chat-apps-png-image_6523592.png"
            className="ml-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Starter;
