# Repro Steps

1. Run `rm -rf .vite && npm install && npx vite`
2. Access [http://localhost:5173/](http://localhost:5173/) with a recent browser (I tested with Chrome)

## Expected
<img width="552" height="84" alt="image" src="https://github.com/user-attachments/assets/d2eab515-1606-4aaa-90c9-c6c966240761" />

## Actual
<img width="472" height="89" alt="image" src="https://github.com/user-attachments/assets/11fa41d2-851c-4b35-8fb8-e6a7d677b6c1" />

# Workaround

Use this config in vite.config.js

```
legacy: {
    inconsistentCjsInterop: true, // Uncomment me to workaround the issue
  },
```
