import { EcommerceLayout, withUserAgent } from '@frappe/common/design-system';

const HomePage = () => (
  <div>
    Home Page
  </div>
)

HomePage.Layout = EcommerceLayout;

export default withUserAgent(HomePage);
