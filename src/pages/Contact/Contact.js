import "./Contact.css";
import Navegation from "../../components/Navagation"

export default function Contact() {
    return (
        <div>
            <Navegation page="Contact" />
            <main className="d-flex justify-content-center">
                <div className="contact-container d-flex flex-column justify-content-center aling-items-center mt-5">
                    <h2 className="text-center text">Contact</h2>
                    <h3 className="text-center mb-2 text">Leave us your information so we can contact you</h3>
                    <form className="form-container justify-content-md-center p-4">
                        <div className="name d-flex flex-column">
                            <label className="mb-2" htmlFor="name">Name</label>
                            <input type="text" className="input rounded-2 p-2 border border-0 mb-2" aria-label="First name" id="name" />
                        </div>
                        <div className="email d-flex flex-column">
                            <label className="mb-2" htmlFor="email">Email</label>
                            <input type="email" className="input rounded-2 p-2 border border-0 mb-2" aria-label="Last name" id="email" />
                        </div>
                        <div className="message d-flex flex-column">
                            <label htmlFor="message" className="form-label mb-2">Message</label>
                            <textarea className="area rounded-2 p-2 border border-0 mb-2" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <div className="send">
                            <input className="btn btn-success" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </main>
        </div>

    )
}

//pasamos la prop "hoja" al componente Navegation