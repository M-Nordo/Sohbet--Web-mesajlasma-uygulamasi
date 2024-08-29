import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { signup, login, resetPass } from '../../config/firebase'

const Login = () => {

    const [currState,setCurrState] = useState("Üye Ol");
    const [userName,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (currState==="Üye Ol") {
            signup(userName,email,password);
        }else{
          login(email,password)
        }
    }
 
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo'/>
      <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{currState}</h2>
        {currState === "Üye Ol" ? <input onChange={(e)=>setUserName(e.target.value)} value={userName} type="text" placeholder='kullanıcı adı' className='form-input' required/> : null}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='e posta adresi' className='form-input' required/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='şifre' className='form-input' required/>
        <button type='submit'>{currState === "Üye Ol" ? "Hesap Oluştur" : "Giriş Yap"}</button>
        <div className="login-term">
            <input type="checkbox" />
            <p>Devam ederek kullanıcı sözleşmesini ve <br /> gizlilik politikasını kabul etmiş olursunuz.</p>
        </div>
        <div className='login-forgot'>
            {
                currState === "Üye Ol"
                ? <p className="login-toggle">Zaten bir hesabınız var mı ? <span onClick={()=>setCurrState("Giriş Yap")}>Tıklayın</span></p>
                : <p className="login-toggle">Bir hesap oluşturmak için <span onClick={()=>setCurrState("Üye Ol")}>Tıklayın</span></p>
            }
            {currState === "Giriş Yap" ? <p className="login-toggle">Şifremi unuttum <span onClick={()=>resetPass(email)}>Tıklayın</span></p> : null}
        </div>
      </form>
    </div>
  )
}

export default Login
