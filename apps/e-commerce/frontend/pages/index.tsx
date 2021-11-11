import { Banner, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';

const HomePage = () => (
  <div>
    <Banner image={'https://wallpaperstock.net/cute-cat-wallpapers_34549_1920x1200.jpg'}/>
  </div>
)

HomePage.Layout = EcommerceLayout;

export default withUserAgent(HomePage);
