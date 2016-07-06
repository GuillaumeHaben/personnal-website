import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SitePost from '../components/SitePost'
import SiteSidebar from '../components/SiteSidebar'
import TypeWriter from 'react-typewriter';

class SiteIndex extends React.Component {
    render() {

        return (
            <DocumentTitle title={ config.siteTitle }>
              <div>
                <SiteSidebar {...this.props}/>
                <div className='content'>
                  <div className='main'>
                    <div className='main-inner'>
                      <div className="text">
                        <h2>home:~$&nbsp;
                        <TypeWriter typing={1} minDelay={800} className="oldStyle">whoami</TypeWriter>
                        </h2>
                        <p>Hi, my name is Guillaume. I am currently in my final year of an engineering degree
                        in IT and digital sciences at <a target="_blank" href="http://telecomnancy.univ-lorraine.fr/">
                        TELECOM Nancy</a> in France.</p>
                        <p>I love creating app from scratch, minimalist design and working late at night.
                        Understanding how human relationships works is one of my secret hobbies.</p>
                        <h3>Miscellaneous</h3>
                        <p> I love travelling and paying attention to the simplest things.
                        Taking photos of beautiful moments helps me to remember all of it.</p>
                        <p><a href="https://www.instagram.com/guillaumehaben/" target="_blank">
                        See my collections online.
                        </a></p>
                        <p>Like me, some of you may think that someone's tastes in music can reflect who that person is.
                        &nbsp;<a href="https://play.spotify.com/user/1179350641" target="_blank">I let
                        you <strike>see</strike> listen by yourself.</a></p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DocumentTitle>
        )
    }
}

SiteIndex.propTypes = {
    route: React.PropTypes.object,
}

export default SiteIndex
