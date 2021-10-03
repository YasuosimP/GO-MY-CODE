import React from "react" ;
class Forme extends React.Component{
    render (){
        return (
        <div>
           <section className="login-dark">
        <form method="post">
          <h2 className="visually-hidden">Login Form</h2>
          <div className="illustration"><i className="icon ion-ios-locked-outline" /></div>
          <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
          <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
          <div className="mb-3"><button className="btn btn-primary d-block pulse animated w-100" type="submit">Log In</button></div><a className="forgot" href="#">Forgot your email or password?</a>
        </form>
      </section>
        </div>
        );
    }
}
export default Forme ;