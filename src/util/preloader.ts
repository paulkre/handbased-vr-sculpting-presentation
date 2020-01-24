const PreloadPromise = (img: HTMLImageElement) =>
  new Promise<void>((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject();
  });

const jobs: Promise<any>[] = [];

export const preloader = {
  addImage(url: string) {
    const img = new Image();
    jobs.push(PreloadPromise(img));
    img.src = url;
  },
  preload: () => Promise.all(jobs)
};
