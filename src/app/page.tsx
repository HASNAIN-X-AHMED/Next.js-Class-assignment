import Link from "next/link";
import  Styles  from "./page.module.css"

const Webpage = () => {
  return (
    <div>
      <h2 className={Styles.main}>This Is My Webpage</h2>
      <ul>
        <li><button><Link href='about' target="blank">About</Link></button></li>
        <li></li>
        <li><button><Link href='contact'  target="blank">Contact</Link></button></li>
        <li></li>
        <li><button><Link href='service'  target="blank">Service</Link></button></li>
      </ul>
    </div>
  )
}

export default Webpage;
