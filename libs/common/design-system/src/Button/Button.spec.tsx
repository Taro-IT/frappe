import {fireEvent, render} from "@testing-library/react";
import {Button} from './index';
import {StringMother} from "@frappe/common/test";

describe('Button', () => {
  it('should render a Button', () => {
    const onClick = jest.fn();
    const title = StringMother.random();

    const { getByText } = render(<Button onClick={onClick} title={ title } />);
    const button = getByText(title);

    expect(button).toBeTruthy();

    fireEvent.click(button);
    
    expect(onClick).toHaveBeenCalled();
  });

  it('should run onClick event', () => {
    const onClick = jest.fn();
    const title = StringMother.random();

    const { getByText, } = render(<Button onClick={onClick} title={ title } />);
    const button = getByText(title);

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
})
