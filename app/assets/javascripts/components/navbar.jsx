var Navbar = React.createClass({
    render: function() {
    return (
        <div>
          <div className="ui pointing menu">
            <a className="active item" href="/">
              Home
            </a>
            <a className="item">
              Unread Messages
            </a>
            <a className="item" href="/chatrooms/new">
              Create Chatroom
            </a>
          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <input type="text" placeholder="Search..." />
                  <i className="search link icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="ui segment">
            <p></p>
          </div>
        </div>
      )
    }
});
