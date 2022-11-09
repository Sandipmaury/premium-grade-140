import React from 'react'
import stylenav from "./Nav.module.css"
import NavLogo from "../Assets/logo/logo.jpeg"

export const Nav = () => {
  return (
    <div className={stylenav.navbar}>
           {/* 1st nav  */}
       <div className={stylenav.nav1}>
        {/* logo */}
        <div className={stylenav.logoimg}>
            <img height="20px" width="320px" src={NavLogo} />
        </div>

        {/* icons */}
        <div className={stylenav.imgicons}>
            <img  src="https://www.kindmeal.my/images/follow_blog_grey.png"/>
            <img  src="https://www.kindmeal.my/images/follow_facebook_grey.png"/>
            <img  src="https://www.kindmeal.my/images/follow_twitter_grey.png"/>
        </div>


        {/* login */}
        <div className={stylenav.logindiv}>
            <div className={stylenav.logdiv}>Login</div>
            <div className={stylenav.fbicon}>Facebook</div>
            <div className={stylenav.emaildiv}>Email</div>
            <div className={stylenav.signupdiv}>Sign up</div>
        </div>

       </div>

         {/* 2nd nav   */}
       <div className={stylenav.nav2}>
        <div className={stylenav.homedivnav}>
         <div>Home</div>
         <div>Meal Deals</div>
         <div>KindMoments</div>
         <div>Hot Picks</div>
         <div>Recipes</div>
         <div>Directory</div>
         <div>Articles</div>
         <div>Help</div>
         </div>
        </div>  
    </div>
  )
}
