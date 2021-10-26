import { EcommerceLayout } from '@frappe/common/design-system';
import styles from '../../styles/shop.module.scss';
import { ShopSidebar } from '@frappe/product/ui';

const ShopPage = () => (
  <div className={ styles.wrapper }>
    <ShopSidebar className={ styles.wrapperSidebar } />

    <div className={ styles.wrapperContent }>

    </div>
  </div>
)

ShopPage.Layout = EcommerceLayout;

export default ShopPage;
