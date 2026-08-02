import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor } from 'storybook/test';
import { useEffect, useRef, useState } from 'react';
import {
  createFocusEvent,
  createInputEvent,
  createKeyboardEvent,
  createMouseEvent,
  injectCss,
  listenAndSilentEvent,
  uniqueId,
} from 'jb-core';

const meta = {
  title: 'Components/JBCore',
  parameters: { layout: 'centered' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListenAndSilentEvent: Story = {
  render: () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [intercepted, setIntercepted] = useState(0);
    const [bubbled, setBubbled] = useState(0);

    useEffect(() => {
      if (!buttonRef.current) return;
      listenAndSilentEvent(buttonRef.current, 'click', () => {
        setIntercepted((value) => value + 1);
      });
    }, []);

    return (
      <div onClick={() => setBubbled((value) => value + 1)}>
        <button ref={buttonRef} type="button">Dispatch click</button>
        <p>Intercepted: <output data-testid="intercepted-count">{intercepted}</output></p>
        <p>Outer handler: <output data-testid="bubbled-count">{bubbled}</output></p>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button');
    expect(button).toBeTruthy();
    await userEvent.click(button!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="intercepted-count"]')?.textContent).toBe('1');
      expect(canvasElement.querySelector('[data-testid="bubbled-count"]')?.textContent).toBe('0');
    });
  },
};

export const CreateEvents: Story = {
  render: () => {
    const [summary, setSummary] = useState('No derived events created yet.');

    const createDerivedEvents = () => {
      const mouseSource = new MouseEvent('click', { bubbles: true, clientX: 12, clientY: 24 });
      const keyboardSource = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter' });
      const inputSource = new InputEvent('input', { data: 'a', inputType: 'insertText' });
      const focusSource = new FocusEvent('focus');
      const mouse = createMouseEvent('demo-click', mouseSource, { detail: 7 });
      const keyboard = createKeyboardEvent('demo-keydown', keyboardSource, { key: ' ' });
      const input = createInputEvent('demo-input', inputSource, { data: 'b' });
      const focus = createFocusEvent('demo-focus', focusSource, { bubbles: true });
      setSummary(`${mouse.type} (${mouse.detail}), ${keyboard.type} (${keyboard.key}), ${input.type} (${input.data}), ${focus.type} (bubbles: ${focus.bubbles})`);
    };

    return (
      <div>
        <button type="button" onClick={createDerivedEvents}>Create derived events</button>
        <p data-testid="event-summary">{summary}</p>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    await userEvent.click(canvasElement.querySelector('button')!);
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="event-summary"]')?.textContent).toContain('demo-click (7)');
      expect(canvasElement.querySelector('[data-testid="event-summary"]')?.textContent).toContain('demo-keydown ( )');
      expect(canvasElement.querySelector('[data-testid="event-summary"]')?.textContent).toContain('demo-input (b)');
      expect(canvasElement.querySelector('[data-testid="event-summary"]')?.textContent).toContain('demo-focus (bubbles: true)');
    });
  },
};

export const InjectStyle: Story = {
  render: () => {
    const [status, setStatus] = useState('Injecting stylesheet…');

    useEffect(() => {
      const stylesheet = injectCss('.jb-core-style-demo { color: rgb(0, 102, 204); }');
      setStatus(`Injected ${stylesheet.cssRules.length} CSS rule`);
    }, []);

    return (
      <div>
        <p className="jb-core-style-demo">This text uses the injected stylesheet.</p>
        <output data-testid="style-status">{status}</output>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(canvasElement.querySelector('[data-testid="style-status"]')?.textContent).toBe('Injected 1 CSS rule');
    });
  },
};

export const UniqueId: Story = {
  render: () => {
    const [ids, setIds] = useState<string[]>([]);
    return (
      <div>
        <button type="button" onClick={() => setIds((values) => [...values, uniqueId('demo')])}>Generate ID</button>
        <ul data-testid="generated-ids">
          {ids.map((id) => <li key={id}>{id}</li>)}
        </ul>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector('button')!;
    await userEvent.click(button);
    await userEvent.click(button);
    const ids = [...canvasElement.querySelectorAll('[data-testid="generated-ids"] li')].map((item) => item.textContent);
    expect(ids).toHaveLength(2);
    expect(ids[0]).toMatch(/^demo-/);
    expect(ids[1]).toMatch(/^demo-/);
    expect(ids[0]).not.toBe(ids[1]);
  },
};
