/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function FooterBlack() {
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
                <a>
                  Dan&Nat Web Development
                </a>
              </li>
              <li>
                <a>
                  About Us
                </a>
              </li>
              <li>
                <a>
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, {" "}
            <a>
              Nelson Business Systems
            </a>
            . Coded by{" "}
            <a>
              Dan&Nat Web Development
            </a>
          
          </div>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
