import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { login,  } from '../axios';


function AuthScreen({ setUser }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()


  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>

    <Form onSubmit={(e) => {
      e.preventDefault();
      login(formData)
        .then((res) => {
          console.log(res); // Gelen yanıtı kontrol etmek için
          // Kullanıcı bilgisini localStorage'a kaydediyoruz
          localStorage.setItem("user", JSON.stringify(res.data.user));
          // Uygulama durumunu güncelliyoruz
          setUser(res.data.user);
          // Ana sayfaya yönlendiriyoruz
          navigate("/")

        })
        .catch((err) => {
          // Hata durumunda mesajı logluyoruz
          console.error(err.response?.data?.message || "Beklenmedik bir hata oluştu");
        });
    }}>



        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setFormData({...formData,email: e.target.value})} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        {/* Yazıyı ve butonu bir div içinde hizala */}
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <p style={{ position: 'absolute', top: '-25px', left: '25%', margin: '0', fontSize: '14px' }}>
            Hesabın Yok mu? <Link to="/register">Kayıt Ol</Link>
          </p>
          <Button variant="primary" type="submit" style={{ width: '50%' }}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
    

  );
}

export default AuthScreen;