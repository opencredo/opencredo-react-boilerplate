import React from 'react';
import ProfileLayoutHeader from 'containers/ProfileLayoutHeader/ProfileLayoutHeader';
import 'styles/admin.scss';
import styles from './ProfileLayout.scss';
import classNames from 'classnames';
import { Grid, Row, Col } from 'react-bootstrap';
import Sidebar from 'containers/Sidebar/Sidebar';

function ProfileLayout({ children }) {
  const containerClasses = classNames('page-container', 'profile-layout', styles.layout);
  return (
    <div className={containerClasses}>
      <header>
        <ProfileLayoutHeader />
      </header>
      <section id="content">
        <Grid>
          <Row>
            <Col xs={12}>
              <section id="section-title" className={styles['section-title']}>
                <h2 className={styles['section-title-header']}>Settings</h2>
              </section>
            </Col>
          </Row>
          <Row>
            <div className="col-sm-3 sidebar">
              <section id="sidebar" className="box">
                <Sidebar />
              </section>
            </div>
            <Col sm={9}>
              <section className="view-container box">
                {children}
              </section>
            </Col>
          </Row>
        </Grid>

      </section>
    </div>
  );
}

ProfileLayout.propTypes = {
  children: React.PropTypes.element,
};

export default ProfileLayout;
