import React from "react";
import './RegistrationForm.css';

class RegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('User submitted!' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <body>
                <div class="container">
                    <h2><i>User Registration</i></h2>
                    <form action="/submit" method="post">
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" required value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="balance">e₹ Balance:</label>
                            <input type="text" id="balance" name="balance" required value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </body>
        );
    }

}

export default RegistrationForm;