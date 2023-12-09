const app = require('../utils/core');

const pageLoader = {
  
  hidePageLoader: function () {
    let pageLoaderElement = document.querySelector('.page-loader');
    pageLoaderElement.classList.add('hidden');
  },
  
  showPageLoader: function () {
    let pageLoaderElement = document.querySelector('.page-loader');
    pageLoaderElement.classList.remove('hidden');
  }

}

hidePageLoader = function () {
  pageLoader.hidePageLoader();
}

window.addEventListener('load', function(){ 
     this.setTimeout(hidePageLoader, 250);
});

module.exports = pageLoader;