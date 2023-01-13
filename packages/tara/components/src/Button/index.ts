import button from './Button.vue';
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        app.component((app as any).name, (comp as any));
    }
    return comp as SFCWithInstall<T>;
}

const Button = withInstall(button);
export default Button;