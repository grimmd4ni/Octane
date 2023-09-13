import React from 'react'
import icon from '../img/icons/footer-icon.png'

function Ft(){

return(
    <footer className="site-footer">
       	<h2 className = "footer-title">демонстрационный сайт, не для коммерческого использования.</h2>
       	<img src={icon} alt="Apex legend and respawn icons" className="footer-icon"/>
   	</footer>
)

}

export default Ft