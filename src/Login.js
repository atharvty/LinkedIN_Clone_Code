import React ,{useState} from 'react'
import './Login.css'
import { login } from './features/userSlice';
import logo from './images/linkedin.png';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';

function Login() {


    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");
    const[profilePic,setProfilepic] = useState("");
    const dispatch = useDispatch();

    const loginToApp =(e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.uid,
                profileURL: userAuth.user.photoURL,
            }))
        }).catch((error)=> alert(error));
        
    };

    const register =() =>{
        if(!name){
            return alert("Please enter a full name!");
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL :profilePic,

            })
            .then(()=>{
                dispatch(login({
                    email :userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:name,
                    photoURL:profilePic,
                }));

            });
        }).catch(error=> alert(error));

    };

    
    return (
        <div className="login">
            <img src={logo} alt=""/>

            <form>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value) } placeholder="Full name (required if registering)"/>
                <input type="text" value={profilePic}  onChange= {(e)=> setProfilepic(e.target.value)} placeholder="Profile pic URl (optional)"/>
                <input type="Email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input type="Password"  value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="password"/>

                <button type="submit" onClick={loginToApp}>Sign In</button>


            </form>
            <p>Not a member? {" "} <span className="login__register" onClick={register}>Register Now</span></p>
            
        </div>
    )
}

export default Login
