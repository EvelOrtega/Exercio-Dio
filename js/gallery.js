var overlay = document.querySelector(".eo-overlay");
var frameContainer = document.querySelector(".eo-gallery-frame-container");
var frameImage = document.querySelector(".eo-gallery-frame-image");
var galleryImages = document.querySelectorAll(".eo-thumb-box");
var closeGallery = document.querySelectorAll(".eo-toggle-gallery");
var btnNext = document.querySelector(".eo-item-next");
var btnPrev = document.querySelector(".eo-item-prev");
var currCounter = document.querySelector(".eo-current-slide");
var totalCounter = document.querySelector(".eo-total-slide");
var skeletonLoading = document.querySelector(".eo-skeleton-loading");

var postGallery = document.querySelector(".eo-post-gallery");
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = postGalleryHeight - 270 + "px";

//Counter Formater
var counterFormatter = function (n) {
  if (n < 10) {
    return "0" + n;
  } else {
    return n;
  }
};

totalCounter.innerHTML = counterFormatter(galleryImages.length);

//Skeleton Loading
const skeletonAnim = function (imagem) {
  var myImage = new Image();
  myImage.src = imagem;
  myImage.addEventListener("load", function () {
    skeletonLoading.classList.add("eo-fade-out");
    console.log("iniciou fadeOut");
    setTimeout(function () {
      skeletonLoading.style.display = "none";
      console.log("iniciou display None");
    }, 2000);
  });
};

//Open Gallery Modal
const getImageSrc = function () {
  for (var i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
      var imageSrc = this.querySelector("img").getAttribute("data-src");
      var itemNum = this.querySelector("img").getAttribute("data-item");

      skeletonLoading.style.display = "flex";

      frameImage.setAttribute("src", imageSrc);
      frameImage.setAttribute("data-index", itemNum);
      overlay.classList.add("eo-is-open");
      frameContainer.classList.add("eo-is-open");
      currCounter.innerHTML = counterFormatter(itemNum);

      skeletonAnim(imageSrc);
    });
  }
};
getImageSrc();

for (var c = 0; c < closeGallery.length; c++) {
  closeGallery[c].addEventListener("click", function () {
    overlay.classList.remove("eo-is-open");
    frameContainer.classList.remove("eo-is-open");
  });
}

const nextItem = function () {
  //Identificamos o item atual no frame
  var currItemNum = frameImage.getAttribute("data-index");

  //Definimos o numero do proximo item
  var nextItemNum = parseInt(currItemNum) + 1;

  //Fazemos o loop e identificamos qual item faz match com o numero proximo item
  for (var n = 0; n < galleryImages.length; n++) {
    var item = galleryImages[n].querySelector("img");
    var itemNum = parseInt(item.getAttribute("data-item"));

    if (itemNum === nextItemNum) {
      //Capturamos o data-src
      var nextSrc = item.getAttribute("data-src");
      var nextIndex = item.getAttribute("data-item");

      skeletonLoading.style.display = "flex";

      //Passamos o data-src para a tag de img no frame
      frameImage.setAttribute("src", nextSrc);
      frameImage.setAttribute("data-index", nextIndex);

      currCounter.innerHTML = counterFormatter(nextIndex);

      skeletonAnim(nextSrc);
    }
  }
};

const prevItem = function () {
  //Identificamos o item atual no frame
  var currItemNum = frameImage.getAttribute("data-index");

  //Definimos o numero do proximo item
  var prevItemNum = parseInt(currItemNum) - 1;

  //Fazemos o loop e identificamos qual item faz match com o numero proximo item
  for (var p = 0; p < galleryImages.length; p++) {
    var item = galleryImages[p];
    var itemNum = parseInt(item.getAttribute("data-item"));

    if (itemNum === prevItemNum) {
      //Capturamos o data-src
      var prevSrc = item.getAttribute("data-src");
      var prevIndex = item.getAttribute("data-item");

      skeletonLoading.style.display = "flex";

      //Passamos o data-src para a tag de img no frame
      frameImage.setAttribute("src", prevSrc);
      frameImage.setAttribute("data-index", prevIndex);

      currCounter.innerHTML = counterFormatter(prevIndex);

      skeletonAnim(prevSrc);
    }
  }
};

btnNext.addEventListener("click", function () {
  nextItem();
});

btnPrev.addEventListener("click", function () {
  prevItem();
});
