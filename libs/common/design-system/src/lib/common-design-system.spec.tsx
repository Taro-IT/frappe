import { render } from '@testing-library/react';

import CommonDesignSystem from './common-design-system';

describe('CommonDesignSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonDesignSystem />);
    expect(baseElement).toBeTruthy();
  });
});
