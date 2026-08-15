
const ShimmerCard = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-8">

      <div
        className="
          w-full
          max-w-[620px]
          min-h-[600px]
          bg-[#191d24]
          border border-gray-700/60
          rounded-3xl
          shadow-xl
          p-6 sm:p-8 md:p-10

          flex flex-col
          items-center

          animate-pulse
        "
      >

        {/* Profile Image */}
        <div
          className="
            w-40 h-40
            sm:w-44 sm:h-44
            md:w-48 md:h-48

            rounded-full
            bg-gray-700

            border-4
            border-gray-600
          "
        />

        {/* Name */}
        <div
          className="
            mt-8
            w-48
            h-8
            rounded-md
            bg-gray-700
          "
        />

        {/* Age + Gender */}
        <div
          className="
            mt-5
            w-28
            h-5
            rounded-md
            bg-gray-700
          "
        />

        {/* Skills */}
        <div
          className="
            mt-8
            w-52
            h-6
            rounded-md
            bg-gray-700
          "
        />

        {/* About */}
        <div className="mt-8 w-full flex flex-col items-center gap-3">

          <div
            className="
              w-4/5
              h-5
              rounded-md
              bg-gray-700
            "
          />

          <div
            className="
              w-3/5
              h-5
              rounded-md
              bg-gray-700
            "
          />

        </div>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            gap-4
            w-full
            sm:w-auto
          "
        >

          <div
            className="
              w-full
              sm:w-32
              h-12
              rounded-lg
              bg-gray-700
            "
          />

          <div
            className="
              w-full
              sm:w-40
              h-12
              rounded-lg
              bg-gray-700
            "
          />

        </div>

      </div>

    </div>
  );
};

export default ShimmerCard;