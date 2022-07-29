import React from 'react'
import { menu } from '../constants/menu'
import {FooterStyles} from '../styles/FooterStyles'
import { Link } from 'gatsby'
import Logo from './Logo'
import ParagraphText from './TypoGraphy/ParagraphText'
import { socialLinks } from '../constants/socialLinks'
function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo/>
        <ParagraphText className="footer__text">
        Prajwal Urkude is a IT-Student from India. More importantly, He is currently struggling to establish himself as a good programmer, meaning that he has a lot of geeky stuff that he likes to share.
        </ParagraphText>
        <ul className='footer__menuList'>
        {menu.map(item=>(
            <li key={item.path}>{
                <Link to={item.path}>
                {item.title}
                </Link>
            }
            </li>
        ))}
        </ul>
        <ul className="footer__socialList">
            {socialLinks.map(item=>(
                <li key={item.name}>
                <a href={item.url}>{item.icon}</a>
                </li>
            ))}
        </ul>
        <ParagraphText className="copyright">
            @ Praj-Blogs Creative {new Date().getFullYear()}. All rights reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  )
}

export default Footer
