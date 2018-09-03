import Layout from '../../components/_layout'
import { addTodo } from '../../actions/todo'
import { connect } from 'react-redux'
import { Button } from 'antd'

class Redux extends React.Component {

  render() {
    return (
      <Layout title="redux" description="tes">
        <p>{this.props.Todo}</p>
        <Button onClick={() => this.props.addTodo()}>Increment</Button>
      </Layout >
    )
  }
}

function mapStatetoProps({ Todo }) {
  return { Todo }
}

export default connect(mapStatetoProps, { addTodo })(Redux)