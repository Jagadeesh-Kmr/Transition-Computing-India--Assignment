import {TiHomeOutline} from 'react-icons/ti'

import {FiSettings} from 'react-icons/fi'
import {IoIosLogOut} from 'react-icons/io'

import './index.css'

const Header = () => (
  <>
    <div className="header-main-div">
      <p className="chat-p">Chat / Feed chat</p>
      <div className="header-sub-div">
        <div className="header-inside-div">
          <TiHomeOutline />
          <div className="proc-div">Process Owner HOD</div>
        </div>
        <div className="header-admin-div">
          <div className="admin-div">Admin</div>
          <p className="palak-p">Palak Bansal</p>
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1733053266/Ellipse_3855_siwwyn.png"
            alt="profile"
            className="profile-img"
          />
          <FiSettings />
          <IoIosLogOut style={{marginLeft: '20px'}} />
          <p className="logout-p">Logout</p>
        </div>
      </div>
    </div>
  </>
)

export default Header
