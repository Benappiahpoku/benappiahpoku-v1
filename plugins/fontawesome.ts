import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ===== Import Icons for Ghana Context =====
import {
  // Navigation & UI Icons
  faBars,
  faTimes,
  faHome,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  
  // Status & Network Icons
  faWifi,
  faSync,
  faCheck,
  faExclamationTriangle,
  
  // Content Icons
  faHeart,
  faEye,
  faDownload,
  faSpinner,
  faPlus,
  faSearch,
  faSignOut,
  faCog,
  faBell,
  faPlusCircle,
  faCopy,
  faMobileScreen,
  faArrowLeft,
  faBox,
  faListAlt,
  faTrash,
  faTriangleExclamation,
  faReceipt,
  faEdit,
  faChartBar,
  faUsers,
  faWarehouse,
  faBuilding,
  faChartLine,
  faClock,
  faUserPlus,
  faShoppingCart,
  faInfoCircle,
  faEllipsisV,
  faUserGroup,
  faFileInvoice,
  faShieldHalved,
  faMobileScreenButton,
  faChevronUp,
  faChevronDown,
  faRocket,
  faCircle as fasCircle
} from '@fortawesome/free-solid-svg-icons'

import {
  // Regular icons
  faBell as farBell
} from '@fortawesome/free-regular-svg-icons'

import {
  // Brand Icons for Ghana context
  faWhatsapp,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

// ===== FontAwesome Configuration =====
// Prevent FontAwesome from adding its CSS automatically
config.autoAddCss = false

// ===== Add Icons to Library =====
library.add(
  // Solid icons
  faBars,
  faTimes,
  faHome,
  faUser,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faWifi,
  faSync,
  faCheck,
  faExclamationTriangle,
  faHeart,
  faEye,
  faDownload,
  faSpinner,
  faPlus,
  faSearch,
  faSignOut,
  faCog,
  faBell,
  faPlusCircle,
  faCopy,
  faMobileScreen,
  faArrowLeft,
  faBox,
  faListAlt,
  faTrash,
  faTriangleExclamation,
  faReceipt,
  faEdit,
  faChartBar,
  faUsers,
  faWarehouse,
  faBuilding,
  faChartLine,
  faClock,
  faUserPlus,
  faShoppingCart,
  faInfoCircle,
  faEllipsisV,
  faUserGroup,
  faFileInvoice,
  faShieldHalved,
  faMobileScreenButton,
  faChevronUp,
  faChevronDown,
  faRocket,
  fasCircle,
  
  // Regular icons
  farBell,
  
  // Brand icons
  faWhatsapp,
  faGithub
)

export default defineNuxtPlugin((nuxtApp) => {
  // ===== Register FontAwesome Component Globally =====
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})