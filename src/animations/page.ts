import { TimelineMax, TweenMax, Expo, Back } from "gsap";

export const hide = (target: HTMLElement) => {
  return TweenMax.to(target, 0.4, {
    opacity: 0,
    y: 10,
    ease: Expo.easeOut
  });
};

export const revealH = ({
  line,
  leftSlider,
  rightSlider
}: {
  line: HTMLElement;
  leftSlider: HTMLElement;
  rightSlider: HTMLElement;
}): TimelineMax => {
  const tl = new TimelineMax({ paused: true });

  tl.from(line, 0.5, { height: 0, ease: Expo.easeOut })
    .staggerFrom(
      leftSlider.children,
      0.5,
      { x: 10, opacity: 0, ease: Back.easeOut },
      0.1,
      "slide"
    )
    .staggerFrom(
      rightSlider.children,
      0.5,
      { x: -10, opacity: 0, ease: Back.easeOut },
      0.1,
      "slide"
    )
    .to(line, 0.5, { opacity: 0.1 })
    .play();

  return tl;
};

export const revealC = ({
  img,
  text
}: {
  img: HTMLElement,
  text: HTMLElement
}): TimelineMax => {
  const tl = new TimelineMax({ paused: true });

  TweenMax.set(img, { opacity: 0 });
  TweenMax.set(text.children, { opacity: 0, y: -10 });

  tl
    .to(img, 1, { opacity: 1, ease: Expo.easeOut }, 'reveal')
    .staggerTo(text.children, 0.5, { y: 0, opacity: 1, ease: Back.easeOut }, 0.1, 'reveal')
    .delay(0.2)

  return tl;
}

export default { hide, revealH, revealC };
