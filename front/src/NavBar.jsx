import React, { useState, useEffect } from "react";
import "./assets/Navigation.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import AboutMe from './AboutMe.jsx'

const NavBar = () => {
  const [icon, setIcon] = useState(false);

  const iconHover = () => {
    setIcon(true);
  };

  const notHover = () => {
    setIcon(false);
  };

  const [isChecked, setChecked] = useState(localStorage.getItem('isChecked') === 'true' || false);


  useEffect(() => {
    localStorage.setItem('isChecked', isChecked);
  }, [isChecked]);
 

  return (
    <>
    <div className="Container1">
      <div className="NavContain">
        <div
          className="HamButton"
          onMouseEnter={iconHover}
          onMouseLeave={notHover}
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            {icon ? (
              <g>
                {/*x icon */}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36.5472 0.416146C36.6908 0.547725 36.8047 0.704036 36.8824 0.876126C36.9601 1.04822 37.0001 1.2327 37.0001 1.41902C37.0001 1.60534 36.9601 1.78982 36.8824 1.96191C36.8047 2.134 36.6908 2.29031 36.5472 2.42189L2.63561 33.5846C2.34617 33.8506 1.9536 34 1.54427 34C1.13494 34 0.742372 33.8506 0.452931 33.5846C0.163491 33.3186 0.00088501 32.9579 0.00088501 32.5817C0.00088501 32.2056 0.163491 31.8448 0.452931 31.5789L34.3645 0.416146C34.5077 0.284234 34.6778 0.179576 34.8651 0.108167C35.0524 0.0367574 35.2531 0 35.4559 0C35.6586 0 35.8594 0.0367574 36.0467 0.108167C36.2339 0.179576 36.404 0.284234 36.5472 0.416146Z"
                  fill="#580C1F"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.452855 0.416146C0.309306 0.547725 0.195416 0.704036 0.117708 0.876126C0.0399998 1.04822 0 1.2327 0 1.41902C0 1.60534 0.0399998 1.78982 0.117708 1.96191C0.195416 2.134 0.309306 2.29031 0.452855 2.42189L34.3645 33.5846C34.6539 33.8506 35.0465 34 35.4558 34C35.8651 34 36.2577 33.8506 36.5471 33.5846C36.8366 33.3186 36.9992 32.9579 36.9992 32.5817C36.9992 32.2056 36.8366 31.8448 36.5471 31.5789L2.63553 0.416146C2.49234 0.284234 2.32224 0.179576 2.13497 0.108167C1.94771 0.0367574 1.74694 0 1.54419 0C1.34144 0 1.14068 0.0367574 0.95341 0.108167C0.76614 0.179576 0.596041 0.284234 0.452855 0.416146Z"
                  fill="#580C1F"
                />
              </g>
            ) : (
              // default icon
              <g filter="url(#filter0_d_4_5)" className="defaultIcon">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 32.1111C4 31.6101 4.19156 31.1297 4.53253 30.7755C4.87351 30.4212 5.33597 30.2222 5.81818 30.2222H42.1818C42.664 30.2222 43.1265 30.4212 43.4675 30.7755C43.8084 31.1297 44 31.6101 44 32.1111C44 32.6121 43.8084 33.0925 43.4675 33.4468C43.1265 33.801 42.664 34 42.1818 34H5.81818C5.33597 34 4.87351 33.801 4.53253 33.4468C4.19156 33.0925 4 32.6121 4 32.1111ZM4 17C4 16.499 4.19156 16.0186 4.53253 15.6644C4.87351 15.3101 5.33597 15.1111 5.81818 15.1111H42.1818C42.664 15.1111 43.1265 15.3101 43.4675 15.6644C43.8084 16.0186 44 16.499 44 17C44 17.501 43.8084 17.9814 43.4675 18.3356C43.1265 18.6899 42.664 18.8889 42.1818 18.8889H5.81818C5.33597 18.8889 4.87351 18.6899 4.53253 18.3356C4.19156 17.9814 4 17.501 4 17ZM4 1.88889C4 1.38792 4.19156 0.907478 4.53253 0.553243C4.87351 0.199008 5.33597 0 5.81818 0H42.1818C42.664 0 43.1265 0.199008 43.4675 0.553243C43.8084 0.907478 44 1.38792 44 1.88889C44 2.38985 43.8084 2.8703 43.4675 3.22453C43.1265 3.57877 42.664 3.77778 42.1818 3.77778H5.81818C5.33597 3.77778 4.87351 3.57877 4.53253 3.22453C4.19156 2.8703 4 2.38985 4 1.88889Z"
                  fill="#580C1F"
                />
              </g>
            )}
          </svg>
          {icon && (
            <div className="navButton" tabIndex={0}>
              {/*about me*/}

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="aboutMe"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_42_2)">
                    <path
                      d="M30 2.5C30.663 2.5 31.2989 2.76339 31.7678 3.23223C32.2366 3.70107 32.5 4.33696 32.5 5V31.8875C32.5 31.8875 30 27.5 20 27.5C10 27.5 7.5 31.8875 7.5 31.8875V5C7.5 4.33696 7.76339 3.70107 8.23223 3.23223C8.70107 2.76339 9.33696 2.5 10 2.5H30ZM10 0C8.67392 0 7.40215 0.526784 6.46447 1.46447C5.52678 2.40215 5 3.67392 5 5V35C5 36.3261 5.52678 37.5979 6.46447 38.5355C7.40215 39.4732 8.67392 40 10 40H30C31.3261 40 32.5979 39.4732 33.5355 38.5355C34.4732 37.5979 35 36.3261 35 35V5C35 3.67392 34.4732 2.40215 33.5355 1.46447C32.5979 0.526784 31.3261 0 30 0L10 0Z"
                      fill="#580C1F"
                    />
                    <path
                      d="M20 25C20.9849 25 21.9602 24.806 22.8701 24.4291C23.7801 24.0522 24.6069 23.4997 25.3033 22.8033C25.9997 22.1069 26.5522 21.2801 26.9291 20.3701C27.306 19.4602 27.5 18.4849 27.5 17.5C27.5 16.5151 27.306 15.5398 26.9291 14.6299C26.5522 13.7199 25.9997 12.8931 25.3033 12.1967C24.6069 11.5003 23.7801 10.9478 22.8701 10.5709C21.9602 10.194 20.9849 10 20 10C18.0109 10 16.1032 10.7902 14.6967 12.1967C13.2902 13.6032 12.5 15.5109 12.5 17.5C12.5 19.4891 13.2902 21.3968 14.6967 22.8033C16.1032 24.2098 18.0109 25 20 25Z"
                      fill="#580C1F"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_2">
                      <rect width="40" height="40" fill="none" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              {/*projects*/}

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="proj"
                  viewBox="0 0 45 40"
                  fill="none"
                >
                  <path
                    d="M40.7812 3.33333C41.1542 3.33333 41.5119 3.50893 41.7756 3.82149C42.0393 4.13405 42.1875 4.55797 42.1875 5V35C42.1875 35.442 42.0393 35.866 41.7756 36.1785C41.5119 36.4911 41.1542 36.6667 40.7812 36.6667H4.21875C3.84579 36.6667 3.4881 36.4911 3.22438 36.1785C2.96066 35.866 2.8125 35.442 2.8125 35V5C2.8125 4.55797 2.96066 4.13405 3.22438 3.82149C3.4881 3.50893 3.84579 3.33333 4.21875 3.33333H40.7812ZM4.21875 0C3.09987 0 2.02681 0.526784 1.23564 1.46447C0.444474 2.40215 0 3.67392 0 5L0 35C0 36.3261 0.444474 37.5979 1.23564 38.5355C2.02681 39.4732 3.09987 40 4.21875 40H40.7812C41.9001 40 42.9732 39.4732 43.7644 38.5355C44.5555 37.5979 45 36.3261 45 35V5C45 3.67392 44.5555 2.40215 43.7644 1.46447C42.9732 0.526784 41.9001 0 40.7812 0H4.21875Z"
                    fill="#580C1F"
                  />
                  <path
                    d="M19.6875 11.6666C19.6875 11.2246 19.8357 10.8007 20.0994 10.4881C20.3631 10.1756 20.7208 9.99997 21.0938 9.99997H35.1563C35.5293 9.99997 35.8869 10.1756 36.1507 10.4881C36.4144 10.8007 36.5625 11.2246 36.5625 11.6666C36.5625 12.1087 36.4144 12.5326 36.1507 12.8451C35.8869 13.1577 35.5293 13.3333 35.1563 13.3333H21.0938C20.7208 13.3333 20.3631 13.1577 20.0994 12.8451C19.8357 12.5326 19.6875 12.1087 19.6875 11.6666ZM15.48 8.81997C15.611 8.97479 15.7149 9.1587 15.7858 9.36119C15.8567 9.56367 15.8932 9.78074 15.8932 9.99997C15.8932 10.2192 15.8567 10.4363 15.7858 10.6387C15.7149 10.8412 15.611 11.0251 15.48 11.18L11.2613 16.18C11.1307 16.3352 10.9755 16.4583 10.8046 16.5423C10.6338 16.6264 10.4506 16.6696 10.2657 16.6696C10.0807 16.6696 9.89754 16.6264 9.72669 16.5423C9.55585 16.4583 9.40067 16.3352 9.27004 16.18L7.86379 14.5133C7.73304 14.3583 7.62933 14.1744 7.55857 13.9719C7.48781 13.7694 7.45139 13.5524 7.45139 13.3333C7.45139 12.8907 7.59973 12.4663 7.86379 12.1533C8.12784 11.8403 8.48598 11.6645 8.85941 11.6645C9.23284 11.6645 9.59098 11.8403 9.85504 12.1533L10.2657 12.6433L13.4888 8.81997C13.6194 8.66476 13.7746 8.54161 13.9454 8.45759C14.1163 8.37357 14.2994 8.33032 14.4844 8.33032C14.6694 8.33032 14.8525 8.37357 15.0234 8.45759C15.1942 8.54161 15.3494 8.66476 15.48 8.81997ZM19.6875 25C19.6875 24.5579 19.8357 24.134 20.0994 23.8215C20.3631 23.5089 20.7208 23.3333 21.0938 23.3333H35.1563C35.5293 23.3333 35.8869 23.5089 36.1507 23.8215C36.4144 24.134 36.5625 24.5579 36.5625 25C36.5625 25.442 36.4144 25.8659 36.1507 26.1785C35.8869 26.491 35.5293 26.6666 35.1563 26.6666H21.0938C20.7208 26.6666 20.3631 26.491 20.0994 26.1785C19.8357 25.8659 19.6875 25.442 19.6875 25ZM15.48 22.1533C15.611 22.3081 15.7149 22.492 15.7858 22.6945C15.8567 22.897 15.8932 23.1141 15.8932 23.3333C15.8932 23.5525 15.8567 23.7696 15.7858 23.9721C15.7149 24.1746 15.611 24.3585 15.48 24.5133L11.2613 29.5133C11.1307 29.6685 10.9755 29.7917 10.8046 29.8757C10.6338 29.9597 10.4506 30.0029 10.2657 30.0029C10.0807 30.0029 9.89754 29.9597 9.72669 29.8757C9.55585 29.7917 9.40067 29.6685 9.27004 29.5133L7.86379 27.8466C7.73304 27.6917 7.62933 27.5077 7.55857 27.3052C7.48781 27.1028 7.45139 26.8858 7.45139 26.6666C7.45139 26.4475 7.48781 26.2305 7.55857 26.028C7.62933 25.8256 7.73304 25.6416 7.86379 25.4866C7.99453 25.3317 8.14975 25.2088 8.32058 25.1249C8.49141 25.041 8.67451 24.9979 8.85941 24.9979C9.04432 24.9979 9.22741 25.041 9.39824 25.1249C9.56907 25.2088 9.72429 25.3317 9.85504 25.4866L10.2657 25.9766L13.4888 22.1533C13.6194 21.9981 13.7746 21.8749 13.9454 21.7909C14.1163 21.7069 14.2994 21.6637 14.4844 21.6637C14.6694 21.6637 14.8525 21.7069 15.0234 21.7909C15.1942 21.8749 15.3494 21.9981 15.48 22.1533Z"
                    fill="#580C1F"
                  />
                </svg>
              </button>

              {/*contacts*/}

              <button>
                <svg
                  className="contacts"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M0 4C0 2.93913 0.395088 1.92172 1.09835 1.17157C1.80161 0.421427 2.75544 0 3.75 0L36.25 0C37.2446 0 38.1984 0.421427 38.9016 1.17157C39.6049 1.92172 40 2.93913 40 4V9.33333C40 10.3942 39.6049 11.4116 38.9016 12.1618C38.1984 12.9119 37.2446 13.3333 36.25 13.3333H3.75C2.75544 13.3333 1.80161 12.9119 1.09835 12.1618C0.395088 11.4116 0 10.3942 0 9.33333L0 4ZM3.75 2.66667C3.41848 2.66667 3.10054 2.80714 2.86612 3.05719C2.6317 3.30724 2.5 3.64638 2.5 4V9.33333C2.5 9.68695 2.6317 10.0261 2.86612 10.2761C3.10054 10.5262 3.41848 10.6667 3.75 10.6667H36.25C36.5815 10.6667 36.8995 10.5262 37.1339 10.2761C37.3683 10.0261 37.5 9.68695 37.5 9.33333V4C37.5 3.64638 37.3683 3.30724 37.1339 3.05719C36.8995 2.80714 36.5815 2.66667 36.25 2.66667H3.75Z"
                    fill="#580C1F"
                  />
                  <path
                    d="M5 6.66665C5 6.31303 5.1317 5.97389 5.36612 5.72384C5.60054 5.47379 5.91848 5.33331 6.25 5.33331H13.75C14.0815 5.33331 14.3995 5.47379 14.6339 5.72384C14.8683 5.97389 15 6.31303 15 6.66665C15 7.02027 14.8683 7.35941 14.6339 7.60946C14.3995 7.8595 14.0815 7.99998 13.75 7.99998H6.25C5.91848 7.99998 5.60054 7.8595 5.36612 7.60946C5.1317 7.35941 5 7.02027 5 6.66665ZM32.0575 7.52798L31.0675 6.47198C30.9799 6.37874 30.9202 6.25985 30.896 6.13037C30.8717 6.00089 30.8841 5.86666 30.9315 5.7447C30.9789 5.62273 31.0592 5.51852 31.1622 5.44529C31.2652 5.37205 31.3862 5.33308 31.51 5.33331H33.49C33.6138 5.33308 33.7348 5.37205 33.8378 5.44529C33.9408 5.51852 34.0211 5.62273 34.0685 5.7447C34.1159 5.86666 34.1283 6.00089 34.104 6.13037C34.0798 6.25985 34.0201 6.37874 33.9325 6.47198L32.9425 7.52798C32.8844 7.59007 32.8155 7.63932 32.7395 7.67293C32.6636 7.70654 32.5822 7.72384 32.5 7.72384C32.4178 7.72384 32.3364 7.70654 32.2605 7.67293C32.1845 7.63932 32.1156 7.59007 32.0575 7.52798ZM0 21.3333C0 19.9188 0.526784 18.5623 1.46447 17.5621C2.40215 16.5619 3.67392 16 5 16H35C36.3261 16 37.5979 16.5619 38.5355 17.5621C39.4732 18.5623 40 19.9188 40 21.3333V34.6666C40 36.0811 39.4732 37.4377 38.5355 38.4379C37.5979 39.4381 36.3261 40 35 40H5C3.67392 40 2.40215 39.4381 1.46447 38.4379C0.526784 37.4377 0 36.0811 0 34.6666V21.3333ZM2.5 29.3333V34.6666C2.5 35.3739 2.76339 36.0522 3.23223 36.5523C3.70107 37.0524 4.33696 37.3333 5 37.3333H35C35.663 37.3333 36.2989 37.0524 36.7678 36.5523C37.2366 36.0522 37.5 35.3739 37.5 34.6666V29.3333H2.5ZM37.5 26.6666V21.3333C37.5 20.6261 37.2366 19.9478 36.7678 19.4477C36.2989 18.9476 35.663 18.6666 35 18.6666H5C4.33696 18.6666 3.70107 18.9476 3.23223 19.4477C2.76339 19.9478 2.5 20.6261 2.5 21.3333V26.6666H37.5ZM5 22.6666C5 22.313 5.1317 21.9739 5.36612 21.7238C5.60054 21.4738 5.91848 21.3333 6.25 21.3333H28.75C29.0815 21.3333 29.3995 21.4738 29.6339 21.7238C29.8683 21.9739 30 22.313 30 22.6666C30 23.0203 29.8683 23.3594 29.6339 23.6095C29.3995 23.8595 29.0815 24 28.75 24H6.25C5.91848 24 5.60054 23.8595 5.36612 23.6095C5.1317 23.3594 5 23.0203 5 22.6666ZM5 33.3333C5 32.9797 5.1317 32.6406 5.36612 32.3905C5.60054 32.1405 5.91848 32 6.25 32H21.25C21.5815 32 21.8995 32.1405 22.1339 32.3905C22.3683 32.6406 22.5 32.9797 22.5 33.3333C22.5 33.6869 22.3683 34.0261 22.1339 34.2761C21.8995 34.5262 21.5815 34.6666 21.25 34.6666H6.25C5.91848 34.6666 5.60054 34.5262 5.36612 34.2761C5.1317 34.0261 5 33.6869 5 33.3333Z"
                    fill="#580C1F"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* for right side navbar container */}
      <div className="NavContain1">
        <label className="mode drop-shadow-xl">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setChecked(!isChecked)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="circle"
            width="40"
            height="40"
            viewBox="0 0 70 70"
            fill="none"
          >
            {isChecked ? (
              <g>
                <path
                  d="M20.8004 0.953334C21.1388 1.36108 21.3461 1.86009 21.3955 2.38588C21.4449 2.91167 21.3342 3.44008 21.0777 3.90283C19.0734 7.5518 18.0267 11.642 18.0339 15.7971C18.0339 29.6198 29.3978 40.8128 43.4034 40.8128C45.2304 40.8128 47.0088 40.6237 48.7179 40.2628C49.2418 40.1503 49.7875 40.1933 50.2869 40.3865C50.7863 40.5797 51.2173 40.9145 51.5259 41.3491C51.8518 41.801 52.0179 42.3469 51.9985 42.9021C51.979 43.4573 51.7751 43.9905 51.4185 44.4189C48.6995 47.7308 45.2694 50.3994 41.3783 52.2299C37.4872 54.0604 33.2331 55.0067 28.9264 55C12.9448 55 0 42.2326 0 26.5019C0 14.6627 7.32866 4.50786 17.7635 0.203928C18.2833 -0.0139094 18.8603 -0.0586195 19.4079 0.0765137C19.9555 0.211647 20.4442 0.519327 20.8004 0.953334Z"
                  fill="#580C1F"
                />
              </g>
            ) : (
              <g>
                <path
                  d="M30.5 45.75C34.5446 45.75 38.4235 44.1433 41.2834 41.2834C44.1433 38.4235 45.75 34.5446 45.75 30.5C45.75 26.4554 44.1433 22.5766 41.2834 19.7166C38.4235 16.8567 34.5446 15.25 30.5 15.25C26.4554 15.25 22.5766 16.8567 19.7166 19.7166C16.8567 22.5766 15.25 26.4554 15.25 30.5C15.25 34.5446 16.8567 38.4235 19.7166 41.2834C22.5766 44.1433 26.4554 45.75 30.5 45.75ZM30.5 0C31.0056 0 31.4904 0.200837 31.8479 0.558328C32.2054 0.915819 32.4062 1.40068 32.4062 1.90625V9.53125C32.4062 10.0368 32.2054 10.5217 31.8479 10.8792C31.4904 11.2367 31.0056 11.4375 30.5 11.4375C29.9944 11.4375 29.5096 11.2367 29.1521 10.8792C28.7946 10.5217 28.5938 10.0368 28.5938 9.53125V1.90625C28.5938 1.40068 28.7946 0.915819 29.1521 0.558328C29.5096 0.200837 29.9944 0 30.5 0ZM30.5 49.5625C31.0056 49.5625 31.4904 49.7633 31.8479 50.1208C32.2054 50.4783 32.4062 50.9632 32.4062 51.4688V59.0938C32.4062 59.5993 32.2054 60.0842 31.8479 60.4417C31.4904 60.7992 31.0056 61 30.5 61C29.9944 61 29.5096 60.7992 29.1521 60.4417C28.7946 60.0842 28.5938 59.5993 28.5938 59.0938V51.4688C28.5938 50.9632 28.7946 50.4783 29.1521 50.1208C29.5096 49.7633 29.9944 49.5625 30.5 49.5625ZM61 30.5C61 31.0056 60.7992 31.4904 60.4417 31.8479C60.0842 32.2054 59.5993 32.4062 59.0938 32.4062H51.4688C50.9632 32.4062 50.4783 32.2054 50.1208 31.8479C49.7633 31.4904 49.5625 31.0056 49.5625 30.5C49.5625 29.9944 49.7633 29.5096 50.1208 29.1521C50.4783 28.7946 50.9632 28.5938 51.4688 28.5938H59.0938C59.5993 28.5938 60.0842 28.7946 60.4417 29.1521C60.7992 29.5096 61 29.9944 61 30.5ZM11.4375 30.5C11.4375 31.0056 11.2367 31.4904 10.8792 31.8479C10.5217 32.2054 10.0368 32.4062 9.53125 32.4062H1.90625C1.40068 32.4062 0.915819 32.2054 0.558328 31.8479C0.200837 31.4904 0 31.0056 0 30.5C0 29.9944 0.200837 29.5096 0.558328 29.1521C0.915819 28.7946 1.40068 28.5938 1.90625 28.5938H9.53125C10.0368 28.5938 10.5217 28.7946 10.8792 29.1521C11.2367 29.5096 11.4375 29.9944 11.4375 30.5ZM52.0673 8.93269C52.4247 9.29016 52.6254 9.77494 52.6254 10.2804C52.6254 10.7859 52.4247 11.2707 52.0673 11.6281L46.6764 17.0228C46.4992 17.1998 46.2888 17.3401 46.0574 17.4358C45.8259 17.5315 45.5778 17.5807 45.3274 17.5805C44.8215 17.5801 44.3365 17.3788 43.9791 17.0209C43.8021 16.8437 43.6618 16.6333 43.5661 16.4018C43.4704 16.1704 43.4212 15.9223 43.4214 15.6718C43.4218 15.166 43.6231 14.681 43.981 14.3236L49.3719 8.93269C49.7294 8.57532 50.2141 8.37456 50.7196 8.37456C51.2251 8.37456 51.7098 8.57532 52.0673 8.93269ZM17.019 43.981C17.3764 44.3385 17.5771 44.8232 17.5771 45.3287C17.5771 45.8342 17.3764 46.319 17.019 46.6764L11.6281 52.0673C11.2686 52.4146 10.7871 52.6067 10.2873 52.6023C9.78745 52.598 9.30934 52.3975 8.95591 52.0441C8.60248 51.6907 8.402 51.2125 8.39765 50.7127C8.39331 50.2129 8.58545 49.7314 8.93269 49.3719L14.3236 43.981C14.681 43.6236 15.1658 43.4229 15.6713 43.4229C16.1768 43.4229 16.6615 43.6236 17.019 43.981ZM52.0673 52.0673C51.7098 52.4247 51.2251 52.6254 50.7196 52.6254C50.2141 52.6254 49.7294 52.4247 49.3719 52.0673L43.981 46.6764C43.6338 46.3169 43.4416 45.8354 43.446 45.3356C43.4503 44.8358 43.6508 44.3577 44.0042 44.0042C44.3577 43.6508 44.8358 43.4503 45.3356 43.446C45.8354 43.4416 46.3169 43.6338 46.6764 43.981L52.0673 49.3719C52.4247 49.7294 52.6254 50.2141 52.6254 50.7196C52.6254 51.2251 52.4247 51.7098 52.0673 52.0673ZM17.019 17.0228C16.6615 17.3802 16.1768 17.5809 15.6713 17.5809C15.1658 17.5809 14.681 17.3802 14.3236 17.0228L8.93269 11.6281C8.75062 11.4523 8.6054 11.2419 8.5055 11.0094C8.40559 10.7768 8.353 10.5267 8.3508 10.2735C8.34861 10.0204 8.39684 9.76942 8.49268 9.53515C8.58853 9.30088 8.73008 9.08804 8.90906 8.90906C9.08804 8.73008 9.30088 8.58853 9.53515 8.49268C9.76942 8.39684 10.0204 8.34861 10.2735 8.3508C10.5267 8.353 10.7768 8.40559 11.0094 8.5055C11.2419 8.6054 11.4523 8.75062 11.6281 8.93269L17.019 14.3236C17.1965 14.5006 17.3374 14.711 17.4335 14.9426C17.5296 15.1742 17.579 15.4225 17.579 15.6732C17.579 15.9239 17.5296 16.1722 17.4335 16.4038C17.3374 16.6354 17.1965 16.8457 17.019 17.0228Z"
                  fill="#580C1F"
                />
              </g>
            )}
          </svg>
        </label>
      </div>
      
    </div>
    
    </>
  );
};

export default NavBar;
