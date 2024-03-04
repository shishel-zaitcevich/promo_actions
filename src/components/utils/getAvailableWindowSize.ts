export function adjustContainerHeight(contentId: string): void {
  const toolbarElement = document.getElementById('toolbar');
  if (toolbarElement) {
    const toolbarHeight: number = toolbarElement.offsetHeight;

    // Учет высоты тулбара при вычислении высоты контейнера
    const container = document.getElementById('content');
    if (container) {
      container.style.height = `calc(100vh - ${toolbarHeight}px)`;
    }
  }

  const availableScreenWidth = window.screen.availWidth; //для винды
  const availableScreenHeight = window.screen.availHeight;
}

export const windowInnerWidth = window.innerWidth; // для браузера
export const windowInnerHeight = window.innerHeight;

document.documentElement.style.setProperty(
  '--window-inner-width',
  `${window.innerWidth}px`
);
document.documentElement.style.setProperty(
  '--window-inner-height',
  `${window.innerHeight}px`
);
