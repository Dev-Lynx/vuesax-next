import { App } from 'vue';
import { Vue } from "vue-class-component";
import { VsAlert } from './components/VsAlert'
import { vsFunctions } from "../src/functions/defineVuesaxFunctions";

/** Alert Component */
export class Alert extends VsAlert {}

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $vs: typeof vsFunctions,
        // $router: any Already defined in shims-vue
    }
}

declare global {
    interface Window {
        Vue: App,
        console: any
    }
}

declare module '*.svg' {
    const content: string;
    export default content;
}
