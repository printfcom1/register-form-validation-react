import "./FormComponent.css";
import { useState } from "react";
const FormComponent = () => {
  const [dataUser, setDataUer] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [dataError, setError] = useState({
    errorUserName: "",
    errorEmail: "",
    errorPassword: "",
    errorComfirmPassword: "",
  });

  const [submitStatus, setSubmitStatus] = useState(false);

  const handleDatauser = (event) => {
    const { name, value } = event.target;
    setDataUer((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const validateForm = (event) => {
    event.preventDefault();
    setSubmitStatus(true);
    const { userName, email, password, confirmPassword } = dataUser;

    const setErrorMsg = (field, message) => {
      setError((prevValue) => ({
        ...prevValue,
        [field]: message,
      }));
    };

    if (userName.length <= 8) {
      setErrorMsg("errorUserName", "กรุณาป้อนชื่อผู้ใช้มากกว่า 8 ตัวอักษร");
    } else {
      setErrorMsg("errorUserName", "");
    }

    if (!email.includes("@")) {
      setErrorMsg("errorEmail", "รูปแบบอีเมลไม่ถูกต้อง");
    } else {
      setErrorMsg("errorEmail", "");
    }

    if (password.length <= 8) {
      setErrorMsg("errorPassword", "กรุณาป้อนรหัสผ่านมากกว่า 8 ตัวอักษร");
    } else {
      setErrorMsg("errorPassword", "");
    }

    if (!confirmPassword) {
      setErrorMsg("errorComfirmPassword", "รหัสผ่านไม่ถูกต้อง");
    } else {
      if (password !== confirmPassword) {
        setErrorMsg("errorComfirmPassword", "รหัสผ่านไม่ตรงกัน");
      } else {
        setErrorMsg("errorComfirmPassword", "");
      }
    }
  };

  return (
    <div className="container">
      <h2>แบบฟอร์มลงทะเบียน</h2>
      <form className="form" onSubmit={validateForm}>
        <div className="form-control">
          <label>ชื่อผู้ใช้</label>
          <input
            type="text"
            value={dataUser.userName}
            onChange={handleDatauser}
            name="userName"
            style={{
              border:
                submitStatus &&
                `2px solid ${dataError.errorUserName ? "red" : "green"}`,
            }}
          />
          <small>{dataError.errorUserName}</small>
        </div>
        <div className="form-control">
          <label>อีเมล</label>
          <input
            type="text"
            value={dataUser.email}
            onChange={handleDatauser}
            name="email"
            style={{
              border:
                submitStatus &&
                `2px solid ${dataError.errorEmail ? "red" : "green"}`,
            }}
          />
          <small>{dataError.errorEmail}</small>
        </div>
        <div className="form-control">
          <label>รหัสผ่าน</label>
          <input
            type="password"
            value={dataUser.password}
            onChange={handleDatauser}
            name="password"
            style={{
              border:
                submitStatus &&
                `2px solid ${dataError.errorPassword ? "red" : "green"}`,
            }}
          />
          <small>{dataError.errorPassword}</small>
        </div>
        <div className="form-control">
          <label>ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            value={dataUser.confirmPassword}
            onChange={handleDatauser}
            name="confirmPassword"
            style={{
              border:
                submitStatus &&
                `2px solid ${dataError.errorComfirmPassword ? "red" : "green"}`,
            }}
          />
          <small>{dataError.errorComfirmPassword}</small>
        </div>
        <button type="submit">ลงทะเบียน</button>
      </form>
    </div>
  );
};

export default FormComponent;
