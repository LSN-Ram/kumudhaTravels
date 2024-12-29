import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Typography,
  Row,
  Col,
} from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

const { Title } = Typography;

const TripContactForm = () => {
  const [form] = Form.useForm();
  const [message, setMessage] = useState("");

  const onFinish = (values) => {
    const {
      name,
      email,
      contact,
      destination,
      fromDate,
      toDate,
      adultCount,
      childrenCount,
      details,
    } = values;
    const whatsappMessage = `Hello Kumudha Travels!%0A%0AName: ${name}%0AEmail: ${email}%0AContact: ${contact}%0ADestination: ${destination}%0AFrom Date: ${fromDate}%0ATo Date: ${toDate}%0AAdults: ${adultCount}%0AChildren: ${childrenCount}%0ADetails: ${details}`;

    const whatsappUrl = `https://wa.me/917388886627?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div style={{ padding: "50px" }} id="contact">
      <Title level={2} style={{ textAlign: "center" }}>
        Trip Contact Form
      </Title>
      <Row justify="center">
        <Col xs={24} sm={18} md={12}>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
              adultCount: 1,
              childrenCount: 0,
            }}
            style={{}}
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email ID"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="contact"
              label="Contact Number"
              rules={[
                { required: true, message: "Please enter your contact number" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item
              name="destination"
              label="Destination"
              rules={[
                { required: true, message: "Please select a destination" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item label="Trip Dates">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="fromDate"
                    rules={[
                      {
                        required: true,
                        message: "Please select the starting date",
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <DatePicker size="large" style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="toDate"
                    rules={[
                      {
                        required: true,
                        message: "Please select the ending date",
                      },
                    ]}
                    style={{ marginBottom: 0 }}
                  >
                    <DatePicker size="large" style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label="Number of People">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item name="adultCount" style={{ marginBottom: 0 }}>
                    <Select size="large" defaultValue={1}>
                      {[...Array(5)].map((_, index) => (
                        <Select.Option key={index} value={index + 1}>
                          {index + 1} Adult{index + 1 > 1 && "s"}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="childrenCount" style={{ marginBottom: 0 }}>
                    <Select size="large" defaultValue={0}>
                      {[...Array(5)].map((_, index) => (
                        <Select.Option key={index} value={index}>
                          {index} Child{index > 1 && "ren"}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item
              name="details"
              label="Additional Details"
              rules={[{ required: false }]}
            >
              <Input.TextArea
                size="large"
                rows={4}
                placeholder="Enter any other details here"
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                style={{ width: "100%", background: "#2e186a", color: "#fff" }}
                icon={<WhatsAppOutlined />}
              >
                Send via WhatsApp
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default TripContactForm;
