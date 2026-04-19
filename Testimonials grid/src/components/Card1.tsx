import quotationMark from "../assets/images/bg-pattern-quotation.svg"
import daniel from "../assets/images/image-daniel.jpg"


export default function Card1() {
  return (
    <div className= "card-1">
      <img src={quotationMark} alt="quotation mark"  className="quotation-mark"/>
      <div className="user">
        <img src={daniel} alt="avatar" />
        <div>
          <p>Daniel Clifford</p>
          <p className="role">Verified Graduate</p>
        </div>
      </div>
      <div>
        <div className="title">
  I received a job offer mid-course, and the subjects I learned were current, if not more so, 
  in the company I joined. I honestly feel I got every penny’s worth.</div>

        <p>“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
  transition and have heard some people who had an amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
  The next 12 weeks was the best - and most grueling - time of my life. Since completing 
  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </p>
      </div>
    </div>
  )
}


