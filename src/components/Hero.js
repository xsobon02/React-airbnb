import gridImage from "../images/airbnb-image.png"

export default function Hero(){
  return(
    <div className="hero--div">
      <img src={gridImage} className="gridImage" alt=""/>
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--paragraph">Join unique interactive activities led by 
        one-of-a-kind hosts-all without leaving home.</p>
    </div>
  )
}