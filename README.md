# Torch UCI Engine (Chess.com Analysis Version)

A standalone UCI-compatible build of the Torch chess engine extracted from the files delivered by Chess.com when using Torch on the Analysis page.

## About Torch

Torch is a closed-source chess engine developed by the Chess.com engine team, including developers behind several well-known engines such as Ethereal, Koivisto, Berserk, and Dragon. It was originally introduced in 2023 and quickly became one of the strongest chess engines in the world. Torch is available on Chess.com's analysis board but is not officially distributed as a standalone UCI engine.

## What is this repository?

This repository contains a standalone UCI wrapper created from the JavaScript and WebAssembly files that Chess.com delivers to your browser when selecting Torch on the Analysis page.

The files were obtained by inspecting the network requests made by Chess.com and downloading the engine assets used by the website. The goal of this project is to allow Torch to be used in UCI-compatible chess GUIs such as:

* Cute Chess
* Arena
* Banksia GUI
* Fritz
* ChessBase
* Any other UCI-compatible interface

This is **not** an official release from Chess.com or the Torch developers.

## Installation

No separate Node.js installation is required.

The repository already includes a portable Node.js runtime.

### Folder Structure

```text
torch/
├─ torch.bat
├─ torch.exe
├─ node.exe
├─ torch-4-9f8ccc7.js
├─ torch-4-9f8ccc7-part-0.wasm
├─ torch-4-9f8ccc7-part-1.wasm
├─ torch-4-9f8ccc7-part-2.wasm
├─ torch-4-9f8ccc7-part-3.wasm
├─ torch-4-9f8ccc7-part-4.wasm
└─ torch-4-9f8ccc7-part-5.wasm
```

Keep all files together in the same directory.

## Using in Cute Chess

Add a new UCI engine with:

**Command:**

```text
torch.exe
```

or

```text
torch.bat
```

torch.exe should be compatible with any chess gui, torch.bat can be used in some GUIs like CuteChess. There is no performance difference between the two.

Do **not** select:

```text
node.exe
```

or

```text
torch-4-9f8ccc7.js
```

directly.

The batch or exe file automatically launches the engine with the correct Node.js runtime and parameters.

## Notes

* This build uses the original WebAssembly engine files supplied by Chess.com.
* The engine communicates using the standard UCI protocol.
* Multi-threading is supported through Node.js worker threads.
* The engine is intended primarily for analysis and engine testing.

## Disclaimer

Torch is a Chess.com project and remains closed-source. This repository is not affiliated with, endorsed by, or maintained by Chess.com or the Torch development team.

All trademarks and intellectual property belong to their respective owners.

## Credits

Torch development team:

* Andrew Grant (Ethereal)
* Finn Eggers (Koivisto)
* Kim Kåhre (Koivisto)
* Jay Honnold (Berserk)
* Michael Whiteley (Dragon)
* Dietrich Kappe (Dragon)

Additional advisors include Mark Lefler and Larry Kaufman.
