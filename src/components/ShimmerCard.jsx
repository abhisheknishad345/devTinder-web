const ShimmerCard = () => {
  return (
    <div
      className="
        w-full
        max-w-sm
        sm:max-w-md
        bg-base-300
        rounded-2xl
        shadow-lg
        animate-pulse
        p-4
        mx-auto
      "
    >
      <div className="flex justify-center">
        <div
          className="
            w-28
            h-28
            sm:w-36
            sm:h-36
            bg-gray-300
            rounded-full
          "
        ></div>
      </div>

      <div className="mt-6 space-y-4">
        
        <div
          className="
            h-6
            bg-gray-300
            rounded-lg
            w-3/4
            mx-auto
          "
        ></div>

        <div
          className="
            h-4
            bg-gray-300
            rounded-lg
            w-1/2
            mx-auto
          "
        ></div>

        <div
          className="
            h-4
            bg-gray-300
            rounded-lg
            w-full
          "
        ></div>

        <div
          className="
            h-4
            bg-gray-300
            rounded-lg
            w-5/6
          "
        ></div>

        <div
          className="
            flex
            flex-col
            sm:flex-row
            gap-3
            pt-3
          "
        >
          <div
            className="
              h-10
              bg-gray-300
              rounded-xl
              w-full
            "
          ></div>

          <div
            className="
              h-10
              bg-gray-300
              rounded-xl
              w-full
            "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;