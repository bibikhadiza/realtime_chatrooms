class ApplicationForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      signup: false,
      paragraphText: "Not a member?",
      inputText: "Sign In",
      paragraphLink: "Sign up now",
      example: "hi"
    }
  }

  changeText(){
    newState = {
      signup: true,
      paragraphText: "Existing member?",
      inputText: "Sign Up",
      paragraphLink: "Log in now"
    }
    this.setState(newState);
  }

  render () {
    return(
      <div className="grid">

        <form action="/login" method="POST" className="form login">
          <div className="form__field">
            <label for="login__username"><span className="hidden">Username</span></label>
            <input type="hidden" name="authenticity_token" value={this.props.authenticity_token} />
            <input id="login__username" type="text" name="username" className="form__input" placeholder="Username" required/>
          </div>

          <div className="form__field">
            <input type="submit" value={this.state.inputText}/>
          </div>

        </form>
        <p className="text--center">{this.state.paragraphText} <a  onClick={this.changeText.bind(this)}>{this.state.paragraphLink}</a> </p>
      </div>
    )
  }
}
