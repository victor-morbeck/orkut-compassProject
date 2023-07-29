
 import { useState } from "react"
 import "./RegisterForm.css"

 export const RegisterForm = () => {
    //  Gerenciamento de dados

    //  const [name, setName] = useState()
    //  const [email, setEmail] = useState()
    
    //  const handleName = (e) => {
        
     

   return (
     <>
    
     <div className="formContainer">
         <label>
             <span>Nome: </span>
             <input type="text"  />
         </label>
         <label>
             <span>Email: </span>
             <input type="email"  />
         </label>
         <label>
             <span>Data de nascimento: </span>
             <input type="text"/>
         </label>
         <label>
             <span>Cidade e Estado: </span>
             <input type="text"  />
         </label>
         <label>
             <span>Senha: </span>
             <input type="password"  />
         </label>
         <label>
             <span>Confirmação de senha: </span>
             <input type="password"  />
         </label>
     </div>
    
    
     </>
   )
 }

 export default RegisterForm