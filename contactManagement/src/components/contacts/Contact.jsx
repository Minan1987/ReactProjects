import React from 'react'
import { CURRENTLINE, CYAN, ORANGE, RED } from "../../helpers/colors";
import { FaRegEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import img1 from "../../../public/images/1.png"

const Contact = () => {
  return (
    <div className='col-md-6'>
      <div className="card my-2" style={{ backgroundColor: CURRENTLINE }}>
        <div className="card-body">
          <div className="row justify-content-around align-items-center">
            <div className="col-sm-4">
              <img src={img1} alt="" className='rounded-2' />
            </div>
            <div className="col-sm-7">
              <ul className='list-group pe-2'>
                <li className='list-group-item list-group-item-dark'>
                  نام و نام خانوادگی: {" "} <span className='fw-bold'>مینا نظری</span>
                </li>
                <li className='list-group-item list-group-item-dark'>
                  شماره تماس: {" "} <span className='fw-bold'>۰۹۱۲۴۵۴۸۳۶۱</span>
                </li>
                <li className='list-group-item list-group-item-dark'>
                  آدرس ایمیل: {" "} <span className='fw-bold'>mina.nazary66@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="col-sm-1 d-flex flex-column align-items-center">
              <button className='btn my-1' style={{ backgroundColor: ORANGE }}><FaRegEye /></button>
              <button className='btn my-1' style={{ backgroundColor: CYAN }}><FaPencil /></button>
              <button className='btn my-1' style={{ backgroundColor: RED }}><MdDelete /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
