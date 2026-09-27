import "@testing-library/jest-dom/vitest";
vi.mock('next/navigation',()=>({useRouter:()=>({push:vi.fn()}),usePathname:()=>'/'}));

const storage = new Map<string, string>();
const localStorageMock: Storage = {
  get length() { return storage.size; },
  clear: () => storage.clear(),
  getItem: (key) => storage.get(key) ?? null,
  key: (index) => Array.from(storage.keys())[index] ?? null,
  removeItem: (key) => { storage.delete(key); },
  setItem: (key, value) => { storage.set(key, String(value)); },
};

Object.defineProperty(globalThis, "localStorage", { value: localStorageMock, configurable: true });
Object.defineProperty(HTMLMediaElement.prototype, "play", { value: vi.fn().mockResolvedValue(undefined), configurable: true });
Object.defineProperty(HTMLMediaElement.prototype, "pause", { value: vi.fn(), configurable: true });
