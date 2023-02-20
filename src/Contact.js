import React from "react";
import styled from "styled-components";
const Contact = () => {
const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align:center;
.container{
  margin-top: 6rem;
.contact-form{
    max-width: 25rem;
    max-height:20rem;
    margin:auto;
.contact-inputs{
display: flex;
flex-direction: column;
gap: 1rem;
.btn{
  height:33px;
  width:60px;
  background-color:grey;
  border-radius:5px;
  border: 0px;
    outline: 0px;
    cursor: pointer;
}
inputs[type="submit"]{
  cursor:pointer;
  transition: all 0.2s;

}
}
}
}
`;
  return (
   <Wrapper>
    <h2>Feel Free Contact</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.624157710906!2d74.46751487455437!3d31.120176566806744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919b976e2210e67%3A0x60e4f435a5cc7b0e!2sConcordia%20College%20Kasur!5e0!3m2!1sen!2s!4v1670219375557!5m2!1sen!2s"
     width="100%" height="450" style={{border:0}} allowFullScreen=""
     loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     <div className="container">
     <div className="contact-form">
     <form action="https://formspree.io/f/mnqrepob" method="POST" className="contact-inputs">
     <input type="text" placeholder="Username" name="Username" required autocomplete="off"/>
     <input type="email"  name="Email" placeholder="Email" required autocomplete="off"/>
     <textarea name="messages" cols="30" rows="10" required autocomplete="off" placeholder="Enter your message"></textarea>
     <input type="submit" value="send" className="btn"/>
     </form>
     </div>
     </div>
   </Wrapper>
  )
}

export default Contact
