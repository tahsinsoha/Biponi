// @ts-nocheck
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import jwtDecode from 'jwt-decode'

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/advertisement', state: 'advertisementMenuOpen' },
      { path: '/orders', state: 'orderMenuOpen' },
      { path: '/partners', state: 'partnerMenuOpen' },
      { path: '/purchases', state: 'purchaseMenuOpen' },
      { path: '/subscribers', state: 'subscriberMenuOpen' },
      { path: '/subscription-packages', state: 'packageMenuOpen' },
      { path: '/tenders', state: 'tenderMenuOpen' },
      { path: '/payouts', state: 'payoutMenuOpen' },
      { path: '/form-elements', state: 'formElementsMenuOpen' },
      { path: '/tables', state: 'tablesMenuOpen' },
      { path: '/icons', state: 'iconsMenuOpen' },
      { path: '/charts', state: 'chartsMenuOpen' },
      { path: '/users', state: 'userPagesMenuOpen' },
      { path: '/error-pages', state: 'errorPagesMenuOpen' },
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true })
      }
    }));

  }

  render() {
    let decodedUser = localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')) : "";
    console.log(decodedUser);
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <Link className="sidebar-brand brand-logo" to="/dashboard"><h2 className="text-light">Daktarbari</h2></Link>
          <Link className="sidebar-brand brand-logo-mini" to="/dashboard"><h1 className="text-light">D</h1></Link>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={require('../../assets/images/faces/face15.jpg')} alt="profile" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal">{decodedUser.fullName ? decodedUser.fullName : "Daktarbari Admin"}</h5>
                  <span>{decodedUser.userEmail ? decodedUser.userEmail : ""}</span>
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                  <a href="!#" className="dropdown-item preview-item" onClick={evt => evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Account settings</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt => evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>Change Password</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className={this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon"><i className="mdi mdi-view-dashboard"></i></span>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
          <li className={this.isPathActive('/advertisement') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.advertisementMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('advertisementMenuOpen')} data-toggle="collapse">
              <span className="menu-icon"><i className="mdi mdi-laptop"></i></span>
              <span className="menu-title"><Trans>Appointment</Trans></span>
              <i className='menu-arrow' ></i>
            </div>

            <Collapse in={this.state.advertisementMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/advertisement/activeads') ? 'nav-link active' : 'nav-link'} to="/advertisement/activeads"><Trans>Active Apt</Trans></Link></li>
                  <li className="nav-item"> <Link className={this.isPathActive('/advertisement/pendingads') ? 'nav-link active' : 'nav-link'} to="/advertisement/pendingads"><Trans>Unpublished Apt</Trans></Link></li>
                  <li className="nav-item"> <Link className={this.isPathActive('/advertisement/archivedads') ? 'nav-link active' : 'nav-link'} to="/advertisement/archivedads"><Trans>Archived Apt</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>


          <li className={this.isPathActive('/tenders') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.tenderMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('tenderMenuOpen')} data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-hospital"></i>
              </span>
              <span className="menu-title"><Trans>Hospitals</Trans></span>
              <i className='menu-arrow' ></i>
            </div>

            <Collapse in={this.state.tenderMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/tenders/publishedtenders') ? 'nav-link active' : 'nav-link'} to="/tenders/publishedtenders"><Trans>Active Hospitals</Trans></Link></li>
                  <li className="nav-item"> <Link className={this.isPathActive('/tenders/drafttenders') ? 'nav-link active' : 'nav-link'} to="/tenders/drafttenders"><Trans>Closed Hospitals</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          {/* <li className={this.isPathActive('/orders') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.orderMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('orderMenuOpen')} data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-basket"></i>
              </span>
              <span className="menu-title"><Trans>Orders</Trans></span>
              <i className='menu-arrow' ></i>
            </div>

            <Collapse in={this.state.orderMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/orders/activeorders') ? 'nav-link active' : 'nav-link'} to="/orders/activeorders"><Trans>Active Orders</Trans></Link></li>
                  <li className="nav-item"> <Link className={this.isPathActive('/orders/pendingorders') ? 'nav-link active' : 'nav-link'} to="/orders/pendingorders"><Trans>Pending Orders</Trans></Link></li>
                  <li className="nav-item"> <Link className={this.isPathActive('/orders/completedorders') ? 'nav-link active' : 'nav-link'} to="/orders/completedorders"><Trans>Completed Orders</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li> */}

          <li className={this.isPathActive('/partners') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.partnerMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('partnerMenuOpen')} data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-worker"></i>
              </span>
              <span className="menu-title"><Trans>Doctors</Trans></span>
              <i className='menu-arrow' ></i>
            </div>

            <Collapse in={this.state.partnerMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/partners/partnerrequests') ? 'nav-link active' : 'nav-link'} to="/partners/partnerrequests"><Trans>Doctor Requests</Trans></Link></li>
                  <li className="nav-item"> <Link className={this.isPathActive('/partners/allpartners') ? 'nav-link active' : 'nav-link'} to="/partners/allpartners"><Trans>All Doctors</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={this.isPathActive('/purchases') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.purchaseMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('purchaseMenuOpen')} data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-cash"></i>
              </span>
              <span className="menu-title"><Trans>Purchases</Trans></span>
              <i className='menu-arrow' ></i>
            </div>

            <Collapse in={this.state.purchaseMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/purchases/adpurchases') ? 'nav-link active' : 'nav-link'} to="/purchases/adpurchases"><Trans>Apt Purchases</Trans></Link></li>
                  <li className="nav-item"> <Link className={this.isPathActive('/purchases/subscriptions') ? 'nav-link active' : 'nav-link'} to="/purchases/subscriptions"><Trans>Subscriptions</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={this.isPathActive('/subscribers') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.subscriberMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('subscriberMenuOpen')} data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-wallet-membership"></i>
              </span>
              <span className="menu-title"><Trans>Subscribers</Trans></span>
              <i className='menu-arrow' ></i>
            </div>

            <Collapse in={this.state.subscriberMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/subscribers/allsubscribers') ? 'nav-link active' : 'nav-link'} to="/subscribers/allsubscribers"><Trans>All Subscribers</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={this.isPathActive('/subscription-packages') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.packageMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('packageMenuOpen')} data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-package"></i>
              </span>
              <span className="menu-title"><Trans>Packages</Trans></span>
              <i className='menu-arrow' ></i>
            </div>

            <Collapse in={this.state.packageMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/subscription-packages/packages') ? 'nav-link active' : 'nav-link'} to="/subscription-packages/packages"><Trans>Packages</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>

          <li className={this.isPathActive('/payouts') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.payoutMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('payoutMenuOpen')} data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-bank"></i>
              </span>
              <span className="menu-title"><Trans>Payouts</Trans></span>
              <i className='menu-arrow' ></i>
            </div>

            <Collapse in={this.state.payoutMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/payouts/payoutspartner') ? 'nav-link active' : 'nav-link'} to="/payouts/payoutspartner"><Trans>Docotr Payouts</Trans></Link></li>
                  <li className="nav-item"> <Link className={this.isPathActive('/payouts/payoutsseller') ? 'nav-link active' : 'nav-link'} to="/payouts/payoutsseller"><Trans>Hospital Payouts</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li>


          <li className={this.isPathActive('/users') ? 'nav-item menu-items active' : 'nav-item menu-items'}>
            <div className={this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('userPagesMenuOpen')} data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-security"></i>
              </span>
              <span className="menu-title"><Trans>Users</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={this.isPathActive('/users/allusers') ? 'nav-link active' : 'nav-link'} to="/users/allusers"><Trans>All Users</Trans></Link></li>

                  {/* <li className="nav-item"> <Link className={this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link'} to="/user-pages/login-1"><Trans>Login</Trans></Link></li> */}
                  {/* <li className="nav-item"> <Link className={this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link'} to="/user-pages/register-1"><Trans>Register</Trans></Link></li> */}
                </ul>
              </div>
            </Collapse>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>More</Trans></span>
          </li>

          <li className="nav-item menu-items">
            <Link className="nav-link" to="/" rel="noopener noreferrer">
              <span className="menu-icon">
                <i className="mdi mdi-headset"></i>
              </span>
              <span className="menu-title"><Trans>Support Tickets</Trans></span>
            </Link>
          </li>
          <li className="nav-item menu-items">
            <Link className="nav-link" to="/" rel="noopener noreferrer">
              <span className="menu-icon">
                <i className="mdi mdi-settings"></i>
              </span>
              <span className="menu-title"><Trans>Settings</Trans></span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);