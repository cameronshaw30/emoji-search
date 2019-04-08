import React, {PureComponent} from 'react';

class NavItem extends PureComponent {

    constructor(props) {
        super(props);
        this.handleNavigate = this.handleNavigate.bind(this);
    }

    handleNavigate(e) {
        console.log(e);
        this.props.navigate(e.target.getAttribute("value"));
    }

    render() {
        return (
            <li key={this.props.name} className="nav-item mx-0 mx-lg-1" onClick={this.handleNavigate}>
                <a value={this.props.name} className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">
                    {this.props.name}
                </a>
            </li>
        );
    }
}

export default NavItem;