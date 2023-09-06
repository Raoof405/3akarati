// import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./forgetpassword.scss";
import axios from "../../../utils/axios";

const Forgetpassword = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handelsubmit = (event) => {
    event.preventDefault();
    const editeData = new FormData(event.currentTarget);

    axios
      .get(`/password/reset`)
      .then((res) => {
        // window.location.reload();
        handleClose();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <a variant="success" className="title" onClick={handleShow}>
        هل نسيت كلمة المرور ؟
      </a>
      <Modal centered scrollable show={show} onHide={handleClose}>
        <form onSubmit={handelsubmit}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="conatiner px-4">
              <div className="d-flex flex-column gap-4">
                <span className="fs-5 fw-semibold mt-3">
                  يرجى إدخال بريدك الإلكتروني للبحث عن حسابك.
                </span>
                <div className="row gy-4">
                  <div className="col-12 d-flex flex-column gap-2 align-items-center ">
                    <input
                      type="email"
                      name="email"
                      placeholder="الايميل"
                      required
                      className=" form-control w-75  "
                    />
                  </div>

                  {/* <div className="col-12 d-flex flex-column gap-2 align-items-center">
                    <input
                      type="password"
                      name="password"
                      placeholder="كلمة المرور"
                      required
                      className=" form-control w-75"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="success" onClick={handleClose}>
              ارسال
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default Forgetpassword;
