import jeanette from "../assets/images/image-jeanette.jpg"
    export default function Card3() {
    return (
        <div className= "card-3">
      <div className="user">
        <img src={jeanette} alt="avatar" />
        <div>
          <p>Jeanette Harmon</p>
          <p className="role">Verified Graduate</p>
        </div>
      </div>
      <div>
        <div className="title">
  An overall wonderful and rewarding experience</div>

        <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
  while doing something I love. ”
        </p>
      </div>
    </div>
  )
}