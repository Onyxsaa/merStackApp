import React, { useState } from "react";
import { Form, Button, InputGroup, Container } from "react-bootstrap";
import { signUp } from "../axios";
import { useNavigate } from "react-router-dom";


function RegisterForm({ setUser }) {

  const navigate = useNavigate()

  const [formData, setFormData] = useState(
    {
      fullName: "",
      email: "",
      password: "",
      numara: ""
  }
  )

  return (
    <Container style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <h2 className="text-center mb-4">Kayıt Ol</h2>
      <Form >
        {/* Full Name */}
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control onChange={(e) => setFormData({...formData, fullName: e.target.value})} type="text" placeholder="Adınız ve Soyadınız" />
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control onChange={(e) => setFormData({...formData, email: e.target.value})} type="email" placeholder="Email adresinizi girin" />
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setFormData({...formData, password: e.target.value})}
 type="password" placeholder="Şifrenizi girin" />
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Şifrenizi tekrar girin"
          />
        </Form.Group>

        {/* Phone Number */}
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <InputGroup>
            <InputGroup.Text>+90</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Telefon numaranızı girin"
              onChange={(e) => setFormData({...formData, numara:  e.target.value})}
            />
          </InputGroup>
        </Form.Group>

        {/* Submit Button */}
        <div className="d-grid">
        <Button 
        onClick={(e) => {
          e.preventDefault();
          signUp(formData) // İstek sadece butona tıklanınca yapılacak.
            .then((res) => {
              if (res.data.createdUser) {
                localStorage.setItem("user", JSON.stringify(res.data.createdUser));
                setUser(res.data.createdUser);
                navigate("/"); // Kullanıcı başarıyla oluşturulursa yönlendirme yap.
              }
            })
            .catch((err) => {
              console.error("Kayıt sırasında hata oluştu:", err.message);
            });
        }}
        variant="primary" 
        type="button" // type="submit" yerine button kullanıyoruz çünkü form gönderimini manuel kontrol ediyoruz.
      >
        Kayıt Ol
      </Button>

        </div>
      </Form>
    </Container>
  );
}

export default RegisterForm;
