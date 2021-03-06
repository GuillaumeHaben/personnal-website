import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment'
import duration from 'moment-duration-format'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import SitePost from '../SitePost'
import SiteSidebar from '../SiteSidebar'

class SiteBlog extends React.Component {
    render() {
        const pageLinks = []
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')
                const body = access(page, 'data.body')
                const readSeconds = (access(page, 'data.body').split(' ').length / 110) * 60
                const readTime = ' ' + moment.duration(readSeconds, 'seconds').format('m [min]')

                pageLinks.push(
                    <div key={pageLinks.length} className='blog-post'>
                      <time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
                        { moment(datePublished).format('MMMM YYYY') }
                      </time>
                      <span style={ {    padding: '5px'} }></span>
                      <span className='blog-category'>{ category }</span>
                      <h2><Link style={ {    borderBottom: 'none',} } to={ prefixLink(page.path) } > { title } </Link></h2>
                      <div className="text"><p dangerouslySetInnerHTML={ {    __html: description} } /></div>
                      <Link className='readmore' to={ prefixLink(page.path) }> Read it now</Link>
                      <span className="estimatedTime"> - <i className="fa fa-clock-o"></i>
                      <em> { readTime }
                      </em></span>

                    </div>
                )
            }
        })

        return (
            <DocumentTitle key={ config.siteTitle } title={ config.siteTitle }>
              <div>
                <SiteSidebar {...this.props}/>
                <div className='content'>
                  <div className='main'>
                    <div className='main-inner'>
                      { pageLinks }
                    </div>
                  </div>
                </div>
              </div>
            </DocumentTitle>
        )
    }
}

SiteBlog.propTypes = {
    route: React.PropTypes.object,
}

export default SiteBlog
