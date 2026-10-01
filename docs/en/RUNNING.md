# Running and releasing

Use Node.js 22 or newer and npm 10 or newer. Tauri also requires stable Rust and the system packages listed in the Tauri 2 prerequisites.

Run `npm install` and `npm run dev` for web development. `npm run build` creates the static build. Hash routing allows deployment without server rewrite rules.

Run `npm run tauri dev` for a native development window and `npm run tauri build` for the current operating system installer.

Initialize mobile targets with `npm run tauri android init` or `npm run tauri ios init`. Android requires Android Studio and its SDK. iOS requires macOS and Xcode.
