/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                MTU DEV
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href=""
            target="_blank"
          >
            MTU
          </a>
          . Coded by{" "}
          <a
            href=""
            target="_blank"
          >
            MTU DEV
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
