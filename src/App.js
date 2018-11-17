import React, { Component } from 'react';
import { Table, Row, Col } from 'antd';
import Layout from 'antd/lib/layout';
import Header from 'antd/lib/layout';
import Content from 'antd/lib/layout';
import './App.css';
import DataTable from './Components/DataTable';

import InputForm from './Components/InputForm.js';

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
          <Content>
            <Row>
              <Col span={12} offset={6}>
                { /* Here, we pass the addNewStudent method to the HorizontalForm Component */}
                <InputForm onSubmit={this.addNewStudent} />

                { /* Our data table */}
                <DataTable dataSource={this.state.data}/>
              </Col>
            </Row>
          </Content>
      </Layout>
    );
  }
}

export default App;
