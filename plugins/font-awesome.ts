import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faSpinner, faHome, faCog, faEdit, faTimes, faArrowLeft, faFileImage, faCheck } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add( faUser, faSpinner, faHome, faCog, faEdit, faTimes, faArrowLeft, faFileImage, faCheck
);

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, )
})