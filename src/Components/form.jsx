import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles.css"; // تأكدي إن الملف دا موجود في نفس المسار
import axios from "axios";
export default function FormApp() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    numperPhone: "",
  });

  const [inputlog, setInputlog] = useState({
    email: "",
    password: "",
  });

  const [form, setForm] = useState(false);
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();

    if (
      input.name.trim() === "" ||
      input.email.trim() === "" ||
      input.password.trim() === "" ||
      input.numperPhone.trim() === ""
    ) {
      alert("من فضلك املأ جميع الحقول");
      return;
    }

    try {
      const res = await axios.post(
        "https://6862577696f0cc4e34b953d4.mockapi.io/users",
        input
      );

      // إعادة تعيين الحقول بعد النجاح
      setInput({
        name: "",
        email: "",
        password: "",
        numperPhone: "",
      });

      alert("تم التسجيل بنجاح ✅");
    } catch (error) {
      console.error("Registration Error:", error);
      alert("حدث خطأ أثناء التسجيل ❌");
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://6862577696f0cc4e34b953d4.mockapi.io/users"
      );
      const users = res.data;

      const foundUser = users.find(
        (user) =>
          user.email === inputlog.email && user.password === inputlog.password
      );

      if (foundUser) {
        localStorage.setItem("username", foundUser.name);
        navigate("/HomePage");
      } else {
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("حدث خطأ أثناء تسجيل الدخول");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setInputlog((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pen-title">
      <h1>{form ? "Login" : "Register"}</h1>
      <div className="form-module">
        <div className="toggle" onClick={() => setForm(!form)}>
          {form ? (
            <i className="fa-solid fa-address-card"></i>
          ) : (
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
          )}
        </div>

        {/* Create Account Form */}
        {!form && (
          <form className="form" onSubmit={Register}>
            <h2>Create an account</h2>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <input
              type="number"
              name="numperPhone"
              value={input.numperPhone}
              onChange={handleInputChange}
              placeholder="Phone Number"
            />
            <button type="submit">Create Account</button>
          </form>
        )}

        {/* Login Form */}
        {form && (
          <form className="form" onSubmit={login}>
            <h2>Login to your account</h2>
            <input
              type="text"
              name="email"
              value={inputlog.email}
              onChange={handleLoginChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={inputlog.password}
              onChange={handleLoginChange}
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </form>
        )}
      </div>
    </div>
  );
}
