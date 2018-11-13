import React, { Component } from 'react';
import { Table, Row, Col } from 'antd';
import Layout from 'antd/lib/layout';
import Header from 'antd/lib/layout';
import Content from 'antd/lib/layout';
import './App.css';

import HorizontalForm from './Components/Form.js';

// These are the columns that we will use in the table
const COLUMNS = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Phone',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
	  { /* The Delete button does nothing for now. Will you be able to make it working? */ }
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];


class App extends Component {
  constructor(props) {
    super(props);

	// initially, we have no data
    this.state = { data: [] };
  }

  // add a new student
  addNewStudent = (values) => {
    // we get the data back
    let data = this.state.data;

	// push the new item to the end of the array
	data.push(values);

    // we update the state now
    this.setState({
      data: data
	});
  }

  render() {
    return (
      <Layout>
        <Header><h1>React Ant Design Demo</h1></Header>
        <Layout>
          <Content>
			<Row>
              <Col span={12} offset={6}>
			    { /* Here, we pass the addNewStudent method to the HorizontalForm Component */ }
				<HorizontalForm onSubmit={this.addNewStudent} />

				{ /* Our data table */ }
				<Table columns={COLUMNS} dataSource={this.state.data} />
			  </Col>
			</Row>
		  </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
