import React from "react";
import { Container } from "react-bootstrap";
function AuthFooter ()  {
    return (
        <React.Fragment>
            <footer className="bg-light border-top py-3">
                <Container>
                    &copy; ChatBot login
                </Container>
            </footer>
        </React.Fragment>
    );
}
export default AuthFooter;