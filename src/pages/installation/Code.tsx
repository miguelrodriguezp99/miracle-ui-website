const codeblock = {
  primaryCode: `
*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --color-faded: #27272a;
  --color-faded-1: #3e3e43;
  --custom-hover-color: initial;
  --custom-placeholder-color: initial;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 14px;
  --radius-full: 9999px;
  --font-size-sm: 0.875rem;
  --font-size-md: 1rem;
  --font-size-lg: 1.125rem;
  --line-height-sm: 1.25rem;
  --line-height-md: 1.5rem;
  --line-height-lg: 1.75rem;
  --text: #09090b;

  --active-color: #09090b;
  --inactive-color: #71717a;

  scroll-behavior: smooth;

  scrollbar-width: auto;
  scrollbar-color: #4b5563 #ffffff;
}

.dark {
  scrollbar-width: auto;
  scrollbar-color: #4b5563 #1a202c;

  --active-color: white;
  --inactive-color: #b1b1b1;
  --text: #ecedee;
}

.default {
  --color: #424247;
  --color-2: #39393e;
  --color-3: #39393d;
  --color-4: #2a2a2f;
  --color-5: #1e1e22;
  color: white;
}

.primary {
  --color: #006fee;
  --color-2: #005bc4;
  --color-3: #004493;
  --color-4: #002e62;
  --color-5: #001731;
  color: white;
}

.secondary {
  --color: #9353d3;
  --color-2: #6020a0;
  --color-3: #481878;
  --color-4: #301050;
  --color-5: #180828;
  color: white;
}

.success {
  --color: #17c964;
  --color-2: #12a150;
  --color-3: #0e793c;
  --color-4: #095028;
  --color-5: #052814;
  color: black;
}

.warning {
  --color: #f5a524;
  --color-2: #c4841d;
  --color-3: #936316;
  --color-4: #62420e;
  --color-5: #312107;
  color: black;
}

.danger {
  --color: #f31260;
  --color-2: #c20e4d;
  --color-3: #920b3a;
  --color-4: #610726;
  --color-5: #310413;
  color: white;
}

.ripple {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  width: 0;
  height: 0;
  animation: animate 1s linear;
}

.ripple-light {
  background: rgba(255, 255, 255, 0.5);
}

.ripple-dark {
  background: rgba(0, 0, 0, 0.5);
}

.ripple-bordered {
  background-color: var(--color);
}

@keyframes animate {
  0% {
    width: 0;
    height: 0px;
    opacity: 0.5;
  }

  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}

.solid {
  background-color: var(--color);
}

.bordered {
  background-color: transparent;
  color: var(--color);
  border: 2px solid var(--color);
}

.light {
  background-color: transparent;
  color: var(--color);
  border: none;
}
.flat {
  background-color: var(--color-4);
  color: var(--color);
  border: none;
}

.faded {
  background-color: var(--color-faded);
  border: 2px solid var(--color-faded-1);
  color: var(--color);
}

.shadow {
  background-color: var(--color);
  box-shadow: 0 10px 15px -3px var(--color-2), 0 4px 6px -4px var(--color-2);
  border: none;
}

.ghost {
  background-color: transparent;
  border: 2px solid var(--color) !important;
  color: var(--color);
}

  `,
};

export default codeblock;