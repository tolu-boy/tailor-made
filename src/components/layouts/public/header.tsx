import React, { useState } from "react";
import Image from "next/image";
import logo from "@public/logo.svg";
import Link from "next/link";
import { Typography, Button, Drawer } from "antd";

import {
  ShoppingCartOutlined,
  HeartOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Paragraph from "antd/es/skeleton/Paragraph";

const Header = () => {
  const { Link: AntLink, Paragraph } = Typography;
  const [show, setShow] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  const changeNav = () => {
    setShow(!show);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setShow(!show);
  };

  return (
    <nav>
      <div className=" lg:flex lg:flex-wrap hidden">
        <div className="logo mr-20 pt-3">
          <Image src={logo} alt="logo" height={100} />
        </div>

        <ul className="flex list-none pt-5 ">
          <li className="mr-12">
            <Link href="/about" className="no-underline">
              <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                Home
              </Paragraph>
            </Link>
          </li>
          <li className="mr-12">
            <Link href="/about" className="no-underline">
              <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                Contact
              </Paragraph>
            </Link>
          </li>

          <li className="mr-12">
            <Link href="/about" className="no-underline">
              <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                Native
              </Paragraph>
            </Link>
          </li>

          <li className="mr-12">
            <Link href="/about" className="no-underline">
              <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                Customize
              </Paragraph>
            </Link>
          </li>
          <li className="mr-12">
            <Link href="/about" className="no-underline">
              <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                Shop
              </Paragraph>
            </Link>
          </li>

          <li className="mr-12">
            <Link href="/about" className="no-underline">
              <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                Login
              </Paragraph>
            </Link>
          </li>

          <li className="mr-12">
            <ShoppingCartOutlined style={{ fontSize: 40 }} />
          </li>

          <li className="mr-12">
            <HeartOutlined style={{ fontSize: 40 }} />
          </li>

          <div className="logo mr-6">
            <Button type="primary" size="large">
              Create New Account
            </Button>
          </div>
        </ul>
      </div>

      <div className="bg-white py-5 px-5 lg:hidden flex justify-between ">
        {show ? (
          <MenuOutlined
            className="text-4xl"
            onClick={() => {
              showDrawer();
              changeNav();
            }}
          />
        ) : (
          <div>
            <CloseOutlined className="text-4xl" onClick={changeNav} />
          </div>
        )}

        <Drawer
          // title="Basic Drawer"
          placement="left"
          onClose={onClose}
          open={open}
        >
          <ul className="list-none  ">
            <li className="mr-12">
              <Link href="/about" className="no-underline">
                <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                  Home
                </Paragraph>
              </Link>
            </li>
            <li className="mr-12">
              <Link href="/about" className="no-underline">
                <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                  Contact
                </Paragraph>
              </Link>
            </li>

            <li className="mr-12">
              <Link href="/about" className="no-underline">
                <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                  Native
                </Paragraph>
              </Link>
            </li>

            <li className="mr-12">
              <Link href="/about" className="no-underline">
                <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                  Customize
                </Paragraph>
              </Link>
            </li>
            <li className="mr-12">
              <Link href="/about" className="no-underline">
                <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                  Shop
                </Paragraph>
              </Link>
            </li>

            <li className="mr-12">
              <Link href="/about" className="no-underline">
                <Paragraph className="text-black font-Rochester text-3xl font-extrabold">
                  Login
                </Paragraph>
              </Link>
            </li>

            <div className="logo mr-6">
              <Button type="primary" size="large">
                Create New Account
              </Button>
            </div>
          </ul>
        </Drawer>

        <div className="flex space-x-4">
          <HeartOutlined className="text-4xl" />
          <ShoppingCartOutlined className="text-4xl " />
        </div>
      </div>
    </nav>
  );
};

export default Header;
