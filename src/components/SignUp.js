import React from 'react'

function SignUp() {
    return (
        <div className='col-5 mx-auto py-4 mb-4'>
            <h1 className='  text-center'>Kayıt Ol</h1>
            <hr />
            <form>

                <button type="submit" className="btn btn-primary w-100 mb-4">
                    <span className='fa fa-google '> Google İle Kayıt Ol</span>
                </button>
                <button type="submit" className="btn btn-primary w-100 mb-4">
                    <span className='fa fa-facebook '> Facebook İle Kayıt Ol</span>
                </button>
                <div className="mb-3">


                    <label htmlFor="exampleInput" className="form-label">Ad Soyad : </label>
                    <input type="text" className="form-control" id="exampleInput"  />
                   
                </div>
                <div className="mb-3">


                    <label htmlFor="exampleInputEmail1" className="form-label">Email Adresiniz : </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Şifreniz :</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Beni Hatırla</label>
                </div>
                <div className=' text-center'>
                    <button type="submit" className="btn btn-outline-dark mt-4  text-center">Kayıt Ol</button>

                </div>

            </form>


        </div>
    )

}

export default SignUp