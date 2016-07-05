import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
    render() {

        return (
            <div className='blog-social'>
                  <a href={ config.siteTwitterUrl } target="_blank"><i className='fa fa-twitter'></i></a>&nbsp;
                  <a href={ config.siteGithubUrl } target="_blank"><i className='fa fa-github-alt'></i></a>&nbsp;
                  <a href={ config.siteLinkedinUrl } target="_blank"><i className='fa fa-linkedin-square'></i></a>&nbsp;
                  <a href={ config.siteEmailUrl } target="_blank"><i className='fa fa-envelope-o'></i></a>

            </div>
            );
    }
}

export default SiteLinks
