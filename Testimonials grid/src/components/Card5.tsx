import kira from "../assets/images/image-kira.jpg"
export default function Card5() {
  return (
    <div className= "card-5">
      <div className="user">
        <img src={kira} alt="avatar" />
        <div>
          <p>Kira Whittle</p>
          <p className="role">Verified Graduate</p>
        </div>
      </div>
      <div>
        <div className="title">
  Such a life-changing experience. Highly recommended!</div>

        <p>" Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ”
        </p>
      </div>
    </div>
  )
}