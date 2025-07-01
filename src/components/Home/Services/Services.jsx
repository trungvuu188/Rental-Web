import React from "react";
import "./Services.css";

import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiShieldCheckLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="serviceBox">
          <FaCartFlatbedSuitcase size={50} style={{ marginBottom: "20px" }} />
          <h3>Giao hàng nhanh & miễn phí</h3>
          <p>Miễn phí giao hàng cho đơn từ 2.000.000đ</p>
        </div>
        <div className="serviceBox">
          <TfiHeadphoneAlt size={50} style={{ marginBottom: "20px" }} />
          <h3>Hỗ trợ khách hàng 24/7</h3>
          <p>Hỗ trợ khách hàng thân thiện 24/7</p>
        </div>
        <div className="serviceBox">
          <RiShieldCheckLine size={50} style={{ marginBottom: "20px" }} />
          <h3>Đảm bảo hoàn tiền</h3>
          <p>Hoàn tiền trong vòng 30 ngày</p>
        </div>
      </div>
    </>
  );
};

export default Services;
