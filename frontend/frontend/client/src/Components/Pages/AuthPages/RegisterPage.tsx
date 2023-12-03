import style from "../../../../public/css/Register.module.scss"
import { RegisterForm } from "../../Auth/RegisterForm"

export const RegisterPage = () =>{


    return(
        <div className={style.registerPage}>
            <div className={style.registerPageContainer}>
                <div className={style.userLogo}>
                    <img src="http://127.0.0.1:3002/user-interface.png"/>
                    <div>Registrar</div>
                </div>
                <div className={style.registerFormWrapper}>
                    <RegisterForm/>
                </div>
            
            </div>
        </div>
        
    )
}