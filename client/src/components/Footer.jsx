import React from 'react'
import { FaInstagram,FaFacebook,FaWhatsapp } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
const Footer = () => {
    const gotoAttr = (e) => {
        const ele = e.currentTarget.attributes['data'].value
        const win = window.open(ele, '_blank');
    }
    const gotoAttr1 = () => {
         window.open("https://www.linkedin.com/in/abbas-hejazi-45986811b/", '_blank');
    }
  return (
    <div className="container mt-5 mb-1">

    <footer className="text-white text-center text-lg-start bg-primary">
    <div className="container p-4">

      <div className="row mt-4">
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>
  
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti.
          </p>
  
          <p>
            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias.
          </p>
  
          <div className="mt-4">
    
            <a data="https://www.facebook.com/" onClick={gotoAttr} type="button" className="btn btn-floating btn-primary btn-lg"><i><FaFacebook /></i></a>
            <a  data='https://www.instagram.com/gustosa.lb/'  type="button" onClick={gotoAttr} className="btn btn-floating btn-primary btn-lg"><i><FaInstagram /></i></a>
            <a data="https://wa.me/71721956?text=" onClick={gotoAttr}type="button" className="btn btn-floating btn-primary btn-lg"><i><FaWhatsapp /></i></a>
          </div>
        </div>
  
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">

          <ul className="fa-ul" style={{marginLeft: '1.65em'}}>
            <li className="mb-3">
              <span className="fa-li toScaleHome"><i class="fa fa-home" aria-hidden="true"></i></span><span className="ms-2">Joun El-Chouf</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fa fa-envelope" aria-hidden="true"></i></span><span className="ms-2">gustosa@gmail.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li toScale"><i className="fa fa-mobile"  aria-hidden="true"></i></span><span className="ms-2">71721956</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fa fa-phone"></i></span><span className="ms-2">07975196</span>
            </li>
          </ul>
        </div>
  
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>
  
          <table className="table text-center text-white">
            <tbody className="font-weight-normal">
              <tr>
                <td>Mon - Tue:</td>
                <td>2pm - 11pm</td>
              </tr>
              <tr>
                <td>Wed:</td>
                <td>Off</td>
              </tr>
              <tr>
                <td>Thu - Sun:</td>
                <td>2pm - 11pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2022 Copyright:
      <button  onClick={gotoAttr1}  className='disnone'><a className="text-white hov">HejaziPrograming</a></button>
    </div>
  </footer>
  
</div>
  )
}

export default Footer