import { ItemView, WorkspaceLeaf } from "obsidian";
import { StrictMode, useState } from "react";
import { Root, createRoot } from "react-dom/client";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
  root: Root | null = null;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText(): string {
    return "Example View";
  }

  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    this.root = createRoot(container);
    this.root.render(
      <StrictMode>
        <ReactView />
      </StrictMode>,
    );
  }

  async onClose() {
    this.root?.unmount();
  }
}

const ReactView = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Hello, React!</h4>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((current) => current + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((current) => current - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};
