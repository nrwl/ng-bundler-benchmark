# Angular Bundler Benchmark Repo

Application contains 4 bundler builds:

- Webpack
- esbuild
- Rsbuild
- Rspack

The application consists of ~800 lazy loaded routes with ~10 components each - totaling ~8000 components.

## System Info

- MacBook Pro (macOS 15.3.1)
- Processor: M2 Max
- Memory: 96 GB

## Results

| Build/Bundler | Prod SSR (s) | Prod (s) | Dev (s) |
| ------------- | ------------ | -------- | ------- |
| Webpack       | 198.614      | 154.339  | 159.436 |
| esbuild       | 23.701       | 19.569   | 15.358  |
| Rsbuild       | 23.949       | 20.490   | 18.209  |
| Rspack        | 30.589       | 19.269   | 19.940  |

### Raw Results

**Dev Benchmark**

```bash
Benchmark 1: NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:browser-webpack:development --skip-nx-cache
  Time (mean ± σ):     159.436 s ±  2.324 s    [User: 316.834 s, System: 30.138 s]
  Range (min … max):   156.170 s … 162.114 s    5 runs

Benchmark 2: pnpm nx run esbuild:browser-esbuild:development --skip-nx-cache
  Time (mean ± σ):     15.358 s ±  0.313 s    [User: 25.270 s, System: 3.669 s]
  Range (min … max):   14.849 s … 15.672 s    5 runs

Benchmark 3: pnpm nx run esbuild:build-rspack:development --configName=browser --skip-nx-cache
  Time (mean ± σ):     19.940 s ±  0.352 s    [User: 32.087 s, System: 5.366 s]
  Range (min … max):   19.580 s … 20.452 s    5 runs

Benchmark 4: pnpm nx run esbuild:build-rsbuild:development --environment=browser --skip-nx-cache
  Time (mean ± σ):     18.209 s ±  0.260 s    [User: 34.100 s, System: 5.140 s]
  Range (min … max):   17.983 s … 18.651 s    5 runs

Summary
  pnpm nx run esbuild:browser-esbuild:development --skip-nx-cache ran
    1.19 ± 0.03 times faster than pnpm nx run esbuild:build-rsbuild:development --environment=browser --skip-nx-cache
    1.30 ± 0.04 times faster than pnpm nx run esbuild:build-rspack:development --configName=browser --skip-nx-cache
   10.38 ± 0.26 times faster than NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:browser-webpack:development --skip-nx-cache
```

**Prod Benchmark**

```bash
Benchmark 1: NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:browser-webpack --skip-nx-cache
  Time (mean ± σ):     154.339 s ±  5.694 s    [User: 291.834 s, System: 29.490 s]
  Range (min … max):   147.639 s … 162.239 s    5 runs

Benchmark 2: pnpm nx run esbuild:browser-esbuild --skip-nx-cache
  Time (mean ± σ):     19.569 s ±  0.230 s    [User: 37.918 s, System: 5.753 s]
  Range (min … max):   19.272 s … 19.879 s    5 runs

Benchmark 3: pnpm nx run esbuild:build-rspack --configName=browser --skip-nx-cache
  Time (mean ± σ):     25.898 s ±  0.061 s    [User: 40.495 s, System: 6.448 s]
  Range (min … max):   25.847 s … 26.000 s    5 runs

Benchmark 4: pnpm nx run esbuild:build-rsbuild --environment=browser --skip-nx-cache
  Time (mean ± σ):     19.269 s ±  0.313 s    [User: 36.154 s, System: 4.960 s]
  Range (min … max):   18.846 s … 19.577 s    5 runs

Summary
  pnpm nx run esbuild:build-rsbuild --environment=browser --skip-nx-cache ran
    1.02 ± 0.02 times faster than pnpm nx run esbuild:browser-esbuild --skip-nx-cache
    1.34 ± 0.02 times faster than pnpm nx run esbuild:build-rspack --configName=browser --skip-nx-cache
    8.01 ± 0.32 times faster than NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:browser-webpack --skip-nx-cache
```

**Prod SSR Benchmark**

```bash
Benchmark 1: NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:build-webpack --skip-nx-cache
  Time (mean ± σ):     198.614 s ±  5.029 s    [User: 695.918 s, System: 75.452 s]
  Range (min … max):   190.033 s … 202.159 s    5 runs

Benchmark 2: pnpm nx run esbuild:build-esbuild --skip-nx-cache
  Time (mean ± σ):     23.701 s ±  0.683 s    [User: 57.595 s, System: 8.805 s]
  Range (min … max):   22.490 s … 24.161 s    5 runs

Benchmark 3: pnpm nx run esbuild:build-rspack --skip-nx-cache
  Time (mean ± σ):     30.589 s ±  0.896 s    [User: 83.088 s, System: 14.003 s]
  Range (min … max):   29.818 s … 32.109 s    5 runs

Benchmark 4: pnpm nx run esbuild:build-rsbuild --skip-nx-cache
  Time (mean ± σ):     23.949 s ±  0.407 s    [User: 66.553 s, System: 10.503 s]
  Range (min … max):   23.406 s … 24.326 s    5 runs

Summary
  pnpm nx run esbuild:build-esbuild --skip-nx-cache ran
    1.01 ± 0.03 times faster than pnpm nx run esbuild:build-rsbuild --skip-nx-cache
    1.29 ± 0.05 times faster than pnpm nx run esbuild:build-rspack --skip-nx-cache
    8.38 ± 0.32 times faster than NODE_OPTIONS="--max-old-space-size=8192" pnpm nx run esbuild:build-webpack --skip-nx-cache
```
