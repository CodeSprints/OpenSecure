# Security

The vault payload is encrypted with AES-256-GCM. Every save creates a new 96-bit initialization vector. The salt is 256 bits. PBKDF2-SHA-256 uses 600,000 iterations.

Encryption protects persisted vault contents while the vault is locked. It does not protect against malware running as the user, a compromised browser, keyloggers, or loss of the master password. Clipboard contents may remain visible to the operating system.

Finance and task data are local but are not encrypted by the application. Full-disk encryption and a locked operating-system account are recommended.

Tauri applies a restrictive content security policy. The Rust backend exposes only load and save commands. Save operations write a temporary file before replacing the state file.

Production releases should be signed, use lock files, run npm and Cargo security audits, generate an SBOM, and publish checksums.
