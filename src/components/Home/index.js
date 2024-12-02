import {RiMessage2Line, RiArrowDropRightLine} from 'react-icons/ri'
import {TiLocationOutline, TiPinOutline} from 'react-icons/ti'
import {BsThreeDotsVertical, BsThreeDots} from 'react-icons/bs'
import {IoMailOutline, IoSend} from 'react-icons/io5'

import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'

const Home = () => {
  const renderPersonsName = () => (
    <>
      <ul className="persons-main-ul">
        <li className="person-li">
          <p className="person-fn" style={{color: '#d78f48'}}>
            CB
          </p>
          <p className="person-p">Cheyenne Bergson</p>
        </li>
        <li className="person-li">
          <p className="person-fn">CB</p>
          <p className="person-p">Cheyenne Bergson</p>
        </li>
        <li className="person-li">
          <p className="person-fn">CB</p>
          <p className="person-p">Cheyenne Bergson</p>
        </li>
        <li className="person-li">
          <p className="person-fn">CB</p>
          <p className="person-p">Cheyenne Bergson</p>
        </li>
        <li className="person-li">
          <p className="person-fn">CB</p>
          <p className="person-p">Cheyenne Bergson</p>
        </li>
        <li className="person-li">
          <p className="person-fn">CB</p>
          <p className="person-p">Cheyenne Bergson</p>
        </li>
        <li className="msg-li">
          <RiMessage2Line className="msg-logo" />
          <p>Messaging</p>
          <RiArrowDropRightLine className="msg-logo" />
        </li>
      </ul>
    </>
  )

  const renderPersonData = () => (
    <>
      <div className="person-data-main-div">
        <div className="person-d-address-div">
          <p className="person-d-fn">CB</p>
          <div>
            <p className="person-d-p">Hannibal Smith</p>
            <p className="person-d-l-p">
              <TiLocationOutline />1 Market Street San Francisco, CA 94105
            </p>
          </div>
        </div>

        <div className="person-d-id-div">
          <div className="customer-id-div">
            <p className="customer-id-p">Customer ID</p>
            <p className="customer-id">
              12345 <BsThreeDotsVertical />
            </p>
          </div>

          <div className="customer-id-div">
            <p className="customer-id-p">Email Address</p>
            <p className="customer-id">
              rachel@sample.com <BsThreeDotsVertical />
            </p>
          </div>

          <div className="customer-id-div">
            <p className="customer-id-p">Phone Number</p>
            <p className="customer-id">
              8051298905 <BsThreeDotsVertical />
            </p>
          </div>

          <button type="button" className="customer-add-btn">
            Add
          </button>
        </div>

        <div className="person-d-id-div">
          <div className="customer-id-div">
            <p className="customer-id-p">Loyalty Tier</p>
            <p className="customer-id">
              Silver <BsThreeDotsVertical />
            </p>
          </div>

          <div className="customer-id-div">
            <p className="customer-id-p">Segment</p>
            <p className="customer-id">
              Sleepy Customer <BsThreeDotsVertical />
            </p>
          </div>

          <button type="button" className="customer-add-btn">
            Add
          </button>
        </div>

        <div className="person-d-id-div">
          <div className="customer-id-div">
            <p className="customer-id-p">Lifetime Value</p>
            <p className="customer-id">
              {`${'$'} 1M`} <BsThreeDotsVertical />
            </p>
          </div>

          <div className="customer-id-div">
            <p className="customer-id-p">Propensity to Purchase</p>
            <p className="customer-id">
              75 % <BsThreeDotsVertical />
            </p>
          </div>

          <button type="button" className="customer-add-btn">
            Add
          </button>
        </div>

        <div className="person-d-id-div">
          <div className="customer-id-div">
            <p className="customer-id-p">Engagement Score</p>
            <p className="customer-id">
              80% <BsThreeDotsVertical />
            </p>
          </div>

          <button type="button" className="customer-add-btn">
            Add
          </button>
        </div>

        <button type="button" className="assign-btn">
          Assign other Agent
        </button>
        <button type="button" className="aad-new-btn">
          Add New Widget
        </button>
      </div>
    </>
  )

  const renderAttachmentData = () => (
    <>
      <div className="atc-main-div">
        <div className="atc-header-div">
          <p className="atc-con-p">Conversation</p>
          <p className="atc-con-p" style={{color: '#000000'}}>
            Attachment
          </p>
        </div>
        <div className="atc-data-div">
          <div className="atc-person-div">
            <div className="atc-person-inside-div">
              <div className="atc-person-ver-div">
                <p className="person-fn">CB</p>
                <div>
                  <p className="atc-person-p">RachelAdams</p>
                  <p className="person-d-l-p" style={{marginLeft: '10px'}}>
                    9:08 PM Received By WhatsApp
                  </p>
                </div>
              </div>

              <BsThreeDots />
            </div>

            <div className="atc-person-info-div">
              <p>
                Lorem ipsum dolor sit amet consectetur. Et tincidunt odio
                vivamus ac aliquam. Placerat maecenas quis ut elementum praesent
                imperdiet. Egestas mattis pellentesque nibh dui sed malesuada
                dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
              </p>
            </div>
          </div>

          <div className="atc-person-div">
            <div className="atc-person-inside-div">
              <div className="atc-person-ver-div">
                <p
                  className="person-fn"
                  style={{backgroundColor: '#4c6292', color: '#ffffff'}}
                >
                  HK
                </p>
                <div>
                  <p className="atc-person-p">YOU</p>
                  <p className="person-d-l-p" style={{marginLeft: '10px'}}>
                    27Jul, 2024 9:08 PM Sent By WhatsApp
                  </p>
                </div>
              </div>

              <BsThreeDots />
            </div>

            <div className="atc-person-info-div">
              <p>
                Lorem ipsum dolor sit amet consectetur. Et tincidunt odio
                vivamus ac aliquam. Placerat maecenas quis ut elementum praesent
                imperdiet. Egestas mattis pellentesque nibh dui sed malesuada
                dolor eget ipsum. Molestie nam morbi id arcu volutpat arcu.
              </p>
            </div>
          </div>
        </div>

        <div className="msg-type-main-div">
          <div className="type-option-div">
            <div className="input-div">
              <input type="checkbox" className="checkbox-input" id="sms" />
              <label
                htmlFor="sms"
                className="input-label"
                style={{color: '#0f8bfb'}}
              >
                SMS
              </label>
            </div>
            <div className="input-div">
              <input type="checkbox" className="checkbox-input" id="whatsApp" />
              <label htmlFor="whatsApp" className="input-label">
                WhatsApp
              </label>
            </div>
            <div className="input-div">
              <input type="checkbox" className="checkbox-input" id="email" />
              <label
                htmlFor="email"
                className="input-label"
                style={{color: '#0f8bfb'}}
              >
                Email
              </label>
            </div>
          </div>
          <div className="input-msg-div">
            <input
              type="text"
              className="text-input"
              placeholder="Type a message..."
            />
            <button type="button" className="send-btn">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  )

  const renderAskCaturaData = () => (
    <>
      <div className="ask-main-div">
        <div className="ask-header-div">
          <p className="ask-hd-p" style={{fontSize: '18px'}}>
            Ask Catura
          </p>
          <p className="ask-hd-p">
            <IoMailOutline style={{marginRight: '10px'}} />
            WhatsApp
          </p>
          <p className="ask-hd-p">
            <IoMailOutline style={{marginRight: '10px'}} />
            Greetings
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1733108671/Group_1171287145_j6r3kt.png"
            alt="ask"
            className="ask-img"
          />
        </div>

        <div className="type-input-div">
          <input
            type="text"
            className="ask-input"
            placeholder="Type a message"
          />
          <button type="button" className="ask-send-btn">
            <IoSend />
          </button>
        </div>

        <div className="action-main-div">
          <p className="act-p">Action Launcher</p>
          <input
            type="text"
            className="ask-input"
            placeholder="Search actions..."
          />
          <div className="action-btn-div">
            <button type="button" className="add-action-btn">
              Add Action
            </button>
            <button type="button" className="action-btn">
              Fee Reversal
            </button>
          </div>
          <div className="action-btn-div">
            <button
              type="button"
              className="add-action-btn"
              style={{width: '190px'}}
            >
              Retail Onboarding
            </button>
            <button
              type="button"
              className="action-btn"
              style={{width: '190px'}}
            >
              Address Update
            </button>
          </div>
        </div>

        <div className="action-main-div">
          <div className="pin-div">
            <TiPinOutline className="pin-logo" />

            <p className="act-p" style={{marginBottom: '30px'}}>
              Case Favorite
            </p>
          </div>

          <input
            type="text"
            className="case-input"
            placeholder="Lorem ipsum dolor sit amet consectetur. Et tincidunt "
          />
          <input type="text" className="case-input" placeholder="Photo" />
          <input
            type="text"
            className="case-input"
            placeholder="Lorem ipsum dolor sit amet consectetur. Et tincidunt "
          />
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="home-main-div">
        <Sidebar />
        <div>
          <Header />
          {renderPersonsName()}
          <div className="main-data-div">
            {renderPersonData()}
            {renderAttachmentData()}
            {renderAskCaturaData()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
