import patrick from "../assets/images/image-patrick.jpg"
export default function Card4() {
  return (
    <div className= "card-4">
      <div className="user">
        <img src={patrick} alt="avatar" />
        <div>
          <p>Patrick Abrams</p>
          <p className="role">Verified Graduate</p>
        </div>
      </div>
      <div>
        <div className="title">
  Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
  learning from their experiences was easy.</div>

        <p>“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people. ”
        </p>
      </div>
    </div>
  )
}