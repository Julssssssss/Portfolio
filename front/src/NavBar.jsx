import './assets/Navigation.css'
import { Routes, Route, Outlet, Link } from "react-router-dom"
const NavBar = () => {
  return (
<> 
<div className='Container'>
<div className="NavContain">

  <button id='NavButton'>
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="42" viewBox="0 0 48 42" fill="none">
  <g filter="url(#filter0_d_4_5)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 32.1111C4 31.6101 4.19156 31.1297 4.53253 30.7755C4.87351 30.4212 5.33597 30.2222 5.81818 30.2222H42.1818C42.664 30.2222 43.1265 30.4212 43.4675 30.7755C43.8084 31.1297 44 31.6101 44 32.1111C44 32.6121 43.8084 33.0925 43.4675 33.4468C43.1265 33.801 42.664 34 42.1818 34H5.81818C5.33597 34 4.87351 33.801 4.53253 33.4468C4.19156 33.0925 4 32.6121 4 32.1111ZM4 17C4 16.499 4.19156 16.0186 4.53253 15.6644C4.87351 15.3101 5.33597 15.1111 5.81818 15.1111H42.1818C42.664 15.1111 43.1265 15.3101 43.4675 15.6644C43.8084 16.0186 44 16.499 44 17C44 17.501 43.8084 17.9814 43.4675 18.3356C43.1265 18.6899 42.664 18.8889 42.1818 18.8889H5.81818C5.33597 18.8889 4.87351 18.6899 4.53253 18.3356C4.19156 17.9814 4 17.501 4 17ZM4 1.88889C4 1.38792 4.19156 0.907478 4.53253 0.553243C4.87351 0.199008 5.33597 0 5.81818 0H42.1818C42.664 0 43.1265 0.199008 43.4675 0.553243C43.8084 0.907478 44 1.38792 44 1.88889C44 2.38985 43.8084 2.8703 43.4675 3.22453C43.1265 3.57877 42.664 3.77778 42.1818 3.77778H5.81818C5.33597 3.77778 4.87351 3.57877 4.53253 3.22453C4.19156 2.8703 4 2.38985 4 1.88889Z" fill="#580C1F"/>
  </g>
  <defs>
    <filter id="filter0_d_4_5" x="0" y="0" width="48" height="42" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.466667 0 0 0 0 0.317647 0 0 0 0 0.266667 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_5"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_5" result="shape"/>
    </filter>
  </defs>
</svg>
  </button>
  
</div>
<div className='NavContain1'>
    <div className='circle'>

    </div>
</div>
</div>

</>
  )
}

export default NavBar