import Head from 'next/head'
import Proptypes from 'prop-types'
import Navbar from './Navbar'

class Layout extends React.Component {
  render() {
    return (
      <div role="main">
        <Head>
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
        </Head>
        
        <Navbar />

        {this.props.children}

      </div>
    )
  }
}

Layout.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired
}

export default Layout