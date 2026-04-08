
const UserCard = ({ newUser }) => {
    const {
        Fname,
        Lname,
        age,
        gender,
        profileurl,
        about,
        skills
    } = newUser;

    return (
        <div className="card bg-base-200 w-90 shadow-sm my-2 mb-5">

            <figure>
                <img
                    className="w-full h-65 object-cover border border-white rounded-2xl"
                    src={profileurl}
                    alt="profile"
                />
            </figure>

            <div className="card-body">

                {/* ✅ Name */}
                <h2 className="card-title">
                    {Fname ? `${Fname} ${Lname || ""}` : "User Name"}
                </h2>

                {/* ✅ Age + Gender */}
                <p>
                    {age ? `${age} ${gender || ""}` : "Age not available"}
                </p>

                {/* ✅ Skills */}
                <p>
                    {Array.isArray(skills)
                        ? skills.join(", ")
                        : "Skills not available"}
                </p>

                {/* ✅ About */}
                <p>{about || "About not available"}</p>

                <div className="card-actions justify-center mt-3 flex gap-15">
                    <button className="btn btn-primary text-[18px]">Ignore</button>
                    <button className='btn btn-secondary text-[18px]'>Interested</button>
                </div>

            </div>
        </div>
    );
};

export default UserCard;