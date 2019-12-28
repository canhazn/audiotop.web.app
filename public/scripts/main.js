window.onload = function () {

    var arrayPlaceholder = document.getElementsByClassName('placeholder');

    Array.from(arrayPlaceholder).forEach(placeholder => {

        var small = placeholder.querySelector('.img-small')
        // console.log(placeholder);
        // 1: load small image and show it
        var img = new Image();
        img.src = small.src;
        img.onload = function () {
            small.classList.add('loaded');
        };

        // 2: load large image
        // var imgLarge = new Image();
        // imgLarge.src = placeholder.dataset.large;
        // imgLarge.onload = function () {
        //     imgLarge.classList.add('loaded');
        // };
        // placeholder.appendChild(imgLarge);


    });

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                let placeholder = entry.target;
                if (entry.isIntersecting) {
                    console.log('😍');
                    // 2: load large image
                    var imgLarge = new Image();
                    imgLarge.src = placeholder.dataset.large;
                    imgLarge.onload = function () {
                        imgLarge.classList.add('loaded');
                    };
                    placeholder.appendChild(imgLarge);

                    observer.disconnect();
                }
            });
        });

        io.observe(target)
    };

    Array.from(arrayPlaceholder).forEach(lazyLoad);

}