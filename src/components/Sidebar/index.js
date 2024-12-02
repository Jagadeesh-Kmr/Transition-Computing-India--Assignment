import {FaClipboardList, FaLink} from 'react-icons/fa'
import {RiArrowDropRightLine} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {GiCheckboxTree} from 'react-icons/gi'
import './index.css'

const Sidebar = () => (
  <>
    <div className="sb-main-div">
      <img
        src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1733047405/riskhawk-logo_1_duzu0u.png"
        alt="bank logo"
        className="bank-logo"
      />
      <div className="sb-name-div">
        <FaClipboardList />
        <p>Internal Audit</p>
        <RiArrowDropRightLine className="arrow-logo" />
      </div>
      <div className="sb-name-con">
        <FaClipboardList />
        <p style={{marginLeft: '18px'}}>UAT Testing</p>
      </div>
      <div className="sb-name-div">
        <FaLink />
        <p style={{marginRight: '55px'}}>Intract</p>
        <RiArrowDropRightLine className="arrow-logo" />
      </div>
      <div className="sb-name-con">
        <CgProfile />
        <p style={{marginRight: '35px'}}>Queue</p>
      </div>
      <div className="sb-name-con">
        <GiCheckboxTree />
        <p style={{marginRight: '10px'}}>Work Flow</p>
      </div>
      <div className="sb-name-con">
        <CgProfile />
        <p style={{marginRight: '35px'}}>Admin</p>
      </div>
      <div className="sb-name-div">
        <FaClipboardList />
        <p>Internal Audit</p>
        <RiArrowDropRightLine className="arrow-logo" />
      </div>
      <div className="sb-name-con">
        <FaClipboardList />
        <p style={{marginLeft: '18px'}}>UAT Testing</p>
      </div>
      <div className="sb-name-div">
        <FaLink />
        <p style={{marginRight: '55px'}}>Intract</p>
        <RiArrowDropRightLine className="arrow-logo" />
      </div>
      <div className="sb-name-con">
        <CgProfile />
        <p style={{marginRight: '35px'}}>Queue</p>
      </div>
      <div className="sb-name-con">
        <GiCheckboxTree />
        <p style={{marginRight: '10px'}}>Work Flow</p>
      </div>
      <div className="sb-name-con">
        <CgProfile />
        <p style={{marginRight: '35px'}}>Admin</p>
      </div>
      <div className="sb-name-con">
        <CgProfile />
        <p style={{marginRight: '35px'}}>Queue</p>
      </div>
      <div className="sb-name-con">
        <GiCheckboxTree />
        <p style={{marginRight: '10px'}}>Work Flow</p>
      </div>
      <div className="sb-name-con">
        <CgProfile />
        <p style={{marginRight: '35px'}}>Admin</p>
      </div>
    </div>
  </>
)

export default Sidebar
