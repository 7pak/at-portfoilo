import { Github, ExternalLink } from 'lucide-react'
import { GooglePlayIcon, AppStoreIcon } from './StoreIcons.jsx'

/* Every outbound link a project can carry, in the order it should be rendered.
   `aria` and `label` are i18n keys resolved by the consumer. */
const linkTypes = [
  { key: 'playStore', Icon: GooglePlayIcon, aria: 'projects.aria.playStore', label: 'projects.detail.viewPlayStore' },
  { key: 'appStore', Icon: AppStoreIcon, aria: 'projects.aria.appStore', label: 'projects.detail.viewAppStore' },
  { key: 'github', Icon: Github, aria: 'projects.aria.github', label: 'projects.detail.viewGithub' },
  { key: 'demo', Icon: ExternalLink, aria: 'projects.aria.demo', label: 'projects.detail.viewDemo' },
]

export function getProjectLinks(item) {
  return linkTypes
    .filter(({ key }) => item[key] && item[key] !== '#')
    .map((type) => ({ ...type, url: item[type.key] }))
}
