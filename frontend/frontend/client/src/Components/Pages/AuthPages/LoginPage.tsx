
import style from "../../../../public/css/Login.module.scss"
import { LoginForm } from "../../Auth/LoginForm"
import { RegisterForm } from "../../Auth/RegisterForm"

export const LoginPage = () =>{


    return(
        <div className={style.loginPage}>
            <div className={style.loginPageContainer}>
                <div className={style.userLogo}>
                    <img src="http://127.0.0.1:3002/user-interface.png"/>
                    <div>Login</div>
                </div>
                <div className={style.loginFormWrapper}>
                    <LoginForm/>
                </div>
            
            </div>
        </div>
        
    )
}