function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smartphone: {
      smooth: true,
    },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

function canvasAnimation() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
  REDNERSS/0001.png
  REDNERSS/0002.png
  REDNERSS/0003.png
  REDNERSS/0004.png
  REDNERSS/0005.png
  REDNERSS/0006.png
  REDNERSS/0007.png
  REDNERSS/0008.png
  REDNERSS/0009.png
  REDNERSS/0010.png
  REDNERSS/0011.png
  REDNERSS/0012.png
  REDNERSS/0013.png
  REDNERSS/0014.png
  REDNERSS/0015.png
  REDNERSS/0016.png
  REDNERSS/0017.png
  REDNERSS/0018.png
  REDNERSS/0019.png
  REDNERSS/0020.png
  REDNERSS/0021.png
  REDNERSS/0022.png
  REDNERSS/0023.png
  REDNERSS/0024.png
  REDNERSS/0025.png
  REDNERSS/0026.png
  REDNERSS/0027.png
  REDNERSS/0028.png
  REDNERSS/0029.png
  REDNERSS/0030.png
  REDNERSS/0031.png
  REDNERSS/0032.png
  REDNERSS/0033.png
  REDNERSS/0034.png
  REDNERSS/0035.png
  REDNERSS/0036.png
  REDNERSS/0037.png
  REDNERSS/0038.png
  REDNERSS/0039.png
  REDNERSS/0040.png
  REDNERSS/0041.png
  REDNERSS/0042.png
  REDNERSS/0043.png
  REDNERSS/0044.png
  REDNERSS/0045.png
  REDNERSS/0046.png
  REDNERSS/0047.png
  REDNERSS/0048.png
  REDNERSS/0049.png
  REDNERSS/0050.png
  REDNERSS/0051.png
  REDNERSS/0052.png
  REDNERSS/0053.png
  REDNERSS/0054.png
  REDNERSS/0055.png
  REDNERSS/0056.png
  REDNERSS/0057.png
  REDNERSS/0058.png
  REDNERSS/0059.png
  REDNERSS/0060.png
  REDNERSS/0061.png
  REDNERSS/0062.png
  REDNERSS/0063.png
  REDNERSS/0064.png
  REDNERSS/0065.png
  REDNERSS/0066.png
  REDNERSS/0067.png
  REDNERSS/0068.png
  REDNERSS/0069.png
  REDNERSS/0070.png
  REDNERSS/0071.png
  REDNERSS/0072.png
  REDNERSS/0073.png
  REDNERSS/0074.png
  REDNERSS/0075.png
  REDNERSS/0076.png
  REDNERSS/0077.png
  REDNERSS/0078.png
  REDNERSS/0079.png
  REDNERSS/0080.png
  REDNERSS/0081.png
  REDNERSS/0082.png
  REDNERSS/0083.png
  REDNERSS/0084.png
  REDNERSS/0085.png
  REDNERSS/0086.png
  REDNERSS/0087.png
  REDNERSS/0088.png
  REDNERSS/0089.png
  REDNERSS/0090.png
  REDNERSS/0091.png
  REDNERSS/0092.png
  REDNERSS/0093.png
  REDNERSS/0094.png
  REDNERSS/0095.png
  REDNERSS/0096.png
  REDNERSS/0097.png
  REDNERSS/0098.png
  REDNERSS/0099.png
  REDNERSS/0100.png
  REDNERSS/0101.png
  REDNERSS/0102.png
  REDNERSS/0103.png
  REDNERSS/0104.png
  REDNERSS/0105.png
  REDNERSS/0106.png
  REDNERSS/0107.png
  REDNERSS/0108.png
  REDNERSS/0109.png
  REDNERSS/0110.png
  REDNERSS/0111.png
  REDNERSS/0112.png
  REDNERSS/0113.png
  REDNERSS/0114.png
  REDNERSS/0115.png
  REDNERSS/0116.png
  REDNERSS/0117.png
  REDNERSS/0118.png
  REDNERSS/0119.png
  REDNERSS/0120.png
  REDNERSS/0121.png
  REDNERSS/0122.png
  REDNERSS/0123.png
  REDNERSS/0124.png
  REDNERSS/0125.png
  REDNERSS/0126.png
  REDNERSS/0127.png
  REDNERSS/0128.png
  REDNERSS/0129.png
  REDNERSS/0130.png
  REDNERSS/0131.png
  REDNERSS/0132.png
  REDNERSS/0133.png
  REDNERSS/0134.png
  REDNERSS/0135.png
  REDNERSS/0136.png
  REDNERSS/0137.png
  REDNERSS/0138.png
  REDNERSS/0139.png
  REDNERSS/0140.png
  REDNERSS/0141.png
  REDNERSS/0142.png
  REDNERSS/0143.png
  REDNERSS/0144.png
  REDNERSS/0145.png
  REDNERSS/0146.png
  REDNERSS/0147.png
  REDNERSS/0148.png
  REDNERSS/0149.png
  REDNERSS/0150.png
  REDNERSS/0151.png
  REDNERSS/0152.png
  REDNERSS/0153.png
  REDNERSS/0154.png
  REDNERSS/0155.png
  REDNERSS/0156.png
  REDNERSS/0157.png
  REDNERSS/0158.png
  REDNERSS/0159.png
  REDNERSS/0160.png
  REDNERSS/0161.png
  REDNERSS/0162.png
  REDNERSS/0163.png
  REDNERSS/0164.png
  REDNERSS/0165.png
  REDNERSS/0166.png
  REDNERSS/0167.png
  REDNERSS/0168.png
  REDNERSS/0169.png
  REDNERSS/0170.png
  REDNERSS/0171.png
  REDNERSS/0172.png
  REDNERSS/0173.png
  REDNERSS/0174.png
  REDNERSS/0175.png
  REDNERSS/0176.png
  REDNERSS/0177.png
  REDNERSS/0178.png
  REDNERSS/0179.png
  REDNERSS/0180.png
  REDNERSS/0181.png
  REDNERSS/0182.png
  REDNERSS/0183.png
  REDNERSS/0184.png
  REDNERSS/0185.png
`;

    return data.split("\n")[index];
  }

  const frameCount = 300;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });

  gsap.to("#page1", {
    scrollTrigger: {
      trigger: `#page1`,
      start: `top top`,
      end: `bottom top`,
      pin: true,
      scroller: `#main`,
    },
  });
  gsap.to("#page2", {
    scrollTrigger: {
      trigger: `#page2`,
      start: `top top`,
      end: `bottom top`,
      pin: true,
      scroller: `#main`,
    },
  });
}

canvasAnimation();

var tl = gsap.timeline();
tl.from("nav", 1, {
  y: -500,
  ease: Power1.inOut,
});

tl.from(
  "#loop p",
  1,
  {
    x: -300,
    ease: Power4.in,
  },
  "headline"
);
tl.from(
  "#loop h1",
  1,
  {
    opacity: 0,
    y: 250,
    ease: Power3.Out,
  },
  "headline"
);

gsap.from(".a15", {
  x: 1000,
  ease: Power2.inOut,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1",
    start: "top top",
    end: "top bottom",
    scrub: 2,
  },
});

gsap.from(".camera", {
  x: -1000,
  ease: Power2.inOut,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page1",
    start: "top -1%",
    end: "top bottom",
    scrub: 2,
  },
});

gsap.from("#page2", {
  opacity: 0,
  ease: Power2.inOut,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page2",
    start: "top ",
    end: "top bottom",
    scrub: 1,
  },
});
