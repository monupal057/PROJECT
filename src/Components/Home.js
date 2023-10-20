



import { useContext } from "react";
import { Store } from "../ContextApi/ContextApi";
import "../App.css";
import {NavLink} from "react-router-dom"
function Home() {
  const [received] = useContext(Store);
  console.log(received)
  return (
    <>
      {/* Title 3 images */}

      <div className="Titleimages">
        <div className="bigimage">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjKuVYJvVmLE_GniOngkrBDEtqVwXPbpCDyQ&usqp=CAU"
            alt="not found"
          ></img>
        </div>

        <div className="smallimage">
          <img
            src="data:image/jpeg;base64,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"
            alt="not found"
            height="240px"
            width="500px"
          ></img>

          <img
            src="https://res.cloudinary.com/dt84tw7zr/image/fetch/f_auto,g_auto,q_auto/https://www.gameplan-a.com/wp-content/uploads/fly-images/11787/Fitness_Class_Strenghtening_Focus-640x9999.jpg"
            alt="not found"
            height="240px"
            width="500px"
          ></img>
        </div>
      </div>

      {/* 3 horizontal div */}
      <div className="borderbottom">
      <h1 className="side">Latest</h1>
      </div>
   

      <div className="middlecontainer">
        {received.filter((item) =>  item.id >= 76 && item.id <= 78 && item.Category === "Home"  )
          .map((item, index) => {
            return (
              <div className="middlecontainerimage" key={index}>
                   <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes2">
                <img
                  src={item.image}
                  alt="not found"
                  height="250px"
                  width="390px"
                  id="boximg"
                />
                <div id="Description2">
                <h2>{item.Title}</h2>
                  <p>{item.Description.slice(0,110)+"..."}</p>
                </div>
                </NavLink>
              </div>
            );
          })}
      </div>


      <div className="maincontainer">
        {/* left side parent */}

        <div id="Lparent1">
          <h1 className="side">Latest Articles</h1>
          {received.filter((item) => item.id >= 74 && item.id <= 84 &&item.Category === "Home")

            .map((item, index) => {
              return (
                <div key={index}>
                     <NavLink to={`/detailpage/${item.id}`} className="linkdes">
                
                  <div id="parent2">
                    
                    <img
                      id="leftsideimage "
                      className="imageleftside"
                      src={item.image}
                      alt="not found"
                      height="100px"
                      width="180px"
                    />
                   
                    <div id="Description2 " className="home-left-description">
                    <h4>{item.Title}</h4> 
                    <p>{item.Description.slice(0,140)+"..."}</p>
                    </div>
                  </div>
                  </NavLink>
                </div>
              );
            })}
              <div className="bigimage2">
          {/* <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/617f7444-525e-4d9d-8cd6-11987e43ce86_1-sixteen_nine.jpg?VersionId=Rj0w2RAz3_O4kUSaNrRJeYcUqYUWrkWV&size=690:388"
            alt="not found"
           ></img> */}
                </div>
        </div>

    <div className="middlecontainerright">

      {/* <div className="Advertise"><h2 className="Adtext">Advertisement</h2></div> */}
        {/* popular right side parent */}
      
        <div className="Rparent1">
          <h1 className="side">Top Post</h1>
          {received
            .filter(
              (item) => item.id === 80 && item.Category === "Home"
            )
            .map((item, index) => {
              console.log(item)
              return (
                <div id="parent2"  key={index}>
                <NavLink to={`/detailpage/${item.id}`} className="linkdes special-div">
              <img
              id="special-img"
                src={item.image}
                alt="not found"
                height="240px"
                width="390px"
              />
            <div className="rightsidetitle-decription">
              <h3 className="center">{item.Title}</h3>
              <div  className="special-description special-description2">
               
                <p>{item.Description.slice(0,140)+"..."}</p>
                <h3 id="number">{index+1}</h3>
              </div>
              </div>
             
              </NavLink>
            </div>
              );
            })}
          {received
            .filter(
              (item) => item.id >= 81 && item.id <= 83 && item.Category === "Home"
            )
            .map((item, index) => {
              return (
                <div id="parent2" className="parent2-top-post" key={index}>
                     <NavLink to={`/detailpage/${item.id}`} className="linkdes">
                  <img
                    src={item.image}
                    alt="not found"
                    height="130px"
                    width="210px"
                    id="rightsideimage"
                    className="homerightsideimage"
                  />
                  <div className="rightsidetitle-decription">
              <h3 className="center">{item.Title}</h3>
                  <div id="Description"  className="home-right-description">
                    <p>{item.Description.slice(0,90)}</p>
                    <h3 id="number">{index+2}</h3>
                  </div>
                  </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
        <div className="Advertise"><h2 className="Adtext">Advertisement</h2></div>
    </div>
      </div>

      
    </>
  );
}
export default Home;