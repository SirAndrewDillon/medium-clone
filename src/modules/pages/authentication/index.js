import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Authentication = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [isSubmitting, setSubmitting] = useState(false)
   



   const handleSubmit = event => {
       event.preventDefault()
       setSubmitting(true)
   }

   useEffect(() => {
       if (!isSubmitting) {
           return
       }
       console.log('effect is triggered');
    axios('https://conduit.productionready.io/api/users/login', {
         method: 'post',
         body: {
             user: {
                 email: 'turk@aol.com',
                 password: '123',
             }
         }
    })
    .then(res => {
        console.log('res', res);
        setSubmitting(false)
    })
    .catch(error => {
        console.log('ERROR', error);
        setSubmitting(false)
    })
})

 


    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign In</h1>
                        <p className="text-xs-center">
                            <Link to='/register'>No Account? Click Here!</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input 
                                    type="email" 
                                    className='form-control form-control-lg'
                                     placeholder='Enter Your Email Please' 
                                     value={email}
                                     onChange={e => setEmail(e.target.value)}
                                     />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input 
                                    type="password" 
                                    className='form-control form-control-lg' 
                                    placeholder='Enter Your Password Please' 
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    />
                                </fieldset>
                                <button 
                                disabled={isSubmitting}
                                className="btn btn-lg btn-primary pull-xs-right" 
                                type='submit'>Sign In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Authentication