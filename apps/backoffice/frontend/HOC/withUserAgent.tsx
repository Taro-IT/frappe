import { Noop } from "../layouts/Noop";

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
      sa: context.req.headers['user-agent']
    }
  };
  FunctionalComponent.Layout = WrappedComponent.Layout ?? Noop;
  return FunctionalComponent;
}