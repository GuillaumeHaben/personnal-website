import React from 'react';
import DocumentTitle from 'react-document-title';
import {prefixLink} from 'gatsby-helpers';
import {config} from 'config';

const BUILD_TIME = new Date().getTime();

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render() {
    const {body, route} = this.props;
    const title = DocumentTitle.rewind();
    const font = <link href='https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,700&subset=latin,cyrillic'
                       rel='stylesheet' type='text/css'/>;
    let css, js, ga;
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={ {__html: require('!raw!./public/styles.css')} }/>;
    }

    if ( process.env.NODE_ENV !== 'production' || config.buildSPA ) {
      js =  <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) }/>;
    } else {
      ga = <script dangerouslySetInnerHTML={ {__html: require('!raw!./static/ga-snippet.js').replace('UA-XXXXX-Y', config.googleAnalyticsId)} }></script>;
    }

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0"/>
        <title>
          { title }
        </title>
        { font }
        { css }
      </head>
      <body>
      <div id="react-mount" dangerouslySetInnerHTML={ {__html: this.props.body} }/>
      { js }
      { ga }
      <script dangerouslySetInnerHTML={{__html: `
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-83176608-1', 'auto');
            ga('send', 'pageview');`
          }}
        />
      </body>
      </html>
    )
  },
});
