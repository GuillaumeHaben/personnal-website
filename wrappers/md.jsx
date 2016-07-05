import React from 'react'
import DocumentTitle from 'react-document-title'
import SitePost from '../components/SitePost'
import SitePage from '../components/SitePage'
import SiteBlog from '../components/SiteBlog'
import { config } from 'config'

class MarkdownWrapper extends React.Component {
    render() {
        const {route} = this.props
        const post = route.page.data
        let layout, template

        layout = post.layout
        if (layout == 'post') {
          console.log(post);
            template = <SitePost {...this.props}/>
        }
        if (layout == 'blog') {
          console.log(post);
            template = <SiteBlog {...this.props}/>
        }
        if (layout == 'page') {
          console.log(post);
            template = <SitePage {...this.props}/>
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
