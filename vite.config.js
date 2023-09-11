import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import { resolve } from "path"

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }

export default defineConfig({
    plugins: [pugPlugin(options, locals)],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                checkout: resolve(__dirname, 'checkout.html'),
                contacts: resolve(__dirname, 'contacts.html'),
                delivery: resolve(__dirname, 'delivery.html'),
                order: resolve(__dirname, 'order.html'),
                product: resolve(__dirname, 'product.html'),
                sales: resolve(__dirname, 'sales.html'),
                thanks: resolve(__dirname, 'thanks.html'),
            },
        },
    },
})
