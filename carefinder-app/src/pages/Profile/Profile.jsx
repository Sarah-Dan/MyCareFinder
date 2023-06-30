import './profile.css'
import { useNavigate } from "react-router-dom";
import { UserAuth } from '../../contexts/AuthContext'
// import Button from '../../components/Button/Button';
// create a Profile component for users
const Profile = () => {
    const { user, signout } = UserAuth();
    const navigate = useNavigate();

    // handle sign out
    const handleSignOut = async () => {
        try {
            await signout();
            navigate('/');
            console.log('signed out successfully');
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <>
        {/* profile page for users */}
        <div className="profile__container">
            <div className='aside'>
                <div className='aside__content'>
                    <div className='logo'>
                        <h1>CareFinder</h1>
                    </div>
                    <div className='aside__links'>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/profile'>Profile</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                        </div>

                    {/* <Button onClick={handleSignOut} title='Sign Out' /> */}
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
                    

            </div>
            <div>
                <div className='profile__content'>
                    <h1>Profile</h1>
                    <div className='profile__details'>
                        <h4>Display name</h4>
                        <p>John Doe</p>
                    <p>
                        User Email: {user && user.email}
                    </p>
                    </div>
                    </div>
                        

            </div>
        </div>

       
        </>
    )
    }

export default Profile