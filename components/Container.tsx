import PropTypes from "prop-types";

import Head from "next/head";

import NavBar from "./NavBar";
import MainSection from "./MainSection";
import Footer from "./Footer";
import { FunctionComponent } from "react";

const containerPropTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

type ContainerProps = PropTypes.InferProps<typeof containerPropTypes>;

const Container: FunctionComponent<ContainerProps> = (containerProps) => {
  const { children } = containerProps;

  const meta = {
    title: "Chhay Bunsy – Personal Blog",
    description: `Next JS with Tailwind CSS`,
    type: "website",
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Chhay Bunsy" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:site" content="@chhaybunsy" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <div className="flex flex-col justify-center px-8">
        <NavBar />
        <MainSection>{children}</MainSection>
        <Footer />
      </div>
    </div>
  );
};

Container.propTypes = containerPropTypes;

export default Container;
