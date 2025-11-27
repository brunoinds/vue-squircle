# Vue Squircle

<p align="center">
  <img src="screenshot.png" alt="Vue Squircle Screenshot" width="600">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-squircle"><img src="https://img.shields.io/npm/v/vue-squircle.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/vue-squircle"><img src="https://img.shields.io/npm/l/vue-squircle.svg" alt="License"></a>
  <a href="https://www.npmjs.com/package/vue-squircle"><img src="https://img.shields.io/npm/dt/vue-squircle.svg" alt="Downloads"></a>
</p>

<p align="center">
  <b>Smooth rounded corners (superellipse) for Vue 3.</b><br>
  Bring the elegance of iOS-style rounded corners to your web applications.
</p>

---

## ✨ Features

- **True Squircles**: Uses superellipse mathematics for smoother, more organic curves than standard `border-radius`.
- **Vue 3 Ready**: Built with Composition API and TypeScript for modern Vue development.
- **Customizable**: Control radius, smoothing, padding, and background.
- **Lightweight**: Minimal footprint with no heavy dependencies.

## 📦 Installation

```bash
npm install vue-squircle
# or
yarn add vue-squircle
# or
pnpm add vue-squircle
```

## 🚀 Usage

### Global Registration

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import VSquircle from 'vue-squircle'
import 'vue-squircle/dist/style.css' // Import styles

const app = createApp(App)
app.use(VSquircle)
app.mount('#app')
```

### Local Registration

```vue
<script setup>
import { VSquircle } from 'vue-squircle'
import 'vue-squircle/dist/style.css'
</script>

<template>
  <v-squircle 
    radius="40px" 
    :smoothing="10" 
    background="tomato"
  >
    <div class="content">
      Your content here
    </div>
  </v-squircle>
</template>
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `radius` | `string` | `'25px'` | The radius of the corners (e.g., `'20px'`, `'2rem'`). |
| `smoothing` | `number` | `4` | The level of smoothing. Higher values create a more "squarish" circle. |
| `padding` | `string` | `'25px'` | Padding inside the squircle container. |
| `background` | `string` | `'hsla(0,0%,0%,0.5)'` | Background color or image (CSS value). |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Bruno Freire](https://github.com/brunoinds)
