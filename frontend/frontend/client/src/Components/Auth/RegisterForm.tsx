import { useNavigate } from "react-router";
import style from "../../../public/css/Register.module.scss";
import { FormButton } from "../ReusableComponents/FormButton";
import { Button } from "../ReusableComponents/Button";
import { useAppDispatch, useAppSelector } from "../../STORE/store";
import { useState } from "react";
import { IUser } from "../../MODELS/User";
import { createUser } from "../../STORE/features/authSlice";

export const RegisterForm = () =>{

    const dispatch = useAppDispatch();
    const [bodyRegister, 
        setBodyRegister] = useState({} as Omit<IUser, "id"|"role">);
    const navigate = useNavigate()

    const handleOnChange = (e:any) =>{
        setBodyRegister({...bodyRegister, [e.target.name]: e.target.value})
    }

    const register = async (e:any) =>{
        e.preventDefault()

        await dispatch(createUser(bodyRegister))
        .then(() => navigate("/login"))

    }
   

    const navigateLogin = () =>{
        navigate("/login")
    }
    console.log(bodyRegister)
    return(
        <div className={style.registerForm}>
            <form method="post" onSubmit={(e)=> register(e)}>
                <div className={style.formInput}>
                    <img src="http://127.0.0.1:3002/user.png"/>
                    <input type="text" placeholder="nome..." name="username" onChange={(e) => handleOnChange(e)}/>
                </div>

                <div className={style.formInput}>
                    <img src="http://127.0.0.1:3002/e-mail.png"/>
                    <input type="text" placeholder="email..." name="email" onChange={(e) => handleOnChange(e)}/>
                </div>

                <div className={style.formInput}>
                    <img src="http://127.0.0.1:3002/key.png"/>
                    <input type="text" placeholder="senha..." name="password" onChange={(e) => handleOnChange(e)}/>
                </div>

                <input className={style.formButtonWrapper} type="submit" value={"Registrar"}/>
                   
                

                <p>Você já tem uma conta? realize o seu <span onClick={navigateLogin}>login</span></p>

            </form>
        </div>
    )

}