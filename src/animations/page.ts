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

  tl.from(line, 0.5, { height: 0, ease: Expo.easeIn })
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
    .delay(0.05)

  return tl;
}

export const revealV = ({
  line,
  topSlider,
  bottomSlider
}: {
  line: HTMLElement | null;
  topSlider: HTMLElement | null;
  bottomSlider: HTMLElement | null;
}): TimelineMax => {
  const tl = new TimelineMax({ paused: true });

  if (!line || !topSlider || !bottomSlider) return tl;

  tl.from(line, 0.5, { width: 0, ease: Expo.easeIn })
    .staggerFrom(
      topSlider.children,
      0.5,
      { y: 10, opacity: 0, ease: Back.easeOut },
      0.1,
      "slide"
    )
    .staggerFrom(
      bottomSlider.children,
      0.5,
      { y: -10, opacity: 0, ease: Back.easeOut },
      0.1,
      "slide"
    )
    .to(line, 0.5, { opacity: 0.1 })
    .play();

  return tl;
};

export const refreshV = ({
  topSlider,
  bottomSlider
}: {
  topSlider: HTMLElement | null;
  bottomSlider: HTMLElement | null;
}): TimelineMax => {
  const tl = new TimelineMax({ paused: true });

  if (!topSlider || !bottomSlider) return tl;

  tl
    .staggerTo(
      topSlider.children,
      0.5,
      { opacity: 0, ease: Back.easeIn },
      0.1,
      "slide"
    )
    .staggerTo(
      bottomSlider.children,
      0.5,
      { y: -10, opacity: 0, ease: Back.easeIn },
      0.1,
      "slide"
    )

  return tl;
};

const revealCurtain = (curtain: HTMLElement | null): TimelineMax => {
  const tl = new TimelineMax({ paused: true });

  if (!curtain) return tl;

  tl.to(curtain, 0.5, { height: 0, ease: Expo.easeOut }).play()

  return tl;
}

const hideCurtain = (curtain: HTMLElement | null) => {
  if (curtain) TweenMax.set(curtain, { height: '100%' });
}

export const curtain = { reveal: revealCurtain, hide: hideCurtain }

export default { hide, revealH, revealC, revealV, refreshV, curtain };
