export const loadWasm = async () => {
  const wasm = await import('./wasm/pkg/hello_wasm.js');
  await wasm.default();
  return wasm;
};
