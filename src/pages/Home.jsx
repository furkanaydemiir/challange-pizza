import "../css/home.css";
import logo from "../../images/iteration-1-images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import icon1 from "../../images/iteration-2-images/icons/1.svg";
import icon2 from "../../images/iteration-2-images/icons/2.svg";
import icon3 from "../../images/iteration-2-images/icons/3.svg";
import icon4 from "../../images/iteration-2-images/icons/4.svg";
import icon5 from "../../images/iteration-2-images/icons/5.svg";
import icon6 from "../../images/iteration-2-images/icons/6.svg";
import food1 from '../../images/iteration-2-images/pictures/food-1.png'
import food2 from '../../images/iteration-2-images/pictures/food-2.png'
import food3 from '../../images/iteration-2-images/pictures/food-3.png'

function Home() {
  const navigate = useNavigate();
   
  const pizzas = [
    {id:1,name:"Terminal Pizza",score:4.9,count:200,price:60,img:food1},
    {id:2,name:"Position Absolute Acı Pizza",score:4.9,count:200,price:60,img:food2},
    {id:3,name:"UseEffect Tavuklu Burger",score:4.9,count:200,price:60,img:food3}

  ]

  const toOrder = () => {
    navigate("/OrderPizza");
  };
  return (
    <>
      <div className="home">
        <div className="home-logo">
          <img src={logo} alt="" />
        </div>
        <div className="home-caption">
          <p className="text">fırsatı kaçırma</p>
          <h1 style={{ marginLeft: "24px" }}>KOD ACIKTIRIR</h1>
          <h1>PİZZA, DOYURUR</h1>
        </div>
        <Link to={"/OrderPizza"} className="home-button">
          ACIKTIM
        </Link>
      </div>
      <div>
        <ul dir className="icon-list">
          <li onClick={toOrder}>
            <img src={icon1} alt="" />
            YENİ! Kore
          </li>
          <li onClick={toOrder}>
            <img src={icon2} alt="" />
            Pizza
          </li>
          <li onClick={toOrder}>
            <img src={icon3} alt="" />
            Burger
          </li>
          <li onClick={toOrder}>
            <img src={icon4} alt="" />
            Kızartmalar
          </li>
          <li onClick={toOrder}>
            <img src={icon5} alt="" />
            Fast food
          </li>
          <li onClick={toOrder}>
            <img src={icon6} alt="" />
            Gazlı İçecek
          </li>
        </ul>
      </div>
      <div className="banner">
        <div className="banner-area">
          <div className="firstCard">
            <div className="firstCardDescription">
             <p className="quatra">Özel</p>
             <p className="quatra">Lezzetus</p>
             <p className="pizza-name">Position Absolute Acı Burger</p>
             <button onClick={toOrder} className="home-button" style={{backgroundColor:"white",color:"red",width:"124px"}}>SİPARİŞ VER</button>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
            <div className="burger-div">
              <div className="x" style={{display:"flex",flexDirection:"column",alignItems:"start",margin:"10px",paddingBottom:"50px"}}>
                  <p style={{color:"white"}} className="npm">Hackathlon</p>
                  <p style={{color:"white"}} className="npm">Burger Menü</p>
              </div>
              <div style={{marginTop:"-30px"}}>
                        <button className="home-button" style={{backgroundColor:"white",color:"red",width:"124px"}}>SİPARİŞ VER</button>

              </div>
            </div>
           <div className="hackathon-div">
            <div style={{margin:"10px",paddingBottom:"50px"}}>
            <p className="npm"><span style={{color:"red",marginRight:"8px"}}>Çooooook</span><span>hızlı</span></p>
             <p className="npm">npm gibi kurye</p>
             </div>
             <div style={{marginTop:"-30px"}}>
             <button className="home-button" style={{backgroundColor:"white",color:"red",width:"124px"}}>SİPARİŞ VER</button>
             </div>
           <div>
            
            </div>
           </div>
           
        </div>
        
        </div>
        <div>
          <p className="text" style={{marginTop:"10px",color:"red"}}>en çok paketlenen menüler</p>
          <p style={{fontFamily:"Barlow",fontWeight:600,fontSize:"42px"}}>Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
        <div>
          <div>
        <ul dir className="icon-list">
          <li onClick={toOrder}>
            <img src={icon1} alt="" />
            YENİ! Kore
          </li>
          <li onClick={toOrder}>
            <img src={icon2} alt="" />
            Pizza
          </li>
          <li onClick={toOrder}>
            <img src={icon3} alt="" />
            Burger
          </li>
          <li onClick={toOrder}>
            <img src={icon4} alt="" />
            Kızartmalar
          </li>
          <li onClick={toOrder}>
            <img src={icon5} alt="" />
            Fast food
          </li>
          <li onClick={toOrder}>
            <img src={icon6} alt="" />
            Gazlı İçecek
          </li>
        </ul>
      </div>
        </div>
        <div className="pizza-container">
         {pizzas.map((pizza)=>(
          <div onClick={toOrder}  className="pizza">
            <div className="pizza-img"><img src={pizza.img} alt="" /></div>
            <div><p className="pizza-text">{pizza.name}</p></div>
            <div className="price">
              <p className="pizza-score" style={{marginRight:"auto"}}>{pizza.score}</p>
              <p  className="pizza-score" style={{marginRight:"75px"}}>({pizza.count})</p>
              <p className="pizza-price" style={{marginRight:"50px"}}>{pizza.price}₺</p>

            </div>
          </div>
         ))}
        </div>
      </div>
      
    </>
  );
}

export default Home;
