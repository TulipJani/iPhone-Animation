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
  IMAGES/0001.webp
  IMAGES/0002.webp
  IMAGES/0003.webp
  IMAGES/0004.webp
  IMAGES/0005.webp
  IMAGES/0006.webp
  IMAGES/0007.webp
  IMAGES/0008.webp
  IMAGES/0009.webp
  IMAGES/0010.webp
  IMAGES/0011.webp
  IMAGES/0012.webp
  IMAGES/0013.webp
  IMAGES/0014.webp
  IMAGES/0015.webp
  IMAGES/0016.webp
  IMAGES/0017.webp
  IMAGES/0018.webp
  IMAGES/0019.webp
  IMAGES/0020.webp
  IMAGES/0021.webp
  IMAGES/0022.webp
  IMAGES/0023.webp
  IMAGES/0024.webp
  IMAGES/0025.webp
  IMAGES/0026.webp
  IMAGES/0027.webp
  IMAGES/0028.webp
  IMAGES/0029.webp
  IMAGES/0030.webp
  IMAGES/0031.webp
  IMAGES/0032.webp
  IMAGES/0033.webp
  IMAGES/0034.webp
  IMAGES/0035.webp
  IMAGES/0036.webp
  IMAGES/0037.webp
  IMAGES/0038.webp
  IMAGES/0039.webp
  IMAGES/0040.webp
  IMAGES/0041.webp
  IMAGES/0042.webp
  IMAGES/0043.webp
  IMAGES/0044.webp
  IMAGES/0045.webp
  IMAGES/0046.webp
  IMAGES/0047.webp
  IMAGES/0048.webp
  IMAGES/0049.webp
  IMAGES/0050.webp
  IMAGES/0051.webp
  IMAGES/0052.webp
  IMAGES/0053.webp
  IMAGES/0054.webp
  IMAGES/0055.webp
  IMAGES/0056.webp
  IMAGES/0057.webp
  IMAGES/0058.webp
  IMAGES/0059.webp
  IMAGES/0060.webp
  IMAGES/0061.webp
  IMAGES/0062.webp
  IMAGES/0063.webp
  IMAGES/0064.webp
  IMAGES/0065.webp
  IMAGES/0066.webp
  IMAGES/0067.webp
  IMAGES/0068.webp
  IMAGES/0069.webp
  IMAGES/0070.webp
  IMAGES/0071.webp
  IMAGES/0072.webp
  IMAGES/0073.webp
  IMAGES/0074.webp
  IMAGES/0075.webp
  IMAGES/0076.webp
  IMAGES/0077.webp
  IMAGES/0078.webp
  IMAGES/0079.webp
  IMAGES/0080.webp
  IMAGES/0081.webp
  IMAGES/0082.webp
  IMAGES/0083.webp
  IMAGES/0084.webp
  IMAGES/0085.webp
  IMAGES/0086.webp
  IMAGES/0087.webp
  IMAGES/0088.webp
  IMAGES/0089.webp
  IMAGES/0090.webp
  IMAGES/0091.webp
  IMAGES/0092.webp
  IMAGES/0093.webp
  IMAGES/0094.webp
  IMAGES/0095.webp
  IMAGES/0096.webp
  IMAGES/0097.webp
  IMAGES/0098.webp
  IMAGES/0099.webp
  IMAGES/0100.webp
  IMAGES/0101.webp
  IMAGES/0102.webp
  IMAGES/0103.webp
  IMAGES/0104.webp
  IMAGES/0105.webp
  IMAGES/0106.webp
  IMAGES/0107.webp
  IMAGES/0108.webp
  IMAGES/0109.webp
  IMAGES/0110.webp
  IMAGES/0111.webp
  IMAGES/0112.webp
  IMAGES/0113.webp
  IMAGES/0114.webp
  IMAGES/0115.webp
  IMAGES/0116.webp
  IMAGES/0117.webp
  IMAGES/0118.webp
  IMAGES/0119.webp
  IMAGES/0120.webp
  IMAGES/0121.webp
  IMAGES/0122.webp
  IMAGES/0123.webp
  IMAGES/0124.webp
  IMAGES/0125.webp
  IMAGES/0126.webp
  IMAGES/0127.webp
  IMAGES/0128.webp
  IMAGES/0129.webp
  IMAGES/0130.webp
  IMAGES/0131.webp
  IMAGES/0132.webp
  IMAGES/0133.webp
  IMAGES/0134.webp
  IMAGES/0135.webp
  IMAGES/0136.webp
  IMAGES/0137.webp
  IMAGES/0138.webp
  IMAGES/0139.webp
  IMAGES/0140.webp
  IMAGES/0141.webp
  IMAGES/0142.webp
  IMAGES/0143.webp
  IMAGES/0144.webp
  IMAGES/0145.webp
  IMAGES/0146.webp
  IMAGES/0147.webp
  IMAGES/0148.webp
  IMAGES/0149.webp
  IMAGES/0150.webp
  IMAGES/0151.webp
  IMAGES/0152.webp
  IMAGES/0153.webp
  IMAGES/0154.webp
  IMAGES/0155.webp
  IMAGES/0156.webp
  IMAGES/0157.webp
  IMAGES/0158.webp
  IMAGES/0159.webp
  IMAGES/0160.webp
  IMAGES/0161.webp
  IMAGES/0162.webp
  IMAGES/0163.webp
  IMAGES/0164.webp
  IMAGES/0165.webp
  IMAGES/0166.webp
  IMAGES/0167.webp
  IMAGES/0168.webp
  IMAGES/0169.webp
  IMAGES/0170.webp
  IMAGES/0171.webp
  IMAGES/0172.webp
  IMAGES/0173.webp
  IMAGES/0174.webp
  IMAGES/0175.webp
  IMAGES/0176.webp
  IMAGES/0177.webp
  IMAGES/0178.webp
  IMAGES/0179.webp
  IMAGES/0180.webp
  IMAGES/0181.webp
  IMAGES/0182.webp
  IMAGES/0183.webp
  IMAGES/0184.webp
  IMAGES/0185.webp
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
