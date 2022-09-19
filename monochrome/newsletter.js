class NewsletterForm extends React.Component {
    state = {
        busy: false,
        email: '',
        formMessage: '',
        formSubmitted: false,
    }

    validateEmail(email) {
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return re.test(email);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.validateEmail(this.state.email)) {
            this.setState({
                formMessage: 'Adresa de email nu este valida'
            })
            return
        } else {
            this.setState({
                formMessage: ''
            })
        }

        this.setState({
            busy: true,
        })


        setTimeout(() => {
            this.setState({
                busy: false,
                formSubmitted: true,
                formMessage: `Adresa ${this.state.email} a fost inregistrata.`
            })
        }, 1000)
    }

    onInputChange = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    render() {
        return (
            <>
            {this.state.formSubmitted === false && <form
                action=""
                method="post"
                onSubmit={this.handleSubmit}
            >
                <label htmlFor="email-newsletter">sign up for our newsletter</label>
                <input
                    type="email"
                    name="email"
                    id="email-newsletter"
                    value={this.state.email}
                    onChange={this.onInputChange}
                ></input>
                <button type="submit">{this.state.busy ? '...loading' : 'Submit'}</button>
                </form>}
            
            <p>{this.state.formMessage}</p>
            </>
        )
    }
}
const footerSignUpNewsletter = document.querySelector('.footer-sign-up-newsletter')


ReactDOM.createRoot(footerSignUpNewsletter).render(<NewsletterForm></NewsletterForm>);