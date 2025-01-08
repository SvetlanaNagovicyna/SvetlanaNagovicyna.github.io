

 const gallery  = lightGallery(document.getElementById('informationGallary'), {
    // plugins: [lgZoom, lgThumbnail, lgPager],
    plugins: [lgPager],
     mode: 'lg-zoom-out',
     // zoomOnOpen: true,
    //  startClass: 'lg-start-zoom',

     selector: 'div.lightgallery__item',
     licenseKey: "1123-1232-333-5667",
     // subHtmlSelectorRelative: true,
     counter: false,
     controls: true,
     download: false,
     loop: false,
     // speed: 500,
    // pager: true,
    // animateThumb: false,
    zoomFromOrigin: false,
    // allowMediaOverlap: true,
    // toggleThumb: true,
    // ... other settings

     mobileSettings:
         {

                 mode: 'lg-zoom-out',  // скрыть элементы управления
                controls: false,
             // Другие настройки для мобильных устройств

         },
         // Дополнительные настройки для других разрешений экрана


});

 const generalGallary  = lightGallery(document.getElementById('generalGallary'), {
     plugins: [lgPager],
     mode: 'lg-zoom-out',
     selector: 'div.lightgallery__item',
     licenseKey: "1123-1232-333-5667",
     counter: false,
     controls: true,
     download: false,
     loop: false,
     zoomFromOrigin: false,
     mobileSettings:
         {
             mode: 'lg-zoom-out',
             controls: false,
         },
 });

