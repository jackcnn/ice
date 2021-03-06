/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Input, Button, Select, DatePicker, Radio } from '@icedesign/base';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';

const { Option } = Select;
const { Group: RadioGroup } = Radio;

export default class RecommendForm extends Component {
  static displayName = 'RecommendForm';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {
        status: 'borrow',
      },
    };
  }

  formChange = (value) => {
    console.log('value', value);
    this.setState({
      value,
    });
  };

  validateAllFormField = () => {
    this.refs.form.validateAll((errors, values) => {
      console.log('errors', errors, 'values', values);
    });
  };

  render() {
    return (
      <IceContainer style={styles.container}>
        <div style={styles.title}>图书借阅</div>
        <IceFormBinderWrapper
          value={this.state.value}
          onChange={this.formChange}
          ref="form"
        >
          <div style={styles.formContent}>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>图书名称</div>
              <IceFormBinder>
                <Select
                  placeholder="请选择"
                  multiple
                  name="bookName"
                  size="large"
                  style={{ width: '400px' }}
                >
                  <Option value="book1">史蒂夫·乔布斯传</Option>
                  <Option value="book2">大数据供应链</Option>
                  <Option value="book3">深度学习</Option>
                  <Option value="book4">裂变</Option>
                  <Option value="book5">归属感</Option>
                  <Option value="book6">沉默的大多数</Option>
                </Select>
              </IceFormBinder>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>借阅/归还</div>
              <IceFormBinder>
                <RadioGroup
                  name="status"
                  dataSource={[
                    {
                      value: 'borrow',
                      label: '借阅',
                    },
                    {
                      value: 'return',
                      label: '归还',
                    },
                  ]}
                />
              </IceFormBinder>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>借阅证</div>
              <IceFormBinder>
                <Input
                  placeholder="请输入借阅证号码"
                  name="idNumber"
                  size="large"
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
            </div>
            <div style={styles.formItem}>
              <div style={styles.formLabel}>借阅时间</div>
              <IceFormBinder>
                <DatePicker
                  name="time"
                  size="large"
                  style={{ width: '400px' }}
                />
              </IceFormBinder>
            </div>
            <Button
              type="primary"
              size="large"
              style={styles.submitButton}
              onClick={this.validateAllFormField}
            >
              提 交
            </Button>
          </div>
        </IceFormBinderWrapper>
      </IceContainer>
    );
  }
}

const styles = {
  title: {
    marginBottom: '30px',
    fontSize: '18px',
    fontWeight: '500',
    color: 'rgba(0, 0, 0,.85)',
  },
  formContent: {
    marginLeft: '30px',
  },
  formItem: {
    marginBottom: '25px',
    display: 'flex',
    alignItems: 'center',
  },
  formLabel: {
    width: '70px',
    marginRight: '15px',
    textAlign: 'right',
  },
  formError: {
    marginLeft: '10px',
  },
  submitButton: {
    marginLeft: '85px',
  },
};
