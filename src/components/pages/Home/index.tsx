import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { CarOutlined, DollarOutlined, WechatOutlined } from "@ant-design/icons";
import Image from "next/image";

const HomePage = () => {
  const { Title, Paragraph } = Typography;

  return (
    <div>
      <section className="bg-gray-100 head-img text-left text-black">
        <Row className="xl:py-28 py-10 container px-10">
          <Col xl={24} className="">
            <p className=" xl:text-5xl text-2xl pt-2 py-5 font-extrabold font-Nunito">
              Buy Tailor made clothes
            </p>

            <p className="xl:text-7xl text-4xl py-5 font-extrabold font-Nunito">
              Buy &#38; Customize <br /> native clothes <br /> now
            </p>

            <div className="py-5">
              <Button
                size="large"
                type="primary"
                className="px-20 font-Pacifico font-extrabold text-blue"
              >
                Shop Now
              </Button>
            </div>
          </Col>
        </Row>
      </section>

      <section className="text-center">
        <Row className="container mx-auto py-10" gutter={[32, 32]}>
          <Col xl={8} sm={24} xs={24}>
            <CarOutlined className="text-9xl" />
            <Title level={1} className="text-3xl font-Nunito">
              Swift shipping
            </Title>

            <Paragraph className="font-Nunito text-lg">
              We will deliver to your doorstep anywhere in Nigeria as quickly as
              possible
            </Paragraph>
          </Col>

          <Col xl={8} sm={24} xs={24}>
            <DollarOutlined className="text-9xl" />
            <Title level={1} className="text-3xl font-Nunito">
              100% Money back
            </Title>

            <Paragraph className="font-Nunito text-lg">
              We will deliver to your doorstep anywhere in Nigeria as quickly as
              possible
            </Paragraph>
          </Col>

          <Col xl={8} sm={24} xs={24}>
            <WechatOutlined className="text-9xl" />
            <Title level={1} className="text-3xl font-Nunito">
              Online support 24/7
            </Title>

            <Paragraph className="font-Nunito text-lg">
              We will deliver to your doorstep anywhere in Nigeria as quickly as
              possible
            </Paragraph>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default HomePage;
