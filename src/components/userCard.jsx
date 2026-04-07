
const UserCard = ({ feedUser }) => {
    const {
        Fname,
        Lname,
        age,
        gender,
        profileurl,
        emailId,
        password,
        about,
        skills
    } = feedUser || {};

    return (
        <div className="card bg-base-200 w-96 shadow-sm my-2 mb-20">

            <figure>
                <img
                    className="w-full h-65 object-cover border border-white rounded-2xl"
                    src={profileurl || "https://via.placeholder.com/300"}
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
                <p>{emailId}</p>
                {/* ✅ Password */}
                <p>{password || "Password not available"}</p>

                {/* ✅ Skills */}
                <p>
                    {Array.isArray(skills)
                        ? skills.join(", ")
                        : "Skills not available"}
                </p>

                {/* ✅ About */}
                <p>{about || "About not available"}</p>

                <div className="card-actions justify-center mt-3 flex gap-15">
                    <button className="btn btn-primary">Ignore</button>
                    <button className="btn btn-secondary">Interested</button>
                </div>

            </div>
        </div>
    );
};

export default UserCard;