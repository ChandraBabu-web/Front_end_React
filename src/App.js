import React from 'react';
import './App.css';


const Navbar = () => {
  return (
    <div>
    <nav>
      <ul className='navbar-list'>
        <li><a href="/">Home </a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/Membership">Membership</a></li>
        <li><a href="/Pricing">Pricing</a></li>
        
        <li className="navbar-space"></li>

        <li ><a href="/Offers">Offers</a></li>
        <li className='navbar-courses'><a href="/Courses">Courses</a></li>
      </ul>
    </nav>


    <div className="content-container">
   
        <div className="content-left">
        <svg className="Ellipse"width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Ellipse 46" d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z" fill="#BE554B"/>
</svg>




        <p className='para'>Discover the beauty of the tropics.</p>
          <h2>Sample<br/> Headline <br/> one</h2>
          <p>This is a sample paragraph.</p>


          <button className='navbar-courses'>Sign up</button>
        </div>
        <div className="content-right">
        <svg className="Ellipse2"width="14" height="14"  viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Ellipse 48" d="M14 2.03465e-06C14 1.83851 13.6379 3.65901 12.9343 5.35757C12.2307 7.05613 11.1995 8.59948 9.89949 9.8995C8.59947 11.1995 7.05612 12.2308 5.35756 12.9343C3.65901 13.6379 1.8385 14 -3.8147e-06 14L-4.13185e-07 -4.13186e-07L14 2.03465e-06Z" fill="#87CC81"/>
</svg>

      
    <img 
      src="/home-modified.png" 
      alt="Sample Image"
       />    
     <div>   <svg className="Ellipse3"width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Ellipse 49" d="M35 35C35 30.4037 34.0947 25.8525 32.3358 21.6061C30.5769 17.3597 27.9988 13.5013 24.7487 10.2513C21.4987 7.00121 17.6403 4.42313 13.3939 2.66422C9.14752 0.905301 4.59626 -2.00909e-07 0 0V14C2.75776 14 5.48851 14.5432 8.03635 15.5985C10.5842 16.6539 12.8992 18.2007 14.8492 20.1508C16.7993 22.1008 18.3461 24.4158 19.4015 26.9636C20.4568 29.5115 21 32.2422 21 35H35Z" fill="#BE554B"/>
</svg>
     </div>  

        </div>

        <div>
        <svg className="Ellipse4" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34ZM16.5957 25.0957C21.2901 25.0957 25.0957 21.2901 25.0957 16.5957C25.0957 11.9013 21.2901 8.0957 16.5957 8.0957C11.9013 8.0957 8.0957 11.9013 8.0957 16.5957C8.0957 21.2901 11.9013 25.0957 16.5957 25.0957Z" fill="#87CC81"/>
</svg>
</div>
      </div>

  
   






      <div className="content-container1">

   
   
   <div className="content-left1">

   <div class="avatar-container">
   <img className='avatar'
      src="/avatar.png" 
      alt="Sample Image1"
      class="avatar"
       />  
  <p className='desc'><b>Sample name</b> <br/>Sample <br/>position</p>
 
</div>
<div class="avatar-container">
   <img className='avatar'
      src="/avatar1.png" 
      alt="Sample Image1"
      class="avatar"
       />  
  <p className='desc'><b>Sample name</b> <br/>Sample <br/>position</p>
 
</div>
<div class="avatar-container">
   <img className='avatar'
      src="/avatar2.png" 
      alt="Sample Image1"
      class="avatar"
       />  
  <p className='desc'><b>Sample name</b> <br/>Sample <br/>position</p>
 
</div>



   </div>


   <div className="content-right1">

   <h3> <b>Sample Headline </b><br/> one</h3>
   <p>Discover the beauty of the tropics.</p>
     <ul className='ul1'>
      <li>Sample Headli1ne one</li>
      <li>Sample Headli1ne one</li>
      <li>Sample Headli1ne one</li>
      <li>Sample Headli1ne one</li>
      <li>Sample Headli1ne one</li>
      </ul>

      
     
     <button className='navbar-courses1'>Explore More</button>

   
 </div>
 <div>  <svg className="Ellipse5"width="168" height="168" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M84 168C130.392 168 168 130.392 168 84C168 37.6081 130.392 0 84 0C37.6081 0 0 37.6081 0 84C0 130.392 37.6081 168 84 168ZM84 130C109.405 130 130 109.405 130 84C130 58.5949 109.405 38 84 38C58.5949 38 38 58.5949 38 84C38 109.405 58.5949 130 84 130Z" fill="#87CC81" fill-opacity="0.2"/>
</svg></div>

 </div>



























    </div>
  );
};

export default Navbar;
