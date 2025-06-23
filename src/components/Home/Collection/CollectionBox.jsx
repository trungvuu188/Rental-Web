import React from "react";
import "./CollectionBox.css";

import { Link } from "react-router-dom";

const CollectionBox = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="collection">
        <div className="collectionLeft">
          <p className="col-p">Danh sách hot</p>
          <h3 className="col-h3">
            Bộ sưu tập <span>Nữ</span>
          </h3>
          <div className="col-link">
            <Link to="/shop" onClick={scrollToTop}>
              <h5>Thuê ngay</h5>
            </Link>
          </div>
        </div>
        <div className="collectionRight">
          <div className="collectionTop">
            <p className="col-p">Danh sách hot</p>
            <h3 className="col-h3">
              Bộ sưu tập <span>Nam</span>
            </h3>
            <div className="col-link">
              <Link to="/shop" onClick={scrollToTop}>
                <h5>Thuê ngay</h5>
              </Link>
            </div>
          </div>
          <div className="collectionBottom">
            <div className="box1">
              <p className="col-p">Danh sách hot</p>
              <h3 className="col-h3">
                <span></span> Bộ sưu tập
              </h3>
              <div className="col-link">
                <Link to="/shop" onClick={scrollToTop}>
                  <h5>Thuê ngay</h5>
                </Link>
              </div>
            </div>
            <div className="box2">
              <h3 className="col-h3">
                <span>Trang sức</span>
              </h3>
              <p className="col-p">
                {/* Làm ngạc nhiên ai đó với món quà họ thực sự muốn. */}
              </p>
              <div className="col-link">
                <Link to="/shop" onClick={scrollToTop}>
                  <h5>Thuê ngay</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionBox;
