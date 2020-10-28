import React from "react";
import { Button, Col, Modal, Row } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";

import { Container, Title } from "./style";
import baseURL from "../../../utils/baseUrl";
import { successNotification, failNotification } from "../../notifications";

const { confirm } = Modal;

const Management = ({ user }) => {
  const deletePostConfirm = (userId) => {
    return confirm({
      title: "Deactivate Account",
      icon: <ExclamationCircleOutlined />,
      content:
        "Are you sure you want to deactivate your account? This action cannot be undone.",
      okText: "Deactivate",
      okButtonProps: {
        danger: true,
      },
      onOk() {
        return (async function () {
          await handleDeleteAccount(userId);
          //logout user
        })();
      },
      onCancel() {},
    });
  };

  const handleDeleteAccount = async (userId) => {
    try {
      const url = `${baseURL}/api/auth/deleteAccount/${userId}`;
      await axios.delete(url);
      successNotification(
        "Account Deactivated",
        "Your account has successfully been deleted",
        4.5
      );
    } catch (err) {
      failNotification(
        "Uhh Ohh...",
        "Something went wrong. We couldn't deactivate your account",
        4.5
      );
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={1} sm={1} md={3} lg={5} />
        <Title>Management</Title>
      </Row>

      <Row gutter={[8, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={14} sm={10} md={8} lg={6}>
          Subscribe to Newsletter:
        </Col>
        <Col xs={6} sm={10} md={8} lg={6}>
          <Button>Subscribe</Button>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col xs={2} sm={2} md={4} lg={6} />
        <Col xs={14} sm={10} md={8} lg={6}>
          Deactivate My Account:
        </Col>
        <Col xs={6} sm={10} md={8} lg={6}>
          <Button type="danger" onClick={() => deletePostConfirm(user._id)}>
            Deactivate
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Management;
