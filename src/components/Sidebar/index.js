import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <i className="fa fa-search" />
                  </button>
                </span>
              </div>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/opics'); }} >
                <i className="fa fa-table fa-fw" /> &nbsp;Opics
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/murex'); }} >
                <i className="fa fa-area-chart fa-fw" /> &nbsp;Murex
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/table'); }} >
                <i className="fa fa-pie-chart fa-fw" /> &nbsp;Razor
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/table'); }} >
                <i className="fa fa-gear fa-fw" /> &nbsp;Configuration
              </a>
            </li>


          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
