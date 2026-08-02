import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor } from 'storybook/test';
import { useRef, useState } from 'react';
import { useEvent, useInstance } from 'jb-core/react';

const meta = {
  title: 'Components/JBCore/React',
  parameters: { layout: 'centered' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const UseEvent: Story = {
  render: () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [events, setEvents] = useState(0);
    useEvent(buttonRef, 'click', () => setEvents((value) => value + 1));

    return (
      <div>
        <button ref={buttonRef} type="button">Dispatch event</button>
        <p>Events received: <output data-testid="event-count">{events}</output></p>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    await userEvent.click(canvasElement.querySelector('button')!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="event-count"]')?.textContent).toBe('1');
    });
  },
};

class Counter {
  value: number;

  constructor(initialValue: number) {
    this.value = initialValue;
  }

  increment() {
    this.value += 1;
  }
}

export const UseInstance: Story = {
  render: () => {
    const counter = useInstance(Counter, [1]);
    const [, refresh] = useState(0);

    return (
      <div>
        <button type="button" onClick={() => { counter.increment(); refresh((value) => value + 1); }}>Increment instance</button>
        <p>Instance value: <output data-testid="instance-value">{counter.value}</output></p>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    await userEvent.click(canvasElement.querySelector('button')!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="instance-value"]')?.textContent).toBe('2');
    });
  },
};
