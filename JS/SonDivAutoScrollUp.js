window.addEventListener('scroll', function() {
    const boxes1 = document.querySelectorAll('.Our_Services_Introduction_Section');
    const boxes2 = document.querySelectorAll('.Short_Introduction_2_Content');
    const boxes3 = document.querySelectorAll('.Products_Content_Set');
    const boxes4 = document.querySelectorAll('.Products_Content_Sec');
    const triggerHeight = window.innerHeight * 0.99;  // 页面滚动到距离视口顶部99%innerHeight时触发效果

    boxes1.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top; // 获取子元素相对于视口的位置
        if (boxTop < triggerHeight && boxTop > 0) {
            // 为每个子元素添加visible类，并根据位置控制顺序
            setTimeout(() => {
                box.classList.add('visible');
            }, index * 50);  // 按顺序逐个显示，每个子元素延迟50ms
        }
    });

    boxes2.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top; // 获取子元素相对于视口的位置
        if (boxTop < triggerHeight && boxTop > 0) {
            // 为每个子元素添加visible类，并根据位置控制顺序
            setTimeout(() => {
                box.classList.add('visible');
            }, index * 50);  // 按顺序逐个显示，每个子元素延迟50ms
        }
    });

    boxes3.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top; // 获取子元素相对于视口的位置
        if (boxTop < triggerHeight && boxTop > 0) {
            // 为每个子元素添加visible类，并根据位置控制顺序
            setTimeout(() => {
                box.classList.add('visible');
            }, index * 50);  // 按顺序逐个显示，每个子元素延迟50ms
        }
    });

    boxes4.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top; // 获取子元素相对于视口的位置
        if (boxTop < triggerHeight && boxTop > 0) {
            // 为每个子元素添加visible类，并根据位置控制顺序
            setTimeout(() => {
                box.classList.add('visible');
            }, index * 50);  // 按顺序逐个显示，每个子元素延迟50ms
        }
    });
});