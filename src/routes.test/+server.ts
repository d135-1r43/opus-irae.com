import { render } from '@testing-library/svelte';
import Nav from '$lib/components/nav-main.svelte';

it('has the heading text for "Countries"', () => {
  const { getByText } = render(Nav);

  expect(getByText('daisyUI')).toBeTruthy();
});
