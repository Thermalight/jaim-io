import { Box, Container } from "@chakra-ui/react";
import { ReactElement } from "react";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import NoContent from "../nocontent";

const CSharp = () => (
  <Layout>
    <Container>
      <NoContent />
    </Container>
  </Layout>
);

CSharp.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default CSharp;
