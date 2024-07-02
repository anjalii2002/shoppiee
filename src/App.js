import React, { useEffect } from 'react';

const App = () => {
 

  return (
    <>
    <style>
      {
        `
        :root{
    font-family: poppins, Arial, Helvetica, sans-serif;
    overflow-x: hidden;
    width: 100%;
}
#header_content{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.first_h{
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
   padding: 1px;
    margin-top: 0;
}
.second_h{
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
}
.nav_f{
    margin-right: 2em;
    margin-top: 1em;
}
.nav_s{
    margin-left: 2em;
}
.icons{
    margin-left: -2.5em;
}
.logo_link{
    color: black;
    text-decoration: none;
    font-size: 17px;
}
.list, .link{
    display: inline;
    margin: 12px;
    color: rgb(29, 29, 29);
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
}
#page_banner{
    z-index: 2;
    margin-top: 8em;
    width: 100%;
    height: 33em;
    margin-left: -0.5em;
    margin-right: 0;
}
#banner, #banner_{
    width: 100%;
    padding: 25px;
    height: 100%;
    background-image: url(https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    text-align: center;
}

#msg_box{
    margin-top: 7.5em;
   /* margin-left: 25%;*/
    color: white;
   
}
.summer_s{
    font-size: 26px;
    font-weight: 500;
    
}
#seventy_p{
    font-size: 100px;
    font-weight: bolder;
  margin-top: -0.3em;
    margin-left: 0;
}
.promo_c{
    margin-top: -3em;
    font-size: 20px;
    font-weight: 500;
}
#shop_now{
    border: none;
   
    width: 10em;
    padding: 20px;
    font-size: 18px;
    color: white;
    background-color: rgb(20, 20, 20);
    border-radius: 3px;
    
}
#shop_now:active{
    transform: scale(0.9);

}
.click1{
    background-color: white;
    font-size: 20px;
    font-weight: bold;
    width: fit-content;
    padding: 3px;
   
}
#grid_f{
    width: 100%;
    z-index: 3;
    margin-top: 6em;
    display: flex;
    justify-content: center;
}
.pro{
    width: 33%;
    height: 16em;
    margin-left: 1em;
    padding: 10px;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    color: white;

}
#pro1{
    background-image: url(https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
    background-repeat: no-repeat;
    background-size: cover;
}
#pro2{
    background-image: url(https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
    background-repeat: no-repeat;
    background-size: cover;
}
#pro3{
    background-image: url(https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
    background-repeat: no-repeat;
    background-size: cover;
}
#msg{
    margin: 50px auto;
    text-align: center;
}
.shop_n{
    
    font-weight: bold;
}
.heading{
   
   margin-top: 5em;
   margin-bottom: 3em;
   text-align: center;
}
.cathegory{
    font-size: 33px;
}
.wom{
    margin: 10px;
    font-size: 15px;
    margin: none;

}
.post, .wom{
   text-align: center;
    text-decoration: none;
    color: rgb(27, 27, 27);
    font-size: 17px;
    font-weight: bold;
    margin: 10px;
   
}
.pro_img{
    width: 10em;
}


#grid_s{
    width: 100%;
   /* display: flex;
    justify-content: center;
    flex-direction: column;
    */
}
.content{
    width: 100%;
    display: flex;
    justify-content: center;
}
#big_post{
   width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 5em;
}
.one_bp{
    width: 34em;
    height: 36em;
    margin: 20px;
    
}
.bp_cap{
    text-align: center;
    background-color: white;
    padding: 20px;
    font-size: 21px;
    font-weight: bold;
    width: 50%;
    margin: -4em auto;
}
.shop{
    font-size: 16px;
    font-weight:500;
}
#one_bp1{
    background-image: url(https://reginadanielsfashion.com/wp-content/uploads/2022/06/cf39b4d5-8e40-4925-9e22-51f57010c846-500x633.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
}
#one_bp2{
    background-image: url(https://reginadanielsfashion.com/wp-content/uploads/2022/06/c2719ed6-59fb-4e64-bdc9-d02731de2ef6-500x633.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
}
.price_tag{
    background-color: rgb(34, 34, 34);
    width: fit-content;
    padding: 20px;
    color: white;
    border-radius: 50%;
    text-align:center;
    font-size: 20px;
    font-weight: 500;
    margin-left: 1em;
    
}
.canc {
    color: rgb(231, 231, 231);
    font-size: 15px;
    text-decoration: line-through;
}
.main_display{
    width: 100%;
}
.img{
    width: 15em;
    margin: 10px;
    height: 19em;
    background-size: cover;
    background-repeat: no-repeat;
}
 #flex{
    width: 100%;
    display: flex;
    justify-content: center;
 }
 .caption_{
    text-align: center;
    font-weight: 500;
 }
 #display_pro{
    margin-top: 15%;
    width: 100%;
    
 }
 .sale{
    animation-name: zoom;
    animation-duration: 3s;
 }
 .new_arr{
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 5%;
    text-align: center;
    color: rgb(49, 49, 49);
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 }
 .cancelled{
    color: grey;
    text-decoration: line-through;
 }
 .new{
    color: rgb(233, 210, 79);
 }
 #img1{
    background-image: url(https://reginadanielsfashion.com/wp-content/uploads/2022/01/2d72b502-193c-493c-a660-432e7307a249-scaled.jpeg);
 }
 #img2{
    background-image: url(https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
 }
 #img3{
    background-image: url(https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
 }
 #img4{
    background-image: url(https://reginadanielsfashion.com/wp-content/uploads/2021/07/2F4A2964-scaled-500x633.jpg);
 }
 #img5{
    background-image: url(https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60);
 }
 .like_btn{
    width: fit-content;
    background-color: white;
    padding: 8px;
    float: right;
    border-radius: 50%;
    margin: 1em;
 }
 .sale_tag{
    float: left;
    border: 2px solid rgb(233, 210, 79);
    color: rgb(233, 210, 79);
    padding: 5px;
    margin: 0.5em;
    font-size: small;
 }
 #img6{
    background-image: url(https://reginadanielsfashion.com/wp-content/uploads/2021/07/gallery-8-500x600.jpg);
   width: 20em;
   height: 25em;
 }
 .pro10{
    width: 32em;
 }
 .first_box{
    margin-left: 12em;
    width: 60%;
  
 }
 .sec_box{
  width: 30%;
    text-align: center;
   margin-right: 12em;
   
    
 }
 
 #sec_main{
    margin-top: 10%;
    width: 100%;
   display: flex;
    justify-content: center;
 }
 .gray{
    font-size: 18px;
    font-weight: 500;
    color: rgb(155, 155, 155);
 }
 .head{
    font-size: 28px;
    font-weight: 500;
 }
 .sale_tag2{
    background-color: black;
    color: white;
    padding: 5px;
    width: 20%;
    float: left;
 }
 
 i{
    font-size: 20px;
    text-align: center;
 }
 .blogimg{
    width: 100%; 
 }
 .blog{
    width: 28%;
    padding-bottom: 10px;
    background-color: white;
    margin: 15px;
    border-bottom-left-radius: 2.5px;
    border-bottom-right-radius: 2.5px;
    animation-name: zoom;
    animation-duration: 3s;
   
 }
 @keyframes zoom{
    0%{
        transform: scale(0.8);
    }
}
 .blog:hover{
    box-shadow: 0 0 25px #777777;
    transform: scale(1.02);
 }
 .date{
    font-size: 15px;
    color: rgb(180, 180, 180);
    margin-top: 0;
 }
 #blog{
    margin-top: 3em;
    width: 100%;
    padding: 40px;
    background-color: rgb(233, 233, 233);
    margin-left: -1em;
    margin-right: 0;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    
 }
 .blog_post_box{
    display: flex;
    justify-content: center;
 }
 .blog_head{
    text-align: center;
 }
 .blogp_decrip{
    padding: 10px;
    font-size: 17px;
    font-weight: 500;
 }
 .centre{
    font-size: 16px;
    text-align: center;
    margin-top: 5%;
    text-decoration: underline;
  
 }
 #features{
    background-color: white;
    width: 100%;
    padding: 5px;
 }
 .overall{
    display: flex;
    margin: 1em;
 }
 .icon, .info{
    margin: 10px;
 }
 #feat{
    display: flex;
    justify-content: center;
 }
 .uppercase{
    font-weight: 500;
    font-size: 14px;
 }
 .light{
    font-size: 13px;
    color: #7c7c7c;
 }
 #footer_box{
    color: white;
    width: 100%;
   padding: 20px;
    padding-top: 6%;
   margin-left: -0.6em;
    margin-right: 0;
    margin-bottom: -3%;
    background-color: rgb(29, 29, 29);
 }
 .block_links{
    display: block;
    color: #949494;
    margin: 5px;
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
 }

 .s_foot {
    display: flex;
    justify-content: center;
 }
 #email{
    width: 22em;
    height: 1.7em;
    padding: 20px;
    border: none;
    border-radius: 1px;
    background-color: rgb(49, 49, 49);
    margin: 0.5em;
 }
 #submit{
    width: 8em;
    padding: 22px;
    font-size: 15px;
    border-radius: 1px;
    border: none;
    color: white;
    background-color: #5e5e5e;
    font-weight: 600;
    margin: 0.5em;
 }
 #submit:hover{
    background-color: #4d4c4c;
 }
 #submit:active{
    transform: scale(0.9);
 }
 .inputs{
    display: flex;
    justify-content: center;
 }
 .want{
    text-align: center;
    font-size: 20px;
 }
 ::placeholder{
    font-size: 15px;
 }
 hr{
    border: 0.1px solid #4d4c4c;
 margin-left: -5%;
 }

 /**/
 
 .space{
    display: flex;
    justify-content: center;
    margin: 2%;
 }
 .other_links{
    margin: 1.6em;

 }
 /*.img_links{
    margin-left: 20%;
 }*/
 .bold{
    font-size: 15px;
    line-height: 3em;
 }
 .copy{
    font-size: small;
    color: rgb(155, 155, 155);
    margin-left: 5%;
 }
 #extras{
    margin-top: 2%;
 }
 .pay{
    float: right;
    margin-top: -2.3em;
    margin-right: 10%;
 }
 .fa-retweet, .fa-lock, .fa-tag, .fa-truck{
    color: rgb(252, 163, 61);
 }
 .drawer_icon{
    display: none;
 }
 .payments{
    width: 2.5em;
 }
.gray{
  color: gray;
  margin:1px;
}
 /* MEDIA QUERY FOT RESPONSIVE WEB PAGE */
 @media (max-width: 1050px) {
    .nav_f, .nav_s, .icons {
       
        display: none;
    }
    .second_h{
        display: inline;
        
    }
   .logo_area{
    padding-left: 10%;
   }
   .drawer_icon{
    display: inline;
    float: right;
    margin-top: -3em;
    padding-right: 5%;
   }
   .one_bp{
    width: 26em;
   }
   .img_links{
    margin-left: 7%;
 }
    
 }
 @media (max-width: 900px) {
    .pro{
        width: 28%;
        height: 12em;   
    }
    .content, #flex{
        overflow-x: scroll;
        overflow-y: hidden;
        
    }
    .one_bp{
        width: 22em;
       }
       .pro_img{
        width: 13em;
       }
       .pro10{
        width: 26em;
     }
     .sec_box{
        width: 45%;
          text-align: center;
         margin-right: 10em; 
       }
       #feat{
        flex-direction: column; 
        padding: 20px;    
    }
    .overall{
        margin: 0.1em;
        margin-left: 10%;
    }

     .s_foot {
        flex-direction: column;
        align-items: flex-start;
     }
 }
 @media (max-width: 700px) {
    #big_post {
        flex-direction: column;
       align-items: center;
    } 
    .one_bp{
        width: 30em;
    }
    .box{
        margin-bottom: 13%;
    }
    .first_box {
        width: 90%;
        margin-left: 5px;
    }
    .pro10{
        width: 100%;
    }
    #sec_main{
        flex-direction: column;
        align-items: center;
    }
    .sec_box{
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px auto;
    }
    .blog_post_box{
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .blog{
        width: 73%;
   
    }
     #grid_f{
        flex-direction: column;
        align-items: center;
     }
     .pro{
        width: 95%;
        margin: 10px;
        height: 17em;
     }
     .copy{
        width: 40%;
     }
     .pay{
        margin-right: 2%;
     }
    }
 @media (max-width: 500px) {
    .blog{
        width: 90%;
      text-align: center;
    }
    .other_links{
        margin: 0.3em;
    }
 }`
      }
    </style>
    <title>ANJALI'S COLLECTION</title>
    <meta charSet="UTF-8" />
    <link type="text/css" rel="stylesheet" href="shopper.css" />
    <div id="entire_page">
      <div id="container">
        {/*START OF HEADER*/}
        <div id="header_content">
          <div className="first_h">
            <p>⚡️ WELCOME TO ANJALI'S SHOP ⚡️</p>
          </div>
          <div className="second_h">
            <nav className="nav_f">
              <a href="" className="link">
                Home
              </a>
              <a href="" className="link">
                Catalog
              </a>
              <a href="" className="link">
                Shop
              </a>
              <a href="" className="link">
                Page
              </a>
              <a href="" className="link">
                Blog
              </a>
              <a href="" className="link">
                Docs
              </a>
            </nav>
            {/* <div className="logo_area">
              <a href="" className="logo_link">
                <h2 className="logo">Shopper.</h2>
              </a>
            </div> */}
            {/* <div className="drawer_icon">
              <a href="">
                <span className="dot">
                  <i className="fa-solid fa-bars" />
                </span>
              </a>
            </div> */}
            {/* <nav className="nav_s">
              <ul>
                <li className="list">United States</li>
                <li className="list">
                  USD
                  <i className="fa-solid fa-angle-down" />
                </li>
                <li className="list">
                  EN
                  <i className="fa-solid fa-angle-down" />
                </li>
              </ul>
            </nav> */}
            <div className="icons">
              <ul>
                <li className="list">
                  <i className="fa-solid fa-magnifying-glass" />
                </li>
                <li className="list">
                  <i className="fa-regular fa-user" />
                </li>
                <li className="list">
                  <i className="fa-regular fa-heart" />
                </li>
                <li className="list">
                  <i className="fa-solid fa-cart-shopping" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*END OF HEADER*/}
        {/*START OF PAGE BANNER*/}
        <div id="page_banner">
          <div id="banner">
            <div id="msg_box">
              <p className="summer_s">Summer Sales</p>
              <h1 id="seventy_p">50% OFF</h1>
              <p className="promo_c">with promo code CN67EW*</p>
              <button
                id="shop_now"
                type="submit"
                name="shop now"
                onclick="change()"
              >
                Shop now <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
        {/*END OF PAGE BANNER*/}
        {/*START OF FIRST PRODUCTS GIRD*/}
        <div id="grid_f">
          <div id="pro1" className="pro">
            <div id="msg">
              <h2 className="summer_pro">Addidas</h2>
              <span className="shop_n animate__slideOutRight">
                Shop Now <i className="fa-solid fa-arrow-right" />
              </span>
            </div>
          </div>
          <div id="pro2" className="pro">
            <div id="msg">
              <h2 className="summer_pro">Nike</h2>
              <span className="shop_n">
                Shop Now <i className="fa-solid fa-arrow-right" />
              </span>
            </div>
          </div>
          <div id="pro3" className="pro">
            <div id="msg">
              <h2 className="summer_pro">Nike customized</h2>
              <span className="shop_n">
                Shop Now <i className="fa-solid fa-arrow-right" />
              </span>
            </div>
          </div>
        </div>
        {/*END OF FIRST PRODUCTS GIRD*/}
        {/*START OF SECOND GIRD SECTION*/}
        {/* <div id="grid_s">
          <div className="heading">
            <h2 className="cathegory">Shop by Category</h2>
            <a href="" className="wom">
              Women
            </a>
            <a href="" className="wom">
              Men
            </a>
            <a href="" className="wom">
              Kids
            </a>
          </div>
          <div className="content">
            <a href="" className="post">
              <div id="first_post" className="sale">
                <img
                  src="https://reginadanielsfashion.com/wp-content/uploads/2022/01/2d72b502-193c-493c-a660-432e7307a249-scaled.jpeg"
                  className="pro_img"
                />
                <p className="caption">Sweatshirts (11)</p>
              </div>
            </a>
            <a href="" className="post">
              <div id="first_post" className="sale">
                <img
                  src="https://reginadanielsfashion.com/wp-content/uploads/2021/07/2F4A2900-scaled-500x633.jpg"
                  className="pro_img"
                />
                <p className="caption">Jackets (9)</p>
              </div>
            </a>
            <a href="" className="post">
              <div id="first_post" className="sale">
                <img
                  src="https://reginadanielsfashion.com/wp-content/uploads/2021/07/2F4A3026-1-scaled-500x633.jpg"
                  className="pro_img"
                />
                <p className="caption">Dresses (27)</p>
              </div>
            </a>
            <a href="" className="post">
              <div id="first_post" className="sale">
                <img
                  src="https://reginadanielsfashion.com/wp-content/uploads/2021/07/2F4A3402-scaled-500x633.jpg"
                  className="pro_img"
                />
                <p className="caption">Tops (58)</p>
              </div>
            </a>
            <a href="" className="post">
              <div id="first_post" className="sale">
                <img
                  src="https://reginadanielsfashion.com/wp-content/uploads/2021/07/2F4A3758-scaled-500x633.jpg"
                  className="pro_img"
                />
                <p className="caption">T-shirts (35)</p>
              </div>
            </a>
          </div>
          <div id="big_post">
            <div className="box">
              <div id="one_bp1" className="one_bp">
                <p className="price_tag">
                  <span className="canc">$99.00</span>
                  <br />
                  $59.00
                </p>
              </div>
              <p className="bp_cap">
                Ankara dresses
                <br />{" "}
                <span className="shop">
                  Shop now <i className="fa-solid fa-arrow-right" />
                </span>
              </p>
            </div>
            <div className="box">
              <div id="one_bp2" className="one_bp">
                <p className="price_tag">
                  <span className="canc">$99.00</span>
                  <br />
                  $59.00
                </p>
              </div>
              <p className="bp_cap">
                Leather dresses
                <br />
                <span className="shop">
                  Shop now <i className="fa-solid fa-arrow-right" />
                </span>
              </p>
            </div>
          </div>
        </div> */}
        {/*END OF SECOND GIRD SECTION*/}
        {/*START OF THE NEW ARRIVALS SECTION*/}
        <div id="display_pro">
          <h2 className="new_arr">New Arrivals</h2>
          <div id="flex">
            <div id="first_pro" className="one">
              <div className="img" id="img1">
                <span className="sale_tag">Sale!</span>
                <span className="like_btn">
                  <i className="fa-regular fa-heart" />
                </span>
              </div>
              <p className="caption_">
                Green gown <br /> <span className="cancelled">$50.00</span>{" "}
                <span className="new">$30.00</span>
              </p>
            </div>
            <div id="first_pro" className="one">
              <div className="img" id="img2">
                <span className="sale_tag">Sale!</span>
                <span className="like_btn">
                  <i className="fa-regular fa-heart" />
                </span>
              </div>
              <p className="caption_">
                Elegant Top <br /> <span className="cancelled">$65.00</span>{" "}
                <span className="new">$40.00</span>
              </p>
            </div>
            <div id="first_pro" className="one">
              <div className="img" id="img3">
                <span className="sale_tag">Sale!</span>
                <span className="like_btn">
                  <i className="fa-regular fa-heart" />
                </span>
              </div>
              <p className="caption_">
                Get sporty <br /> <span className="cancelled">$45.00</span>{" "}
                <span className="new">$35.00</span>
              </p>
            </div>
            <div id="first_pro" className="one">
              <div className="img" id="img4">
                <span className="sale_tag">Sale!</span>
                <span className="like_btn">
                  <i className="fa-regular fa-heart" />
                </span>
              </div>
              <p className="caption_">
                Chic but silk <br /> <span className="cancelled">$70.00</span>{" "}
                <span className="new">$55.00</span>
              </p>
            </div>
            <div id="first_pro" className="one">
              <div className="img" id="img5">
                <span className="sale_tag">Sale!</span>
                <span className="like_btn">
                  <i className="fa-regular fa-heart" />
                </span>
              </div>
              <p className="caption_">
                Show up classy <br /> <span className="cancelled">$54.00</span>{" "}
                <span className="new">$43.00</span>
              </p>
            </div>
          </div>
          <div id="sec_main">
            <div className="first_box">
              <img
                src="https://images.unsplash.com/photo-1632149877166-f75d49000351?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="pro10"
                alt="a white outfit"
              />
            </div>
            <div className="sec_box">
              <span className="gray">PERFECT SUMMER</span>
              <p className="head">Summer Days Look</p>
              <div id="white" className="one">
                <div className="img" id="img5">
                  <span className="sale_tag2">Sale!</span>
                  <span className="like_btn">
                    <i className="fa-regular fa-heart" />
                  </span>
                </div>
                <p className="caption">
                  Textile dress
                  <br /> <span className="cancelled">$54.00</span>{" "}
                  <span className="new">$43.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*END OF THE NEW ARRIVALS SECTION*/}
        {/*START OF BLOG POST SECTION*/}
        <section id="blog">
          <div id="blog_posts">
            <div className="blog_head">
              <span className="gray">Our Blog</span>
              <p className="head">Latest in Blog</p>
            </div>
            <div className="blog_post_box">
              <div className="blog">
                <img
                  src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="blogpost1 blogimg"
                  alt="clothes on hangers"
                />
                <p className="blogp_decrip">
                  <span className="date">Fashion / Sept 20, 2022</span>
                  <br />
                  What to wear this chrismas to have a lovely holiday with loved
                  ones.
                </p>
              </div>
              <div className="blog">
                <img
                  src="https://images.unsplash.com/photo-1627384113710-424c9181ebbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="blogpost2 blogimg"
                  alt="Orgaics for skincare"
                />
                <p className="blogp_decrip">
                  <span className="date">Orgaics and skincare / Oct 3, 2022</span>
                  <br />
                  Best products to use for flawless and smooter skin.
                </p>
              </div>
              <div className="blog">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="blogpost3 blogimg"
                  alt="shoe"
                />
                <p className="blogp_decrip">
                  <span className="date">Nike and shoes / Nov 10, 2022</span>
                  <br />
                  Nike to release 'The Jock's Special' next year.
                </p>
              </div>
            </div>
            <p className="centre">Discover more</p>
          </div>
        </section>
        {/*END OF BLOG POST SECTION*/}
        {/*START OF STORE FEATURES*/}
        <section id="features">
          <div id="feat">
            <div className="overall">
              <div className="icon">
                <i className="fa-solid fa-truck" />
              </div>
              <div className="info">
                <span className="uppercase">FREE SHIPPING</span>
                <br />
                <span className="light">From all orders over $100</span>
              </div>
            </div>
            <div className="overall">
              <div className="icon">
                <i className="fa-solid fa-retweet" />
              </div>
              <div className="info">
                <span className="uppercase">FREE RETURNS</span>
                <br />
                <span className="light">Return money within 30 days</span>
              </div>
            </div>
            <div className="overall">
              <div className="icon">
                <i className="fa-solid fa-lock" />
              </div>
              <div className="info">
                <span className="uppercase">SECURE SHOPPING</span>
                <br />
                <span className="light">You're in safe hands</span>
              </div>
            </div>
            <div className="overall">
              <div className="icon">
                <i className="fa-solid fa-tag" />
              </div>
              <div className="info">
                <span className="uppercase">OVER 10,000 STYLES</span>
                <br />
                <span className="light">We have everything you need</span>
              </div>
            </div>
          </div>
        </section>
        {/*END OF STORE FEATURES*/}
        {/*FOOTER SECTION AREA*/}
        <footer id="footer_box">
          <section id="footer_content">
            <div className="f_foot">
              <h2 className="want">Want style Ideas and Treats?</h2>
              <div className="inputs">
                <input
                  type="email"
                  className="form_input"
                  id="email"
                  placeholder="Enter Email *"
                />
                <input
                  type="submit"
                  className="form_input"
                  id="submit"
                  defaultValue="Subscribe"
                />
              </div>
            </div>
            <div className="s_foot">
              <div className="img_links">
                {/* <h2 className="f_logo">Shopper.</h2> */}
                <a href="" className="logo_link">
                  <i className="fa-brands fa-facebook gray" />
                </a>
                <a href="" className="logo_link">
                  <i className="fa-brands fa-youtube gray" />
                </a>
                <a href="" className="logo_link">
                  <i className="fa-brands fa-twitter gray" />
                </a>
                <a href="" className="logo_link">
                  <i className="fa-brands fa-instagram gray" />
                </a>
                <a href="" className="logo_link">
                  <i className="fa-brands fa-medium gray" />
                </a>
              </div>
              <div className="space">
                {/* <div className="other_links">
                  <span className="bold">SUPPORT</span>
                  <br />
                  <a href="" className="block_links">
                    Contact us
                  </a>
                  <a href="" className="block_links">
                    FAQs
                  </a>
                  <a href="" className="block_links">
                    Size Guide
                  </a>
                  <a href="" className="block_links">
                    Shipping &amp; Returns
                  </a>
                </div> */}
                <div className="other_links">
                  <span className="bold">SHOP</span>
                  <br />
                  <a href="" className="block_links">
                    Men's Shopping
                  </a>
                  <a href="" className="block_links">
                    Women's Shopping
                  </a>
                  <a href="" className="block_links">
                    Kid's Shopping
                  </a>
                  <a href="" className="block_links">
                    Discounts
                  </a>
                </div>
                <div className="other_links">
                  <span className="bold">COMPANY</span>
                  <br />
                  <a href="" className="block_links">
                    Our Story
                  </a>
                  <a href="" className="block_links">
                    Careers
                  </a>
                  <a href="" className="block_links">
                    Terms &amp; Conditions
                  </a>
                  <a href="" className="block_links">
                    Privacy &amp; Cookie Policy
                  </a>
                </div>
                <div className="other_links">
                  <span className="bold">CONTACT</span>
                  <br />
                  <a href="" className="block_links">
         6260851900
                  </a>
                  <a href="" className="block_links">
                 6260297472
                  </a>
                  <a href="" className="block_links">
                    shopyy.com
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <div id="extras">
              <p className="copy">
                © 2022 All rights reserved. Designed by Anjali.
              </p>
              <div className="pay">
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/mastercard.svg"
                  className="payments"
                />
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/visa.svg"
                  className="payments"
                />
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/amex.svg"
                  className="payments"
                />
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/paypal.svg"
                  className="payments"
                />
                <img
                  src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/maestro.svg"
                  className="payments"
                />
              </div>
            </div>
          </section>
        </footer>
        {/*END OF FOOTER SECTION AREA*/}
      </div>
    </div>
  </>
  
  );
};

export default App;
