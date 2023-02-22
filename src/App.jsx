//React
import { useState } from "react";

//DataTable
import { DataTable } from "@lephenix47/react-datatable";

//Mocked data
import { pagingData } from "./assets/mocks/data-paging.mock";
import { scrollingData } from "./assets/mocks/data-scrolling.mock";

function App() {
  return (
    <div>
      {/* DataTable component      */}
      <DataTable title="Pagination" data={pagingData} filter sort info paging />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <DataTable
        title="Scrolling"
        data={scrollingData}
        filter
        sort
        info
        scroll
        height={400}
      />
    </div>
  );
}

export default App;
