import React from 'react';
import { Switch, Form, Input } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

export default function CurrencyForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Currency Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your currency name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Symbol"
        name="symbol"
        rules={[
          {
            required: true,
            message: 'Please input your symbol!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Decimal Separator"
        name="decimal_separator"
        rules={[
          {
            required: true,
            message: 'Please input a decimal separator!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Thousand Separator"
        name="thousand_separator"
        rules={[
          {
            required: true,
            message: 'Please input a thousand separator!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Set as Default Currency"
        name="isDefault"
        valuePropName="checked"
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} />
      </Form.Item>
    </>
  );
}
