import React from 'react';
import { Table, Divider, Tag } from 'antd';

const COLUMNS = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Mobile',
  dataIndex: 'mobile',
  key: 'mobile',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  mobile: 12345,
}, {
  key: '2',
  name: 'Jim Green',
  mobile: 34567,
}, {
  key: '3',
  name: 'Joe Black',
  mobile: 456789,
}];

class DataTable extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Table columns={COLUMNS} dataSource={this.props.dataSource} />
         );
    }
}
 
export default DataTable;