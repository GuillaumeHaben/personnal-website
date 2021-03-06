import React from 'react'
import DocumentTitle from 'react-document-title'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import SiteProjects from '../components/SiteProjects'
import SiteBlog from '../components/SiteBlog'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout
        /* ----- Simple Page Layout ----- */
        if (layout == 'page') {
            template = <SitePage {...this.props}/>
        }
        /* ----- Blog Main Layout ----- */
        if (layout == 'blog') {
            template = <SiteBlog {...this.props}/>
        }
        /* ----- Blog Post Layout ----- */
        if (layout == 'post') {
            template = <SitePost {...this.props}/>
        }
        /* ----- Projects Main Layout ----- */
        if (layout == 'projects') {
            template = <SiteProjects {...this.props}/>
        }


        return (
            <DocumentTitle title={ `${post.title} - ${config.siteTitle}` }>
              <div>
                { template }
              </div>
            </DocumentTitle>
            );
    }
}

MarkdownWrapper.propTypes = {
    route: React.PropTypes.object,
}

export default MarkdownWrapper
