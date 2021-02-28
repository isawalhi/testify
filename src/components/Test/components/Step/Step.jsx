import React, { useCallback, useState } from 'react';

import Card from 'antd/es/card';
import Form from 'antd/es/form';
// import Input from 'antd/es/input';
import Button from 'antd/es/button';
// import Select from 'antd/es/select';

import CopyOutlined from '@ant-design/icons/CopyOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import UpCircleOutlined from '@ant-design/icons/UpCircleOutlined';
import DownCircleOutlined from '@ant-design/icons/DownCircleOutlined';

import FormBuilder from 'antd-form-builder';

import styles from './Step.module.scss';

const clickFromMeta = {
  columns: 4,
  formItemLayout: null, // Must set this for inline layout
  fields: [
    {
      key: 'clickType',
      label: 'Click Type',
      widget: 'radio-group',
      options: ['Single', 'Double', 'Right Click'],
      initialValue: 'Single',
    },
    {
      key: 'otherFruit',
    },
    {
      key: 'otherFruit1',
      label: 'Other1',
    },
  ],
};

const Step = () => {
  const [form] = Form.useForm();
  const forceUpdate = FormBuilder.useForceUpdate();
  const [stepType, setStepType] = useState('Click');

  const handleFinish = useCallback((values) => {
    console.log('Submit: ', values);
  }, []);

  const selectMeta = {
    columns: 4,
    formItemLayout: null, // Must set this for inline layout
    fields: [
      {
        key: 'clickType',
        widget: 'select',
        spanCol: 1,
        onChange: setStepType,
        options: ['Click', 'Assign', 'Test'],
        initialValue: 'Click',
      },
    ],
  };
  // const meta = {
  //   columns: 4,
  //   formItemLayout: null, // Must set this for inline layout
  //   fields: [
  //     {
  //       key: 'stepType',
  //       widget: 'select',
  //       options: ['Click', 'Press', 'Enter'],
  //       colSpan: 4,
  //       initialValue: 'Click',
  //     },
  //   ],
  // };

  let meta;
  // const stepType = form.getFieldValue('stepType');
  switch (stepType) {
    case 'Click':
      meta = clickFromMeta;
      break;
    default:
      break;
  }

  return (
    <Card
      className={styles.stepCard}
      actions={[
        <Button size="small" type="link" icon={<DownCircleOutlined />}>
          Add below
        </Button>,
        <Button size="small" type="link" icon={<UpCircleOutlined />}>
          Add above
        </Button>,
        <Button size="small" type="link" icon={<DeleteOutlined />}>
          Delete
        </Button>,
        <Button size="small" type="link" icon={<CopyOutlined />}>
          Duplicate
        </Button>,
      ]}
    >
      {/* <Select />
    <Input placeholder="Element CSS or XPath selector" /> */}
      <Form onFinish={handleFinish} form={form} onValuesChange={forceUpdate}>
        <FormBuilder meta={selectMeta} form={form} />
        <FormBuilder meta={meta} form={form} />
        <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Step;
