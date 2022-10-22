import { Box, Container } from "@chakra-ui/react";
import { ReactElement } from "react";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";

const CSharp = () => (
  <Layout>
    <Container>
      <Box>Work in progress</Box>
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
