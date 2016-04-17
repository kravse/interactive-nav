var Main;
Main = (function() {
  var init, hasClass, dropDowns, removeClass, removeAllDrop, clickBody;

  init = function() {
    var dropParent, dropDowns;
    
    document.addEventListener('click', clickBody, false);

    dropParent = document.querySelectorAll('.drop-parent button');
    for (var i = 0; i < dropParent.length; i++)
      dropParent[i].addEventListener('click', Main.dropDowns, false);

    burger = document.getElementById('burger');
    burger.addEventListener('click', function(){
      var nav = document.getElementById('nav')
      if(Main.hasClass(nav, 'nav-visible-mobile'))
        removeClass(nav, 'nav-visible-mobile');
      else{
        nav.className += ' nav-visible-mobile';
      }
    }, false);

  };

  clickBody = function(e) {
    if(e.target.nodeName.toLowerCase() != 'button' && e.target.nodeName.toLowerCase() != 'a' && e.target.nodeName.toLowerCase() != 'input'){
      Main.removeAllDrop();
    }
  }

  dropDowns = function(e) {
    if(Main.hasClass(e.target.parentElement, 'show-drop'))
      removeClass(e.target.parentElement, 'show-drop');
    else{
      Main.removeAllDrop();
      e.target.parentElement.className += ' show-drop';
    }
  };

  removeAllDrop = function(){
    console.log('in remvoe all');
    dropShow = document.querySelectorAll('.show-drop');
    for (var i = 0; i < dropShow.length; i++) {
      dropShow[i].classList.remove('show-drop');
    }
  }

  hasClass = function(element, cls) {
    console.log(element.className );
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  removeClass = function(el, className) {
    if (el.classList)
      el.classList.remove(className)
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  }
  
  return {
    init: init,
    dropDowns: dropDowns,
    hasClass: hasClass, 
    removeClass: removeClass,
    removeAllDrop: removeAllDrop,
    clickBody: clickBody
  };
})();