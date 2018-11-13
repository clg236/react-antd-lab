/////////////////////////////////////////////////////////////////////////
// Most of the code comes from Ant Design's Website                    //
//                                                                     //
// See https://ant.design/components/form/                             //
/////////////////////////////////////////////////////////////////////////


import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
	  // We only pass the values to the callback function when there is no error
      if (!err) {
	    this.props.onSubmit(values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name');
    const phoneError = isFieldTouched('phone') && getFieldError('phone');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
	    { /* Our name field */ }
        <FormItem
          validateStatus={nameError ? 'error' : ''}
          help={nameError || ''}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your name!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name" />
          )}
        </FormItem>

	    { /* Our phone field */ }
        <FormItem
          validateStatus={phoneError ? 'error' : ''}
          help={phoneError || ''}
        >
		  { /* We only add the required rule, will you be able to add another rule? For example, phone? */ }
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone!' }],
          })(
            <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="mobile" />
          )}
        </FormItem>

	    { /* The submit button */ }
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
		    Submit!
          </Button>
        </FormItem>

      </Form>
    );
  }
}


export default Form.create()(HorizontalForm);
