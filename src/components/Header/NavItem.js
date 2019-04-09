import React, {PureComponent} from 'react';

class NavItem extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li key={this.props.name} className="nav-item mx-0 mx-lg-1" onClick={this.props.navigate}>
                <a value={this.props.name} className="nav-link py-3 px-0 px-lg-3 rounded">
                    {this.props.name}
                </a>
            </li>
        );
    }
}

export default NavItem;