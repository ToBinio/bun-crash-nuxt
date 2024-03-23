steps to reproduce crash

```
error: script "dev" was terminated by signal SIGSEGV (Address boundary error)
fish: Job 1, 'bun --bun dev' terminated by signal SIGSEGV (Address boundary error)
```


## Setup

install deps

```bash
bun install
```

run 

```bash
bun --bun dev
```

## Crash

play around with files in `/server` and cause a `Nuxt Nitro server built` (I believe vue hmr do not cause any problem) after causing some rebuilds, it randomly crashes (not at the same moment of a rebuild, a few seconds later)

I could only reproduce it with the experimental [tasks](https://nitro.unjs.io/guide/tasks) enabled. But they alone do not cause the crash since without rebuilding they run normally

## Environment

* bun 1.0.35
* fedora 40
* kernel 6.8.1
