import React, {useState} from 'react'
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { authenticate, isAuthenticated, siginin } from '../auth/helper';


const Signin =()=> {
    const [values, setValues] = useState({
        name:'',
        email: 'prince@gmail.com',
        password:'prince',
        error:'',
        success: false,
        loading:false,
        didRedirect:false,
    });
    const {name, email, password, error, success, loading, didRedirect} = values;
    
    const handleChange = (name) => (event) => {
        setValues({...values, error: false, [name]:event.target.value})
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error:false, loading:true});

        siginin({email, password})
        .then((data) => {
            let sessionToken = data.token;
            authenticate(sessionToken, ()=> {
                console.log('TOken Added')
            })
        })
        .catch((e)=> console.log(e));
    }


    const successMessage = () => {
        return (
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <div
                        className='alert alert-success'
                       style={{display: success ? '': 'none'}} 
                    >
                        New account created successfully. Please <Link to='/signin'>login now. </Link>
                    </div>
                </div>
            </div>
        )
    }
    const errorMessage = () => {
        return (
            <div className='row'>
                <div className='col-md-6 offset-sm-3 text-left'>
                    <div
                        className='alert alert-danger'
                       style={{display: error ? '': 'none'}} 
                    >
                        Check all the fields again.
                    </div>
                </div>
            </div>
        )
    }
    const signInForm = () => {
        return(
            <div className='row'>
                <div className='col-md-6 offset-sm-3 rext-left'>
                    <form>
                        
                        <div className='form-group'>
                            <label className='text-light'>Email</label>
                            <input 
                                className='form-control'
                                value={email}
                                onChange={handleChange('email')}
                                type='text'
                            />
                        </div>
                        <div className='form-group'>
                            <label className='text-light'>Password</label>
                            <input 
                                className='form-control'
                                value={password}
                                onChange={handleChange('password')}
                                type='password'
                            />
                        </div>
                        <button
                            onClick={onSubmit}
                            className='btn btn-lg btn-success btn-block'
                        >Submit</button>
                        
                    </form>
                </div>
            </div>
        )
    }



    return (
        <Base title='Welcome To SignIn PAge' description='Tshirt Store'>
            {signInForm()}
            <p className='text-center'>
                {JSON.stringify(values)}</p>
        </Base>
    )
}

export default Signin;