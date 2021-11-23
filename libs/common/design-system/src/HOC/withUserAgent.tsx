// @ts-nocheck
import { Noop } from "../layout/Noop";

export const withUserAgent = WrappedComponent => {
  const FunctionalComponent = ({children, ...props}) => {
    return (
      <WrappedComponent {...props}>
        {children}
      </WrappedComponent>
    );
  };
  FunctionalComponent.getInitialProps = async (context) => {
    const props = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(context)
    return {
      ...props,
      userAgent: context.req.headers['user-agent']
    }
  };
  FunctionalComponent.Layout = WrappedComponent.Layout ?? Noop;
  return FunctionalComponent;
}