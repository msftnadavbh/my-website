"use client";

import { useState } from "react";
import type { ConsoleCommand } from "@/content/site";

type ProfileTerminalProps = {
  commands: readonly ConsoleCommand[];
};

export function ProfileTerminal({ commands }: ProfileTerminalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCommand = commands[activeIndex];

  return (
    <section className="terminal" aria-label="Interactive profile terminal">
      <div className="terminal__bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>nadav@systems-workshop:~</p>
      </div>

      <fieldset className="terminal__commands" aria-label="Profile views">
        {commands.map((command, index) => (
          <button
            className="terminal__command"
            data-active={index === activeIndex}
            key={command.label}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            {command.label}
          </button>
        ))}
      </fieldset>

      <div
        className="terminal__output"
        aria-live="polite"
        key={activeCommand.label}
      >
        <p className="terminal__prompt">
          <span aria-hidden="true">$</span> {activeCommand.prompt}
        </p>
        {activeCommand.output.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
