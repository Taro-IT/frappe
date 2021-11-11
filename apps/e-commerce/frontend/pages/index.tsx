import { Banner, EcommerceLayout, withUserAgent } from '@frappe/common/design-system';

const HomePage = () => (
  <div>
    <Banner image={'https://wallpaperstock.net/cute-cat-wallpapers_34549_1920x1200.jpg'}/>
    <div className="flex flex-row justify-around ">
      <ul className="flex flex-col justify-evenly">
          <li>
            {/*logo */}
            ENVÍO A DOMICILIO.
          </li>
          <li>
            {/*logo */}
            ATENCIÓN A CLIENTES.
          </li>
          <li> 
            {/*logo */}
            CUIDANDO TU ECONOMÍA
          </li>
          <li> 
            {/*logo */}
            CONVIÉRTETE EN SOCIO
          </li>
        </ul>
      <div>
        <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__340.jpg" />
      </div>
    </div>
  </div>
)

HomePage.Layout = EcommerceLayout;

export default withUserAgent(HomePage);
