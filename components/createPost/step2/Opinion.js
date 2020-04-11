import React from 'react';
import { Col, Form, Input, Row, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SET_INPUT } from '../../../actions/types';
import { QuestionCircleOutlined } from '@ant-design/icons';

const Opinion = () => {
  const dispatch = useDispatch();
  const { waveSize, driveSpeed, paddlePower, movability } = useSelector(
    state => state.createpost
  );

  function handleInputChange(name, value) {
    const payload = { name: name, value: value };
    dispatch({ type: SET_INPUT, payload: payload });
  }

  return (
    <Form>
      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Wave Size:
          </h3>
        </Col>
        <Col xs={8} sm={7} md={6}>
          <Input
            placeholder="4-7"
            size="default"
            suffix="ft."
            value={waveSize}
            onChange={event => handleNumber('waveSize', event.target.value)}
          />
        </Col>
        <Col xs={8} sm={9}>
          <Tooltip
            placement="topLeft"
            title={'What size waves does your board perform well in?'}
          >
            <QuestionCircleOutlined
              style={{ padding: '5px', color: '#4878a9' }}
            />
          </Tooltip>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Drive & Speed:
          </h3>
        </Col>
        <Col xs={8} sm={7} md={6}>
          <Input
            placeholder="4"
            size="default"
            suffix="/5"
            value={driveSpeed}
            onChange={event => handleNumber('driveSpeed', event.target.value)}
          />
        </Col>
        <Col xs={8} sm={9}>
          <Tooltip
            placement="topLeft"
            title={
              'How well does your board accelerate and maintain speed through turns?'
            }
          >
            <QuestionCircleOutlined
              style={{ padding: '5px', color: '#4878a9' }}
            />
          </Tooltip>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Paddle Power:
          </h3>
        </Col>
        <Col xs={8} sm={7} md={6}>
          <Input
            placeholder="5"
            size="default"
            suffix="/5"
            value={paddlePower}
            onChange={event => handleNumber('paddlePower', event.target.value)}
          />
        </Col>
        <Col xs={8} sm={9}>
          <Tooltip
            placement="topLeft"
            title={'How easy is your board to paddle?'}
          >
            <QuestionCircleOutlined
              style={{ padding: '5px', color: '#4878a9' }}
            />
          </Tooltip>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={8} sm={8} md={8} lg={8}>
          <h3 style={{ textAlign: 'right' }} style={{ textAlign: 'right' }}>
            Paddle Power:
          </h3>
        </Col>
        <Col xs={8} sm={7} md={6}>
          <Input
            placeholder="3"
            size="default"
            suffix="/5"
            value={movability}
            onChange={event => handleNumber('movability', event.target.value)}
          />
        </Col>
        <Col xs={8} sm={9}>
          <Tooltip
            placement="topLeft"
            title={'How easy does your board move in the water?'}
          >
            <QuestionCircleOutlined
              style={{ padding: '5px', color: '#4878a9' }}
            />
          </Tooltip>
        </Col>
      </Row>
    </Form>
  );
};

export default Opinion;
