import DynamicTable from "components/DynamicTable";
import PageScaffold from "components/PageScaffold";
import { PageTitles } from "utils/paths";
import { Info } from "components/Info";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "./data";
import { columns } from "./helpers";

const Index = () => {
  const [pageProps, setPageProps] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <PageScaffold title={PageTitles.upNext}>
      <Info>View all orders made by you</Info>
      <Box mt={8}>
        <DynamicTable
          setPageProps={setPageProps}
          pageProps={pageProps}
          totalCount={data?.totalElements}
          columns={columns}
          data={data ?? []}
          totalPages={data?.totalPages}
        />
      </Box>
    </PageScaffold>
  );
};

export default Index;
