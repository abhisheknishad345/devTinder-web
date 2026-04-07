
import Profile from './Profile'
import { useSelector } from 'react-redux'

const EditProfile = () => {

    const user = useSelector((store) => store.user);

    // console.log("Redux user:", user);
    // console.log("Inner user:", user?.currentUser);
    return (
        user && (
            <div>
                <Profile newUser={user} />
            </div>
        )
    )
}

export default EditProfile