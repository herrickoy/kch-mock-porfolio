import React from 'react';
import profilePicture from "../../../static/assets/images/bio/Koy-portfolio.png";

export default function() {
  return (
      <div className="content-page-wrapper">
          <div 
          className="left-column" 
          style={{
            background: "url(" + profilePicture + ") no-repeat",
            backgroundSize: "fit",
            backgroundPosition: "center",
            
          }} />
           
          <div className="right-column">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, omnis at! Adipisci cum excepturi dolore facilis veritatis ipsa, harum molestiae earum, voluptate mollitia ut asperiores quidem ipsam dolorem? Rem, sunt.
Quae quis, temporibus eum nesciunt illum ipsa, ut rerum delectus perspiciatis quidem tenetur doloremque animi quasi? Dicta laborum deleniti corporis cumque dolorem accusamus, perferendis doloremque quis aliquid natus. Deserunt, eligendi!
Earum sit aliquid nulla possimus quas, distinctio minus quo aliquam aut ducimus, perferendis debitis fugit, maiores natus nemo enim eum? Doloremque inventore cupiditate quibusdam quam officia officiis atque laudantium necessitatibus?
Cumque in, consequatur adipisci sint cupiditate aliquam alias? Numquam non, maiores laudantium quaerat dolor,
          </div>
      </div>
  )
}