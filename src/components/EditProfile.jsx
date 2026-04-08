
import Profile from './Profile'
import { useSelector } from 'react-redux'

const EditProfile = () => {

    const user = useSelector((store) => store.user);

    return (
        user && (
            <div>
                <Profile newUser={user} />
            </div>
        )
    )
}

export default EditProfile