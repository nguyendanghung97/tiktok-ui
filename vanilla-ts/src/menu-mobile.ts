export const setupMenuMobile = (collectionElementsByClass: HTMLCollectionOf<Element>) => {

  Array.from(collectionElementsByClass).forEach((el) => el.addEventListener('click', () => {
   
    const isShow = document.getElementById('hamburger')!.classList.contains('active');
    setTimeout(() => {
      toggleClassList(document.getElementById('bg-menu'), ['opacity-0', 'opacity-70', 'invisible']);
    }, !isShow ? 0 : 200)
    setTimeout(() => {
      toggleClassList(document.getElementById('hamburger'), ['active']);
      toggleClassList(document.getElementById('menu'), ['invisible', '-left-32', 'left-0', 'opacity-100', 'opacity-0']);
      toggleClassList(document.getElementById('list-menu'), []);
    },!isShow ? 200 : 0);

  }));
}
export const toggleClassList = (element: HTMLElement| null, classList: string[]) => element && classList.forEach((e) => element.classList.toggle(e))

setupMenuMobile(document.getElementsByClassName('handle-menu'));