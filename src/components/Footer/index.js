import React from "react";

import style from './style.module.css'

const Footer = () => (
  <footer className={style.footer}>
    © {new Date().getFullYear()} UCLA Design Media Arts
  </footer>
)

export default Footer;
