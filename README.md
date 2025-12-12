# MCI Server


Step 1 : Install bun

Installing bun in your PC if npm is already present

```bash
npm install -g bun
```

If npm is not present :-
a. macOs and Linux --> curl -fsSL https://bun.com/install | bash
b. winodws powershell --> powershell -c "irm bun.sh/install.ps1|iex"
c. docker -->
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun


Step 2: Clone the repo on your PC and in the repo Run and setup the project

To install dependencies:

```bash
bun install
```

For developers:

```bash
bun run dev
```

To run prod build

```bash
bun run start
```

This project was created using `bun init` in bun v1.3.4. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
