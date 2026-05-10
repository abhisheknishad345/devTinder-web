
export default function Card() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
      <div className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">
        
        <div className="bg-white rounded-2xl shadow p-5">
          <img
            src="https://picsum.photos/300"
            alt=""
            className="w-full h-52 object-cover rounded-xl"
          />

          <h2 className="text-xl font-bold mt-4 text-black">
            Responsive Card
          </h2>

          <p className="text-gray-600 mt-2">
            This card adjusts automatically for mobile,
            tablet, and desktop screens.
          </p>

          <button className="
            mt-4
            bg-blue-500
            text-white
            px-4
            py-2
            rounded-lg
            w-full
            hover:bg-blue-600
            cursor-pointer
          ">
            Read More
          </button>
        </div>

      </div>
    </div>
  );
}