import React from "react";
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="logo">
              <Link href={"/"}><a>CMS Comparison</a></Link>
            </div>
          </div>
          <div className="col-6 text-right align-self-center">
            <ul>
              <li>
                <Link href={"/card"}><a>Card view</a></Link>
              </li>
              <li>
                <Link href={"/list"}><a>list view</a></Link>
              </li>
              <li>
                <Link href={"/about"}><a>About Us</a></Link>
              </li>

            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
};

// @ts-ignore
export default Navigation;
