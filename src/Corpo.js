import SideBar from './SideBar'
import Stories from './Stories'
import Posts from './Posts'

export default function Corpo() {
    return (
        <div className="corpo">
        <div className="esquerda">
            <Stories />
            <Posts />
          
        </div>
            <SideBar />
      </div>
    )
}