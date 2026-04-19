import jonathan from "../assets/images/image-jonathan.jpg"
export default function Card2(){
  return (
    <div className= "card-2">
      <div className="user">
        <img src={jonathan} alt="avatar" />
        <div>
          <p>Jonathan Walters</p>
          <p className="role">Verified Graduate</p>
        </div>
      </div>
      <div>
        <div className="title">
  The team was very supportive and kept me motivated</div>

        <p>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
  for a big company. This was one of the best investments I’ve made in myself. ”
        </p>
      </div>
    </div>
  )
}