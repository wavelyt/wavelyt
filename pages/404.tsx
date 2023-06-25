import { Page } from "@/components/Page";
import type { NextPage } from "next";
import {FixWidth} from "@/components/FixWidth";

const Custom404: NextPage = () => {
  return (<FixWidth>
    <Page title="404 !!" metaDescription="Page not found">
      <div className="my-5">Page not found</div>
    </Page>
  </FixWidth>);
};

export default Custom404;
